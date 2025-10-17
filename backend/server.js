const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// Connecting to the Database
let mongodb_url = 'mongodb://mongo:27017/';
let dbName = 'yolomy';

// define a url to connect to the database
const MONGODB_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/ecomdb';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

// Check Connection
db.once('open', () => {
  console.log('✅ Database connected successfully');
});

// Check for DB Errors
db.on('error', (error) => {
  console.error('❌ Database connection error:', error);
});

// Initialize express
const app = express();

// Body parser middleware
app.use(express.json());
app.use(upload.array());

// CORS setup
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Routes
app.use('/api/products', productRoute);

// Define the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
