const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// Use environment variable MONGO_URL from Kubernetes deployment or fallback to localhost
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/yolomy';

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Check Connection
db.once('open', () => {
    console.log('Database connected successfully');
});

// Check for DB Errors
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(upload.array());
app.use(cors());

// Routes
app.use('/api/products', productRoute);

// Define PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
