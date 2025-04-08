const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true, match: /^\S+@\S+\.\S+$/ },
  phone: { type: String, required: true, match: /^\d{10}$/ },
  dob: { type: Date, required: true },
  course: { type: String, required: true, enum: ["Web Development", "Data Science", "Cyber Security"] },
  batchTiming: { type: String, required: true, enum: ["Morning", "Afternoon", "Evening"] },
  learningMode: { type: String, required: true, enum: ["Online", "Offline"] },
  submittedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
