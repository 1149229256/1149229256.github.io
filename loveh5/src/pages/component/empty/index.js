import React, {
    useEffect,
    useState
} from "react";
import Taro from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import "./index.scss";

function Empty(props){
    let {
        text
    } = props;
    return (
        <View className="my_empty">
            <View className="empty_image"></View>
            <View className="empty_text">{text||"暂无数据"}</View>
        </View>
    )
}

export default Empty;