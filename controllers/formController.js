// const Form = require('../models/Form');

// // Submit Form
// const submitForm = async (req, res) => {
//     try {
//         const { firstName, lastName, mobileNo, place, message } = req.body;

//         const existingUser = await Form.findOne({ mobileNo });
//         if (existingUser) {
//             return res.status(400).json({ error: 'Mobile number already exists' });
//         }

//         const newForm = new Form({ firstName, lastName, mobileNo, place, message });
//         await newForm.save();
//         res.status(201).json({ message: 'Form submitted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error submitting form' });
//     }
// };

// // Get All Forms
// const getForms = async (req, res) => {
//     try {
//         const filters = req.query;
//         const query = {};

//         if (filters.firstName) query.firstName = new RegExp(filters.firstName, 'i');
//         if (filters.lastName) query.lastName = new RegExp(filters.lastName, 'i');
//         if (filters.mobileNo) query.mobileNo = filters.mobileNo;
//         if (filters.place) query.place = new RegExp(filters.place, 'i');
//         if (filters.message) query.message = new RegExp(filters.message, 'i');

//         const forms = await Form.find(query);
//         res.status(200).json(forms);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching forms' });
//     }
// };

// // Get Form by ID
// const getFormById = async (req, res) => {
//     try {
//         const form = await Form.findById(req.params.id);
//         if (!form) return res.status(404).json({ error: 'Form not found' });
//         res.status(200).json(form);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching form' });
//     }
// };

// // Update Form
// const updateForm = async (req, res) => {
//     try {
//         const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedForm) return res.status(404).json({ error: 'Form not found' });
//         res.status(200).json({ message: 'Form updated successfully', updatedForm });
//     } catch (error) {
//         res.status(500).json({ error: 'Error updating form' });
//     }
// };

// // Delete Form
// const deleteForm = async (req, res) => {
//     try {
//         const deletedForm = await Form.findByIdAndDelete(req.params.id);
//         if (!deletedForm) return res.status(404).json({ error: 'Form not found' });
//         res.status(200).json({ message: 'Form deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error deleting form' });
//     }
// };

// module.exports = { submitForm, getForms, getFormById, updateForm, deleteForm };



const Form = require('../models/Form');

// Submit Form
const submitForm = async (req, res) => {
    try {
        const { firstName, lastName, mobileNo, place, message } = req.body;

        // Check if mobile number already exists
        const existingUser = await Form.findOne({ mobileNo });
        if (existingUser) {
            return res.status(400).json({ error: 'This mobile number has already been used!' });
        }

        const newForm = new Form({ firstName, lastName, mobileNo, place, message });
        await newForm.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting form' });
    }
};

// Get All Forms
const getForms = async (req, res) => {
    try {
        const filters = req.query;
        const query = {};

        if (filters.firstName) query.firstName = new RegExp(filters.firstName, 'i');
        if (filters.lastName) query.lastName = new RegExp(filters.lastName, 'i');
        if (filters.mobileNo) query.mobileNo = filters.mobileNo;
        if (filters.place) query.place = new RegExp(filters.place, 'i');
        if (filters.message) query.message = new RegExp(filters.message, 'i');

        const forms = await Form.find(query);
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching forms' });
    }
};

// Get Form by ID
const getFormById = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) return res.status(404).json({ error: 'Form not found' });
        res.status(200).json(form);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching form' });
    }
};

// Update Form
const updateForm = async (req, res) => {
    try {
        const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedForm) return res.status(404).json({ error: 'Form not found' });
        res.status(200).json({ message: 'Form updated successfully', updatedForm });
    } catch (error) {
        res.status(500).json({ error: 'Error updating form' });
    }
};

// Delete Form
const deleteForm = async (req, res) => {
    try {
        const deletedForm = await Form.findByIdAndDelete(req.params.id);
        if (!deletedForm) return res.status(404).json({ error: 'Form not found' });
        res.status(200).json({ message: 'Form deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting form' });
    }
};

module.exports = { submitForm, getForms, getFormById, updateForm, deleteForm };
