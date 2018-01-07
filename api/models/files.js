var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var file = new Schema({
	originalname  : {type : String},
	destination : {type : String}
});

module.exports = mongoose.model('file',file);