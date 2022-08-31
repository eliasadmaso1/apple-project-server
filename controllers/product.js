const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addProduct = async (req, res) => {
  try {
    await Product.insertMany([req.body], (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteProduct = async(req,res)=>{
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateProduct = async (req,res)=>{
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({product : updatedProduct, message : "Product Updated!"});
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllProducts, addProduct, deleteProduct, updateProduct };
