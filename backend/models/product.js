const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String},
    price: { type: String, default: "Please contact for price." },
    quantity: { type: String, default: "Please contact for availability." },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);