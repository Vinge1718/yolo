const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const productRoute = require('./routes/api/productRoute');
const dotenv=require('dotenv')
dotenv.config({path:'./.env'})
// define a url to connect to the database
const MONGODB_URI = process.env.MONGO_URI
try {
     mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true});
    // let db = mongoose.connection;
    // console.log(typeof(db));
} catch (error) {
    console.log(error);
}

// Check Connection
mongoose.connection.once('open', ()=>{
    console.log('Database connected successfully')
})

// Check for DB Errors
mongoose.connection.on('error', (error)=>{
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
const PORT = process.env.PORT || 5050

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})