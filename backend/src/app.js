const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const authRouter = require("./routes/auth.routes");
const productRouter = require("./routes/product.routes");
const paymentRouter = require("./routes/payment.routes");

const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "https://nebula-seller.vercel.app",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/payment", paymentRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});


module.exports = app;
