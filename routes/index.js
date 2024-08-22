var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'); //引入对象
// var userModel = mongoose.model('user');//引入模型
// // var houseModel = mongoose.model('house');//引入模型
// console.log('mongoose',mongoose.models);
const models = mongoose.models
for (const key in models) {
  if (Object.hasOwnProperty.call(models, key)) {
  globalThis[key + 'Model'] = models[key]; // 在浏览器和Node.js中都适用
  // 或者使用 window[key] = obj[key]; // 仅在浏览器环境中
  }
}
// console.log('houseModel',houseModel);
// var URL = require('url'); //引入URL中间件，获取req中的参数需要

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function(req, res) {
  console.log('req.body', req.body);
  new userModel({ //实例化对象，新建数据
      content: req.body.content,
      updated_at: Date.now()
  }).save()
});

router.post('/addHouse', function(req, res) {
  console.log('req', req.query);
  new houseModel({ //实例化对象，新建数据
      address: req.query.address,
      updated_at: Date.now()
  }).save()
});
router.get('/search', function(req, res, next) {
  userModel.
  find()
  .sort('updated_at')
  .exec(function(err, row, count) {
    res.send({
      result: row,
      count: count || 0
    });
  });
});
module.exports = router;
