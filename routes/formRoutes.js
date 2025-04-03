const express = require('express');
const { submitForm, getForms, getFormById, updateForm, deleteForm } = require('../controllers/formController');

const router = express.Router();

router.post('/submit-form', submitForm);
router.get('/forms', getForms);
router.get('/forms/:id', getFormById);
router.put('/forms/:id', updateForm);
router.delete('/forms/:id', deleteForm);

module.exports = router;
