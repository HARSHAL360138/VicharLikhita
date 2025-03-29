const Test = require('../models/testModel');

// Get all test details
exports.getAllTests = async (req, res) => {
    try {
        const tests = await Test.find();
        res.status(200).json(tests);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get test by ID
exports.getTestById = async (req, res) => {
    try {
        const testDetail = await Test.findById(req.params.id);
        if (!testDetail) return res.status(404).json({ message: 'Test not found' });
        res.status(200).json(testDetail);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Create a new test entry
exports.createTest = async (req, res) => {
    try {
        const newTest = new Test(req.body);
        await newTest.save();
        res.status(201).json(newTest);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data', error });
    }
};

// Update test details
exports.updateTest = async (req, res) => {
    try {
        const updatedTest = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTest);
    } catch (error) {
        res.status(400).json({ message: 'Update failed', error });
    }
};

// Delete test details
exports.deleteTest = async (req, res) => {
    try {
        await Test.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Test details deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Deletion failed', error });
    }
};
