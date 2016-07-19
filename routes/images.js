var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var fs = require('fs');

router.post('/',function(req,res){
	var type=req.headers['content-type']||'';
	if(0==type.indexOf('multipart/form-data')){
		var form=new multiparty.Form({uploadDir:'public/uploads/'});
		form.parse(req,function(err,fields,files){
			var filesTmp = JSON.stringify(files,null,2);
			if(err){
				console.log('parse error: ' + err);
			} else {
				console.log('parse files: ' + filesTmp);
				var inputFile = files.img[0];
				var uploadedPath = inputFile.path;
				var dstPath = 'public/uploads/' + Date.now() + '_' +inputFile.originalFilename;
				//重命名为真实文件名
				fs.rename(uploadedPath, dstPath, function(err) {
					if(err){
						console.log('rename error: ' + err);
					} else {
						console.log('rename ok');
					}
				});
			}
			console.log('received file');
			res.status(200).json({msg:'file uploaded'});
		});

	}else{
		res.status(400).json({msg:'expecting multipart/form-data'});
	}
});

module.exports=router;