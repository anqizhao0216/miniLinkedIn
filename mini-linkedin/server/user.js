const express = require('express')
const utils = require('utility')

const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = {'pwd':0, '__v':0}

Router.get('/list', function(req, res) {
    // User.remove({},function(err,doc){})
    User.find({}, function(err,doc) {
        return res.json(doc)
    })
})

Router.post('/login', function(req, res) {
    const {user, pwd} = req.body
    User.findOne({user, pwd:md5Pwd(pwd)}, _filter,function(err, doc) {
      if (!doc) {
        return res.json({code:1, msg:'wrong username or password'})
      }
      res.cookie('userid', doc._id)
      return res.json({code:0, data:doc})
    })
})
Router.post('/register', function(req, res) {
    const {user, pwd, type} = req.body
    User.findOne({user}, function(err, doc) {
        if (doc) {
            return res.json({code:1, msg: '用户名重复'})
        }
        User.create({user, type, pwd:md5Pwd(pwd)}, function(err, doc) {
          if (err) {
            return res.json({code:1, msg: '后端出错了'})
          }
          return res.json({code: 0})
        })
        // 使用下面的方法会报 500 的错误
        // const userModel = new User({user, type, pwd: md5Pwd(pwd)})
        // userModel.save(function(err, doc) {
        //   if (err) {
        //     return res.json({code:1, msg: '后端出错了'})
        //   }
        //   const {user, type, _id} = d
        //   res.cookie('uesrid', _id)
        //   return res.json({code:0, data:{user, type, _id}})
        // })
    })
})
Router.get('/info', function(req, res) {
    const {userid} = req.cookies
    if (!userid) {
      return res.json({code:1})
    }
    User.findOne({_id:userid}, _filter, function(err, doc) {
      if (err) {
        return res.json({code:1, msg: '后端出错了'})
      }
      if (doc) {
        return res.json({code:0, data:doc})
      }
    })

})

function md5Pwd(pwd) {
  const salt = 'imooc_is_good_3957x8yza6!@#IUHjh~~~'
  return utils.md5(utils.md5(pwd+salt))
}
module.exports = Router
