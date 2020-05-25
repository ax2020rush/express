// var express = require('express');
// var router = express.Router();
// var parseData = require('../Modul/parse')
// const user = require('../public/json/package.json')
//
// /* GET user page. */
// router.post('/users', function (req, res, next) {
//   // res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With')
//   var username = req.body.username;//post专用
//   var pwd = req.body.pwd;
//   var ReceptionName = parseData(req).username //前台用户名
//   var ReceptionPas = parseData(req).password //前台用户密码
//   if (ReceptionName === user.name && ReceptionPas === user.password) {
//     return res.send({
//       status: 200,
//       data: 1,
//       massage: '登录成功'
//     })
//   } else {
//     return res.send({
//       status: 500,
//       data: '请检测用户名，或者密码是否输入正确',
//       massage: '登录失败'
//     })
//   }
//
// });
//
// module.exports = router;
