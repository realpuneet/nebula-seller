const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require('./routes/auth.routes');
const morgan = require("morgan");

const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use('/api/auth', authRouter);


module.exports = app;
