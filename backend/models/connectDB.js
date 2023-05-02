const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
const connectDB = (url)=>{
    const connect = mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
return connect;
}

module.exports = connectDB