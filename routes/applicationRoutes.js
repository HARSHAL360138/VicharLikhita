const express = require("express");
const {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  getDropdownOptions,
} = require("../controllers/applicationController");

const router = express.Router();

router.post("/apply", createApplication);
router.get("/applications", getApplications);
router.get("/applications/:id", getApplicationById);
router.put("/applications/:id", updateApplication);
router.delete("/applications/:id", deleteApplication);
router.get("/options", getDropdownOptions); // Select options route

module.exports = router;
