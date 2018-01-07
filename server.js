var express = require('express');
var app=express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use('/',require('./routes'));
app.use(express.static('web'))
// app.use(express.static('uploads'))
app.set('port',process.env.PORT|| 3000);

app.get('*',function(req,res){
	res.sendFile(path.join(__dirname + '/web/index.html'));
});

var server = app.listen(app.get('port'),function(err){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log("listening on server+",server.address().port);
	}
})

mongoose.connect("mongodb://localhost:27017/fileUpload-2018",function(err,database){
	if(err)
	{
		console.log("err",err);
	}
	else
	{
		db = database;
		console.log("Database Connection Ready");
	}
})