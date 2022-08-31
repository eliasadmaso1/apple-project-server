const CartProduct = require("../models/cartProducts");

const getProductsInCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const products = await CartProduct.find({ userId });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addProductToCart = async (req, res) => {
  try {
    const filter = { productId: req.body.productId };
    const existingProduct = await CartProduct.findOne(filter);
    if (existingProduct) {
      const newQuantity = existingProduct.quantity + 1;
      await CartProduct.findOneAndUpdate(filter, { quantity: newQuantity });
      res.status(200).json("The Quantity Of The Product Incremented!");
    } else {
      await CartProduct.insertMany(req.body);
      res.status(200).json("The Product Added Successfully");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const removeCartProduct = async (req, res) => {
  try {
    const filter = { productId: req.body.productId, userId: req.body.userId };
    await CartProduct.findOneAndRemove(filter);
    res.status(200).json("The Product Removed!");
  } catch (err) {
    res.status(500).json(err);
  }
};

const decrementCartProduct = async (req, res) => {
  try {
    const filter = { productId: req.body.productId, userId: req.body.userId };
    const existingProduct = await CartProduct.findOne(filter);
    if (existingProduct.quantity === 1) {
      await CartProduct.findOneAndRemove(filter);
      res.status(200).json("The Product Removed From Cart!");
    } else if (existingProduct) {
      const newQuantity = existingProduct.quantity - 1;

      await CartProduct.findOneAndUpdate(filter, { quantity: newQuantity });
      res.status(200).json("The Product Quantity Decremented!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getProductsInCart,
  addProductToCart,
  removeCartProduct,
  decrementCartProduct,
};
