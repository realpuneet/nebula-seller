const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authSeller = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      msg: "Unauthorized!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    if (user.role !== "seller") {
      return res.status(403).json({
        msg: "forbidden, you don't have required role!",
      });
    }

    req.seller = user;

    next();
  } catch (error) {
    res.status(401).json({
      msg: "Unauthorized!",
    });
  }
};

module.exports = { authSeller };
