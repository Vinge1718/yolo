const multer = require('multer');
const path = require('path');




// Set Storage engine
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function(req, file, cb){
        cb(null,file.originalname);
    }
})

// Init upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: function(req,file, cb){
        checkFileType(file, cb);
    }
}).single('image');



// Check file type
function checkFileType(file, cb){
    // Alowed ext
    const fileType = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = fileType.test( path.extname(file.originalname).toLowerCase());
    // check mime
    const mimetype = fileType.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true);
    }else{
        cb('Error: Images Only!!')
    }
}


module.exports = upload;