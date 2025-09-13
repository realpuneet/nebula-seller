const productModel = require("../models/product.model");
const { uploadFile } = require("../services/storage.service");

async function createProduct(req, res) {
  const { title, description, price, stock } = req.body;
  const files = await Promise.all(
    req.files.map(async function (file) {
      return await uploadFile(file.buffer);
    })
  );

  const seller = req.seller;

  const realPrice = JSON.parse(price);

  const product = await productModel.create({
    title,
    description,
    images: files.map((file) => file.url),
    price: {
      amount: realPrice.amount,
      currency: realPrice.currency,
    },
    seller: seller._id,
    stock: parseInt(stock),
  });

  return res.status(201).json({
    message: "Product created successfully!",
    product,
  });
}

async function getSellerProducts(req, res) {
  const seller = req.seller;

  const products = await productModel.find({
    seller: seller._id,
  });

  res.status(200).json({
    message: "Seller Products Fetched!",
    products,
  });
}

async function getAllProducts(req, res) {
  const products = await productModel?.find().populate("seller", "username email fullname role");

  res.status(200).json({
    message: "All products fetched",
    products,
  });
}

async function getProductDetails(req, res) {
  const productId = req.params.id;

  const product = await productModel.findOne({
    _id: productId,
  });

  res.status(200).json({
    message: "product details fetched successfully",
    product,
  });
}

module.exports = {
  createProduct,
  getSellerProducts,
  getAllProducts,
  getProductDetails
};
