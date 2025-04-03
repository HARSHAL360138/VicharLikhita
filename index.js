// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const testRoutes = require('./routes/testRoutes');

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Database Connection
// connectDB();

// // Routes
// app.use('/api/test-details', testRoutes);


// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to the Test API to get the details of the test</h1><p>Use the /api/test-details endpoint to get test details.</p>');
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });






const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');
const testRoutes = require('./routes/testRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use('/api', formRoutes);
app.use('/api/test-details', testRoutes);


// Root Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Form API</h1>');
});

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

































// const mongoose = require('mongoose');
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Connect to DB
// connectDB();

// const formSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     mobileNo: { type: String, unique: true },  // Ensure mobileNo is unique
//     place: String,
//     message: String
// });

// // Apply Unique Constraint
// formSchema.index({ mobileNo: 1 }, { unique: true });

// const Form = mongoose.model('Form', formSchema);

// // Submit Form
// app.post('/submit-form', async (req, res) => {
//     try {
//         const { firstName, lastName, mobileNo, place, message } = req.body;

//         // Check if mobile number already exists
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
// });

// // Read All Forms with Filtering
// app.get('/forms', async (req, res) => {
//     try {
//         const filters = req.query; // Get query parameters
//         const query = {};

//         // Apply filters dynamically
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
// });

// // Read Single Form by ID
// app.get('/forms/:id', async (req, res) => {
//     try {
//         const form = await Form.findById(req.params.id);
//         if (!form) return res.status(404).json({ error: 'Form not found' });
//         res.status(200).json(form);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching form' });
//     }
// });

// // Update Form by ID
// app.put('/forms/:id', async (req, res) => {
//     try {
//         const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedForm) return res.status(404).json({ error: 'Form not found' });
//         res.status(200).json({ message: 'Form updated successfully', updatedForm });
//     } catch (error) {
//         res.status(500).json({ error: 'Error updating form' });
//     }
// });

// // Delete Form by ID
// app.delete('/forms/:id', async (req, res) => {
//     try {
//         const deletedForm = await Form.findByIdAndDelete(req.params.id);
//         if (!deletedForm) return res.status(404).json({ error: 'Form not found' });
//         res.status(200).json({ message: 'Form deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error deleting form' });
//     }
// });

// // Root Route
// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to the Form API</h1>');
// });

// // Start Server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });







