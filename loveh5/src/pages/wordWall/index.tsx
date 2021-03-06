import React, {
    useEffect,
    useState
} from "react";
import Taro from "@tarojs/taro";
import {View, Text} from "@tarojs/components";
import { AtFloatLayout, AtTextarea } from "taro-ui";
import RefreshPage from "../component/refreshPage";
import { axiosMethod } from '../util/axios';
import { constructionDate } from "../util/public";
import Empty from "../component/empty";
import "./index.scss";

function WordWall(props){
    const [currentIndex, setCurrentIndex] = useState(1);

    const [wordList, setWordList] = useState([]);
    const [addDrawerVisible, setAddDrawerVisible] = useState(false);
    const [wordContent, setWordContent] = useState("");

    const getWordList = () => {
        axiosMethod("get", "info/getWordList", {
            page: currentIndex,
            pageSize: 10
        })
        .then((res:any)=>{
            let result = res.data;
            if(result.code === 200 && Array.isArray(result.data)){
                if(currentIndex === 1){
                    setWordList(result.data);
                } else {
                    let list = JSON.parse(JSON.stringify(wordList));
                    list = list.concat(result.data);
                    setWordList(list);
                }
                
            }
        })
    }
    const onPull = (value) => {
        if(value){
            return;
        }
        let index = currentIndex+1;
        setCurrentIndex(index);
    }
    const onDown = (value) => {
        if(value){
            return;
        }
        setCurrentIndex(1);
    }
    useEffect(()=>{
        getWordList();
    }, [currentIndex])

    const changeAddDrawer = (value) => {
        setAddDrawerVisible(value);
        if(!value){
            setWordContent("");
        }
    }
    const changeWordContent = (value) => {
        setWordContent(value);
    }

    const addWord = () => {
        let userInfo = sessionStorage.getItem("userInfo")? JSON.parse(sessionStorage.getItem("userInfo")): {};
        axiosMethod("post", "/word/addWord", {
            userName: userInfo.userName,
            headerImage: userInfo.headerImage,
            publishTime: constructionDate("", 2),
            content: wordContent
        })
        .then((res:any)=>{
            let result = res.data;
            if(result.code === 200){
                Taro.showToast({
                    icon: "none",
                    title: "????????????"
                })
                changeAddDrawer(false);
                getWordList();
            }
        })
    }
    return (
        <RefreshPage 
        className='word_container' 
        height='100vh' 
        onPull={onPull}  //??????
        onDown={onDown} //??????
        downText={['????????????', '????????????']} 
        pullText={['??????????????????', '??????????????????']}>
        <View className="word_wall">
            {
                wordList.length > 0?
                wordList.map((item:any, index)=>(
                    <View className="word_one" key={index}>
                        <View className="word_header" style={{
                            backgroundImage: `url('${window.BasicProxy + item.headerImage}')`
                        }}></View>
                        <View className="user_name">
                            {item.userName}
                            <Text>{item.publishTime}</Text>
                        </View>
                        <View className="word_content">{item.content}</View>
                        <View className="btn_container">
                            <View className="zanlogo"></View>
                            {item.zanCount}
                        </View>
                    </View>
                )):
                <Empty text="????????????~" />
            }
            
        </View>
        <View className="add_btn" onClick={()=>changeAddDrawer(true)}></View>

        <AtFloatLayout isOpened={addDrawerVisible} title={"????????????"} onClose={()=>changeAddDrawer(false)}>
            <AtTextarea
            value={wordContent}
            onChange={changeWordContent}
            maxLength={200}
            placeholder='?????????????????????...' />
            <View className="confirm_btn" onClick={addWord}>??????</View>
        </AtFloatLayout>
        </RefreshPage>
    )
}

export default WordWall;