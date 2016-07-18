var express = require('express');
var router = express.Router();
var formidable = require('formidable');

router.post('/',function(req,res){
	var type=req.headers['content-type']||'';
	if(0==type.indexOf('multipart/form-data')){
		var form=new formidable.IncomingForm();
		form.on('field',function(field,value){
			console.log(field,value);
		});
		form.on('file',function(name,file){
			console.log(name,file);
		});
		form.on('end',function(){
			console.log('received file');
			res.statusCode=200;
			res.send('OK: file uploaded');
		});
		form.parse(req);

	}else{
		res.statusCode=400;
		res.send('Bad Request: expecting multipart/form-data');
	}
});

module.exports=router;