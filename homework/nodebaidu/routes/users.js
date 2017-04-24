var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('./db');
var connection = mysql.createPool(dbconfig);
/* 后台路由页面 */

//获取新闻
router.get('/getnews', function(req, res, next) {
  connection.query('SELECT * FROM `news` order by id desc',function(err,rows){
  	res.json(rows);
  })
});
//确认更新
router.post('/update',function(req,res){
	var newsid = req.body.id,
	    newstype = req.body.newstype,
	    newstitle = req.body.newstitle,
	    newstime = req.body.newstime,
	    newssrc = req.body.newssrc,
	    newsimg = req.body.newsimg;
	    connection.query('UPDATE news SET newstitle = ?,  newstype = ? , newsimg = ?,newstime = ?,newssrc = ?  WHERE id = ? ',[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
    		res.json(rows);
    });

});

//模态框取值

router.get('/curnews',function(req,res){
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE id=?',[newsid],function(err,rows){
		res.json(rows);
	});
});

//删除

router.post('/delete',function(req,res){
	var newsid = req.body.newsid;
	connection.query('DELETE FROM news WHERE id =?',[newsid],function(err,result){
		res.json(result);
	});
});

//insert
router.post('/insert',function(req,res){
	var	newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newsimg = req.body.newsimg,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc;
	connection.query('INSERT INTO news VALUES (NULL,? ,? ,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function(err,result){
		res.json(result);
	});
});

module.exports = router;
