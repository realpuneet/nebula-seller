const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { authUser } = require("../middlewares/auth.middleware");


//user
router.post("/user/register", authController.registerUser);
router.post("/user/login",authUser, authController.loginUser);

//seller
router.post("/seller/register", authController.registerSeller);
router.post("/seller/login", authController.loginSeller)


module.exports = router;
