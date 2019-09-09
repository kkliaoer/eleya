var express = require("express");
var app = express();
app.listen(666); //监听端口号666

//配置静态托管目录
app.use(express.static(__dirname))

//
//用户登录login 判断登录密码用户名是否正确
app.get("/view/login/login.json", function(req, res) {
	//后端打印的内容
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0',
		// useConnectionPooling: true
	});
	//首先在数据库中查找用户名和密码
	connection.connect();
	var sql = 'select * from user where user_phone=' + req.query.userid
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		// console.log(results)
		//res.json(results)
		if (results == "") {
			//若返回的results为空字符串 表示数据库中没有该用户，则进行注册
			var sql_insert = 'insert user VALUES(null,' + req.query.userid + ',null,' + req.query.userid + ',' + req.query.password + ',null,null)'
			connection.query(sql_insert, function(error, results_insert) {
				if (error) {
					console.log(error)
				}
				console.log(results_insert)
				res.send("注册成功！")
			});
		} else {
			//若返回的不为空，则进行账号密码是否匹配的判定
			var sql_pan = 'select * from user where user_phone=' + req.query.userid + ' and user_password=' + req.query.password
			connection.query(sql_pan, function(error, results_pan) {
				if (error) {
					console.log(error)
				}
				console.log(results_pan)
				if (results_pan == "") {
					//若返回为空字符串 说明密码错误
					res.send("账号或密码错误！请重新输入")
				} else {
					//若返回不为空则账号密码正确，返回json数据
					console.log(results_pan)
					res.json(results_pan)
				}
			});
		}
	});
	// connection.end();
})

//加载所有商家的数据库接口
app.get("/loadAll", function(req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0'
	});
	connection.connect();
	var sql = 'select * from shop'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log("店铺加载ok")
		res.json(results)
	});
	connection.end();
})

//前端加载每个商家数据库中的接口
// store的菜品数据库food
app.get("/view/stores/loadFood0", function(req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0'
	});
	connection.connect();
	var sql = 'SELECT shop.*,food.* from shop JOIN food on shop.shop_id=food.shop_id where shop.shop_id=1'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});
	connection.end();
})

app.get("/view/stores/loadFood1", function(req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0'
	});
	connection.connect();
	var sql = 'SELECT shop.*,food.* from shop JOIN food on shop.shop_id=food.shop_id where shop.shop_id=2'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});
	connection.end();
})

app.get("/view/stores/loadFood2", function(req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0'
	});
	connection.connect();
	var sql = 'SELECT shop.*,food.* from shop JOIN food on shop.shop_id=food.shop_id where shop.shop_id=3'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});
	connection.end();
})

app.get("/view/stores/loadFood3", function(req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0'
	});
	connection.connect();
	var sql = 'SELECT shop.*,food.* from shop JOIN food on shop.shop_id=food.shop_id where shop.shop_id=4'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});
	connection.end();
})

app.get("/view/stores/loadFood4", function(req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0'
	});
	connection.connect();
	var sql = 'SELECT shop.*,food.* from shop JOIN food on shop.shop_id=food.shop_id where shop.shop_id=5'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});
	connection.end();
})

app.get("/view/stores/loadFood5", function(req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0'
	});
	connection.connect();
	var sql = 'SELECT shop.*,food.* from shop JOIN food on shop.shop_id=food.shop_id where shop.shop_id=6'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});
	connection.end();
})

app.get("/view/stores/loadFood6", function(req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0'
	});
	connection.connect();
	var sql = 'SELECT shop.*,food.* from shop JOIN food on shop.shop_id=food.shop_id where shop.shop_id=7'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});
	connection.end();
})


//订单查询页面
app.get("/view/dingdan/loadDingdan", function(req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'eleya1.0'
	});
	connection.connect();
	var sql = 'SELECT `user`.*,food.*,`order`.*,shop.* from `user`,food,`order`,shop where `user`.user_id= `order`.user_id and food.food_id=`order`.food_id and shop.shop_id=`order`.shop_id'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});
	connection.end();
})