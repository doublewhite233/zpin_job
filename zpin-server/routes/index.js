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
  console.log(username, password, type)
  UserModel.findOne({username}, (error, user) => {
    if (user) {
      console.log(user)
      res.send({code: 1, msg: '用户名已存在'})
    } else {
      new UserModel({username, password: md5(password), type, avatar: parseInt(Math.random()*10+1).toString()}).save((error, user) => {
        // 生成cookie
        // 持久化cookie,浏览器会保存在本地文件
        res.cookie('userid', user._id, {maxAge: 1000*60*60*24})
        const data = {username, type, _id: user._id, avatar: user.avatar}
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
      res.cookie('userid', user._id, {maxAge: 1000*60*60*24})
      res.send({code: 0, data: user})
    } else {
      res.send({code: 1, msg: '用户名或密码错误'})
    }
  })
})

// update
router.post('/update', function (req, res) {
  // 从请求cookie中得到userid
  const userid = req.cookies.userid
  if (!userid) {
    return res.send({code: 1, msg: '请先登录'})
  }
  const user = req.body
  UserModel.findByIdAndUpdate({_id: userid}, user, function (error, oldUser) {
    if (!oldUser) {
      // 通知浏览器删除cookie
      res.clearCookie('userid')
      res.send({code: 1, msg: '请先登录'})
    } else {
      const {_id, username, type} = oldUser
      const data = Object.assign(user, {_id, username, type})
      res.send({code: 0, data})
    }
  })
})

module.exports = router;
