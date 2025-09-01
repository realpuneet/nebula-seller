const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const authRouter = require("./routes/auth.routes");
const productRouter = require("./routes/product.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);
app.use("/products", productRouter);

module.exports = app;
