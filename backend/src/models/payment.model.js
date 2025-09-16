const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Success","Pending","Failed"],
        default: "Pending",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    payment_id: {
        type: String,
    }
})

const paymentModel = mongoose.model("payment", paymentSchema);

module.exports = paymentModel;
