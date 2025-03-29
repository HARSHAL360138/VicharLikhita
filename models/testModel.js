const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    testSchedule: String,
    testDuration: String,
    syllabus: String,
    scholarshipOpportunity: String,
    eligibility: String,
    testFormat: String,
    registrationLink: String,
    faq: [{ question: String, answer: String }]
});

module.exports = mongoose.model('Test', TestSchema);
