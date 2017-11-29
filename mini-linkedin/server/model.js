const mongoose = require('mongoose')

// 连接 mongo 并且使用imooc这个集合，没有会自动创建
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
