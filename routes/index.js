var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
  	copyright:new Date().getFullYear(),
  	title:'xmirror - 设计师的画廊',
  	pictures:[
  		{url:'http://localhost:3000/uploads/1469028786136_明略图谱字.jpg',title:'明略图谱字'},
  		{url:'http://localhost:3000/uploads/1468943326447_1212 - 副本.jpg',title:'1212 - 副本'},
  		{url:'http://localhost:3000/uploads/1468943433315_aazxz - 副本 (4).jpg',title:'aazxz - 副本 (4)'},
  		  		{url:'http://localhost:3000/uploads/1469028786136_明略图谱字.jpg',title:'明略图谱字'},
  		{url:'http://localhost:3000/uploads/1468943326447_1212 - 副本.jpg',title:'1212 - 副本'},
  		{url:'http://localhost:3000/uploads/1468943433315_aazxz - 副本 (4).jpg',title:'aazxz - 副本 (4)'},
  		  		{url:'http://localhost:3000/uploads/1469028786136_明略图谱字.jpg',title:'明略图谱字'},
  		{url:'http://localhost:3000/uploads/1468943326447_1212 - 副本.jpg',title:'1212 - 副本'},
  		{url:'http://localhost:3000/uploads/1468943433315_aazxz - 副本 (4).jpg',title:'aazxz - 副本 (4)'},
  		  		{url:'http://localhost:3000/uploads/1469028786136_明略图谱字.jpg',title:'明略图谱字'},
  		{url:'http://localhost:3000/uploads/1468943326447_1212 - 副本.jpg',title:'1212 - 副本'},
  		{url:'http://localhost:3000/uploads/1468943433315_aazxz - 副本 (4).jpg',title:'aazxz - 副本 (4)'},
  		  		{url:'http://localhost:3000/uploads/1469028786136_明略图谱字.jpg',title:'明略图谱字'},
  		{url:'http://localhost:3000/uploads/1468943326447_1212 - 副本.jpg',title:'1212 - 副本'},
  		{url:'http://localhost:3000/uploads/1468943433315_aazxz - 副本 (4).jpg',title:'aazxz - 副本 (4)'},
  		  		{url:'http://localhost:3000/uploads/1469028786136_明略图谱字.jpg',title:'明略图谱字'},
  		{url:'http://localhost:3000/uploads/1468943326447_1212 - 副本.jpg',title:'1212 - 副本'},
  		{url:'http://localhost:3000/uploads/1468943433315_aazxz - 副本 (4).jpg',title:'aazxz - 副本 (4)'},
  		  		{url:'http://localhost:3000/uploads/1469028786136_明略图谱字.jpg',title:'明略图谱字'},
  		{url:'http://localhost:3000/uploads/1468943326447_1212 - 副本.jpg',title:'1212 - 副本'},
  		{url:'http://localhost:3000/uploads/1468943433315_aazxz - 副本 (4).jpg',title:'aazxz - 副本 (4)'},
  	]
  });
});

module.exports = router;
