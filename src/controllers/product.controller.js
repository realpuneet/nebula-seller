// const productModel = require("../models/product.model");


async function createProduct(req, res){

    const files = req.files;

    console.log(files);
    res.status(200).json({
        message:"It's working",
       files: files.originalname
    })

}



module.exports = {
    createProduct
}