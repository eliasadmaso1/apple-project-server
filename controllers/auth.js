const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const registration = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.send("user created!");
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
      return res.status(401).json("user not found");
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(500).json("username or password not correct");
    } else {
      const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SECRET_KEY);
      const { password, isAdmin, ...otherDetails } = user._doc;
      return res.cookie('access_token',token,{
          httpOnly:true
      }).status(200).json({ otherDetails });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { registration, login };
