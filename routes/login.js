var express = require('express');
var router = express.Router();
var mg = require('./mg');

/* GET home page. */

// localjhost:3000/news?start=1&count=2

router.get('/', function(req, res, next) {
  

  // let start=req.query.start-0;
  // let count=req.query.count-0;

  //读库
  //读库
  mg({
    dbName:'project',
    collectionName:'user'
  },(collection,client)=>{
    collection.find({name : req.query.name}).toArray((err,data)=>{
      if(data.length){
        if(data[0].password == req.query.password){
          res.send()
        }else{
          res.send({error:1,msg:'用户名或密码不正确！'})
        }
      }else{
        res.send({error:1,msg:'用户名不存在'})
      }
    })
  })
  

});

module.exports = router;