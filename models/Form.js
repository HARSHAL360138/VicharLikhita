const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNo: { type: String, unique: true },
    place: String,
    message: String
}, { timestamps: true });

formSchema.index({ mobileNo: 1 }, { unique: true });

module.exports = mongoose.model('Form', formSchema);
