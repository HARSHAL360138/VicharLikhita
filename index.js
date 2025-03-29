const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const testRoutes = require('./routes/testRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/api/test-details', testRoutes);


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Test API to get the details of the test</h1><p>Use the /api/test-details endpoint to get test details.</p>');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
