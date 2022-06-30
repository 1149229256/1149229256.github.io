//获取yyyy-mm-dd HH:MM:ss格式时间
export const constructionDate = (date, type) => {
    date = date? new Date(date): new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if(month < 10){
        month = "0" + month;
    }
    if(day < 10){
        day = "0" + day;
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0" + second;
    }
    if(type == 2){
        return year + "-" + month + "-" + day + " " + hour + ":" + minute; 
    }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}