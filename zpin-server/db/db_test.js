/* test mongoose */

const md5 = require('blueimp-md5')

// 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/zpin_job')
const conn = mongoose.connection
conn.on('connected', function () {
  console.log('success')
})

// 得到对应特定集合的Model
// 定义schema（描述文档结构）
const userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  type: {type: String, required: true}, // boss | seeker
  avatar: {type: String}
})
// 定义Model
const UserModel = mongoose.model('user', userSchema)

// 通过Model或其实例对集合数据进行CRUD操作
function testSave() {
  // 创建UserModel实例
  const userModel = new UserModel({username: 'doublewhite', password: md5('a1b2c3'), type: 'boss'})
  // save
  userModel.save(function (error, userDoc) {
    console.log('save()', error, userDoc)
  })
}

testSave()
