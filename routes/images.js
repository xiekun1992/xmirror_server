var express = require('express');
var router = express.Router();
var fs = require('fs');
var formidable = require('formidable');
var uploadProgress={};

router.post('/',function(req,res){
	var type=req.headers['content-type']||'';
	if(0==type.indexOf('multipart/form-data')){
		var form = new formidable.IncomingForm();
		form.encoding='utf8';
		form.maxFieldsSize=10*1024*1024;
		var uploadId=req.query.uploadId;
		uploadProgress[uploadId]=0;
		form.on('progress', function(bytesReceived, bytesExpected){
			uploadProgress[uploadId] = Math.floor(bytesReceived / bytesExpected * 100);
			console.log(uploadProgress[uploadId],uploadId);
			console.log('progress');
		});
		form.parse(req, function(err, fields, files){
			console.log(fields);
			console.log(files);
			var filesTmp = JSON.stringify(files,null,2);
			if(err){
				console.log('parse error: ' + err);
			} else {
				console.log('parse files: ' + filesTmp);
				var inputFile = files.img;
				var uploadedPath = inputFile.path;
				var dstPath = 'public/uploads/' + Date.now() + '_' +inputFile.name;
				var readStream=fs.createReadStream(uploadedPath);
				var writeStream=fs.createWriteStream(dstPath);
				readStream.pipe(writeStream);
				readStream.on('close',function(){
					fs.unlink(uploadedPath);
				});
			}
			res.status(200).json({code:1001,msg:'file uploaded'});
		});

	}else{
		res.status(400).json({code:1002,msg:'expecting multipart/form-data'});
	}
});
router.get('/:uploadId/progress',function(req,res){
	var progress=uploadProgress[req.params.uploadId];
	if(progress<100){
		res.status(200).json({code:1003,msg:progress});
	}else{
		res.status(200).json({code:1004,msg:progress});
	}
});


module.exports=router;