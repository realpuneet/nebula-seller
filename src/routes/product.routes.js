const express = require("express");
const productController = require("../controllers/product.controller");
const multer = require("multer");
const { authSeller } = require("../middlewares/auth.middleware");

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post("/create-product",upload.array("images", 5), productController.createProduct);

module.exports = router;
