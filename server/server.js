var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();

var bodyParser = require('body-parser'); //请求体对象化 （必须）否则后台无法解析前端发送的body内容
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));  //资源访问路径可以省略public, 直接ip:port/uploads/xxx

var CommonRouter = require("./routes/common");
var WordRouter = require("./routes/word");


//处理请求跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use("/common", CommonRouter);
app.use("/word", WordRouter);


//统一响应数据格式
function responseRule(data, code, msg){  
    return {
        code: code? code: 200,
        data,
        msg: msg? msg: "正常"
    }
}
app.get("/info/getTipList", function(req, res){
    fs.readFile(__dirname + '/data/tip.json', 'utf-8', function(err, dataStr) {
        if(err){
            return console.log('文件读取失败：' + err.message);
        }
        var list = JSON.parse(dataStr).tipList;
        res.send(JSON.stringify(responseRule(list)));
    })
})

app.get("/info/getWordList", function(req, res){
    let params = req.query;
    fs.readFile(__dirname + '/data/word.json', 'utf-8', function(err, dataStr) {
        if(err){
            return console.log('文件读取失败：' + err.message);
        }
        var list = JSON.parse(dataStr).wordList;
        var size = params.pageSize? params.pageSize: 10;
        var updateList = list.slice((params.page-1)*size, params.page*size);
        res.send(JSON.stringify(responseRule(updateList)));
    })
})

app.listen("8889", function(){
    console.log("server is running at port 8889");
})

