const Application = require("../models/applicationModel");

// Create Application
const createApplication = async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.validate();
    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Validation Error", details: error.message });
  }
};

// Get All Applications with Filters
const getApplications = async (req, res) => {
  try {
    let filters = {};
    if (req.query.fullName) filters.fullName = { $regex: req.query.fullName, $options: "i" };
    if (req.query.email) filters.email = req.query.email;
    if (req.query.phone) filters.phone = req.query.phone;
    if (req.query.dob) filters.dob = new Date(req.query.dob);
    if (req.query.course) filters.course = req.query.course;
    if (req.query.batchTiming) filters.batchTiming = req.query.batchTiming;
    if (req.query.learningMode) filters.learningMode = req.query.learningMode;

    const applications = await Application.find(filters);
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
};

// Get Single Application
const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) return res.status(404).json({ error: "Application not found" });
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch application" });
  }
};

// Update Application
const updateApplication = async (req, res) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedApplication) return res.status(404).json({ error: "Application not found" });
    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(400).json({ error: "Validation Error", details: error.message });
  }
};

// Delete Application
const deleteApplication = async (req, res) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(req.params.id);
    if (!deletedApplication) return res.status(404).json({ error: "Application not found" });
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete application" });
  }
};

// Get Dropdown Options
const getDropdownOptions = (req, res) => {
  res.status(200).json({
    courses: ["Web Development", "Data Science", "Cyber Security", "Machine Learning"],
    batchTimings: ["Morning", "Afternoon", "Evening"],
    learningModes: ["Online", "Offline"],
  });
};

module.exports = {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  getDropdownOptions,
};
