var express = require("express");
var fs = require("fs");
var router = express.Router();

//统一响应数据格式
function responseRule(data, code, msg){  
    return {
        code: code? code: 200,
        data,
        msg: msg? msg: "正常"
    }
}
/**
 * @params
 * userName",
"headerImage",
"publishTime",
"content"
 */
router.post("/addword", function(req, res){
    var params = req.body;
    fs.readFile("./data/word.json", "utf-8", function(error, data){
        if(error){
            res.status(500).send(responseRule("", 500, "读取留言信息失败"));
            return;
        }
        var list = JSON.parse(data).wordList;
        params.zanCount = 0;
        list.push(params);
        fs.writeFile("./data/word.json", JSON.stringify({
            wordList: list
        }), function(error){
            if(error){
                res.status(500).send(responseRule("", 500, "添加留言信息失败"));
                return;
            }
            res.send(responseRule("添加成功"));
        });
    })
})

module.exports = router;