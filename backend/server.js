const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// Connecting to the Database
// let mongodb_url = 'mongodb://localhost/';
// let mongodb_url = 'mongodb://yolo-database-container:56081/yoloip';
// let mongodb_url = 'mongodb://localhost:56081/yoloip';
// let mongodb_url = 'mongodb://mongo:56081/yoloip';
let mongodb_url = 'mongodb+srv://rajibraz:NRTRsNgIuS7p15M8@cluster0.counwdf.mongodb.net/?retryWrites=true&w=majority/yoloip';
// let dbName = 'yolomy';

// define a url to connect to the database
// const MONGODB_URI = process.env.MONGODB_URI || mongodb_url + dbName
const MONGODB_URI = process.env.MONGODB_URI || mongodb_url
mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true  } )
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
    console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
    console.log(error);
})

// Initializing express
const app = express()

// Body parser middleware
app.use(express.json())

// 
app.use(upload.array()); 

// Cors 
app.use(cors());

// Use Route
app.use('/api/products', productRoute)

// Define the PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
