var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '欢迎使用Xmirror', copyright:'© '+new Date().getFullYear()+' Xmirror'});
});

module.exports = router;
