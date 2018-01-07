var fileModel = require('../models/files');

var fileCtrl = {};

fileCtrl.uploadFile = function(req,res)
{
	console.log("req.files=",req.files);
	
	fileModel.create(req.files,function(err,file){
		if(err)
		{
			res.status(400).json({status : "error", message : " err creating file", err:err});
		}
		else
		{
			res.status(200).json({status : "success", message : " file Uploaded successfully", doc:file});
		}
	})
}
fileCtrl.getAllFiles = function(req,res)
{
	fileModel.find({},function(err,files){
		if(err)
		{
			res.status(400).json({status : "error", message : " err fetching files", err:err});
		}
		else
		{
			res.status(200).json({status : "success", message : " file fetch successfully", docs:files});
		}
	})
}
fileCtrl.deleteFile = function(req,res)
{
	fileModel.remove({_id : req.params.id},function(err,file){
		if(err)
		{
			res.status(400).json({status : "error", message : " err removing files", err:err});
		}
		else
		{
			res.status(200).json({status : "success", message : " file removed successfully", docs:file});
		}
	})
}
module.exports =  fileCtrl;