const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/zpin_job')
const conn = mongoose.connection
conn.on('connected', () => {
  console.log('db connect success')
})

const userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  type: {type: String, required: true}, // boss | seeker
  avatar: {type: String},
  post: {type: String},
  info: {type: String},
  company: {type: String},
  salary: {type: String}
})

const UserModel = mongoose.model('user', userSchema)

exports.UserModel = UserModel
