var express= require('express');
var router = express.Router();
var fileCtrl = require('./api/controllers/fileController');
var multer      = require('multer');
var storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, __dirname+'/web/uploads');
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname); 
    }
});
var upload = multer({ 
    storage: storage,
    fileFilter : function(req, file, callback) { 
        if (['png','jpg','jpeg'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
            return callback(new Error('Wrong extension type'));
        }
        callback(null, true);
    }  
});
router.post("/doc/uploadFile",upload.any(),fileCtrl.uploadFile);
router.get("/doc/getAllFiles",fileCtrl.getAllFiles);
router.delete("/doc/deleteFile/:id",fileCtrl.deleteFile);

module.exports= router;