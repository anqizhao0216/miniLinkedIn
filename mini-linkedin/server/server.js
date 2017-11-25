const express = require('express')
const mongoose = require('mongoose')

// 连接 mongo 并且使用imooc这个集合，没有会自动创建
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('mongo connected successfully')
})

// mongo 里有文档的概念 类似于关系型数据库中的表
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))
// create new data
// User.create({
//   user: 'xiaohua',
//   age: 12
// }, (err, doc) => {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// User.remove({age: 18}, (err, doc) => {
//   console.log(doc)
// })

// User.update({'user':'xiaoming'}, {'$set': {age: 26}}, (err, doc) => {
//   console.log(doc)
// })
const app = express()

app.get('/', function(req, res) {
  res.send('<h1>Hello World!</h1>')
})

app.get('/data', (req, res) => {
  User.findOne({user: 'xiaoming'}, (err, doc) => {
    res.json(doc)
  })

})

app.listen(9093, function() {
  console.log('node app start at port 9093')
})
