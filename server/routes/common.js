var express = require("express");
var http = require('http');  //http模块
var url = require('url');   //获取url信息模块
var qs = require('querystring'); //处理url参数模块
var path = require('path');  //文件路径模块
var fs = require("fs");

var multer = require("multer");
var upload = multer({ dest: 'public/uploads' });  //配置文件存放目录，有用！
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。好像没啥用？
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
//生成上传模块，让API调用
var upload = multer({
    storage: storage
}).single('file');

var router = express.Router();

//统一响应数据格式
function responseRule(data, code, msg){  
    return {
        code: code? code: 200,
        data,
        msg: msg? msg: "正常"
    }
}
router.post("/upload", function(req, res, next){
    // console.log(req.file)
    upload(req, res, function (err) {
        if (err) {
          console.log(err)
          return
        }
        res.send(JSON.stringify(req.file))
    })
})

router.get("/getUserInfo", function(req, res){
    var params = req.query;
    console.log(__dirname)
    fs.readFile("./data/user.json", "utf-8", function(error, data){
        if(error){
            res.send(responseRule({}, 500, error));
            return;
        }
        var list = JSON.parse(data).user;
        var target = {};
        console.log(list, params);
        list.forEach((item)=>{
            if(item.key === params.key){
                target = item;
            }
        })
        res.send(responseRule(target));
    })
})
module.exports = router;