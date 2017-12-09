const mongoose = require('mongoose')
   
// 连接 mongo 并且使用imooc这个集合，没有会自动创建
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)


// 数据库的设计以及字段的设计
const models = {
    user: {
        'user': {'type': String, 'require': true},
        'pwd': {'type': String, 'require': true},
        'type': {'type': String, 'require': true},
        // avatar
        'avatar': {'type': String},
        // description
        'desc': {'type': String},
        // if boss
        'company': {'type': String},
        'salary': {'type': String},
    },
    chat: {
    }
}

// 这个部分不是很懂在做什么
for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}