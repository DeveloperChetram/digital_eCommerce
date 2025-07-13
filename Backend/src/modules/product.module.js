const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    owner: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: Number, required: true },
    fileType: { type: String, required: true },
    fileUrl: { type: String, required: true },
    productDescription: { type: String, required: true },
    visibility: { type: String, enum: ['Public', 'Private'], required: true },
    addAlert: { type: Boolean, default: false },
    alertMessage: { type: String },
    imageUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);