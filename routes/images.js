var express = require('express');
var router = express.Router();
var formidable = require('formidable');

router.post('/',function(req,res){
	var type=req.headers['content-type']||'';
	if(0==type.indexOf('multipart/form-data')){

	}else{
		res.statusCode=400;
		res.send('Bad Request: expecting multipart/form-data');
	}
});

module.exports=router;