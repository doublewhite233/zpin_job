var express = require('express')
const md5 = require('blueimp-md5')
const {UserModel} = require('../db/models')
const filter = {password: 0, __v: 0} // 查询时过滤指定属性

var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// register
// data: username, password, type
router.post('/register', function(req, res) {
  const {username, password, type} = req.body
  UserModel.findOne({username}, (error, user) => {
    if (user) {
      res.send({code: 1, msg: 'this username already exists'})
    } else {
      new UserModel({username, password: md5(password), type}).save((error, user) => {
        // 生成cookie
        // 持久化cookie,浏览器会保存在本地文件
        res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
        const data = {username, type, _id: user._id}
        res.send({code: 0, data})
      })
    }
  })
})

// login
// data: username, password, type
router.post('/login', function (req, res) {
  const {username, password} = req.body
  UserModel.findOne({username, password: md5(password)}, filter, (error, user) => {
    if (user) {
      res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
      res.send({code: 0, data: user})
    } else {
      res.send({code: 1, msg: 'incorrect username or password'})
    }
  })
})

module.exports = router;
