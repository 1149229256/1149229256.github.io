import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton, AtInput, AtMessage } from "taro-ui"
import './index.scss'
import { axiosMethod } from '../util/axios';

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      tipList: [
        {
          title: "宝宝的生日",
          content: "2000-06-23",
          level: 5,
          header: "baby"
        },
        {
          title: "七夕节",
          content: "2022-08-04",
          level: 5,
          header: "love"
        },
        {
          title: "中秋节",
          content: "2022-09-10",
          level: 3,
          header: "love"
        },
        {
          title: "国庆节",
          content: "2022-10-01",
          level: 3,
          header: "love"
        },
        {
          title: "圣诞节",
          content: "2022-12-25",
          level: 1,
          header: "love"
        }
      ],
      password: "",
      passwordVisible: true,
      baseUrl: "http://192.168.129.178:8889/"
    }
  }
  componentWillMount () {
    // axiosMethod("get", "info/getTipList", {}, {})
    // .then(res=>{
    //   console.log(res);
    // })
  }

  componentDidMount () { 
    if(sessionStorage.getItem("password")){
      this.setState({
        password: sessionStorage.getItem("password")
      })
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onBackClick = () => {

  }
  onHomeClick = () => {
    
  }
  onUserClick = () => {
    
  }
  chooseImage = () => {
    let baseUrl = this.state.baseUrl;
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths
        let file = res.tempFiles[0].originalFileObj;
        let formData = new FormData();
        formData.append("file", file);
        axiosMethod("post", baseUrl + "common/upload", formData, {
          "Content-Type": "multipart/form-data"
        })
        .then(res=>{
          console.log(res);
        })
      }
    })
  }
  changePassword = (value) => {
    this.setState({
      password: value
    })
  }
  changePasswordVisible = (value) => {
    this.setState({
      passwordVisible: value
    }, ()=>{
      if(this.state.password === "20201012"){
        Taro.atMessage({
          'message': '欢迎我的主人~',
          'type': "",
        })
      } else {
        Taro.atMessage({
          'message': '欢迎你来到我们的小屋~',
          'type': "",
        })
      }
      if(this.state.password){
        axiosMethod("get", "common/getUserInfo", {
          key: this.state.password
        })
        .then(res=>{
          let result = res.data;
          if(result.code === 200 && result.data){
            sessionStorage.setItem("userInfo", JSON.stringify(result.data));
          }
        })
      }
      sessionStorage.setItem("password", "true");
    })
  }
  goOtherPage = (type) => {
    if(type === "first"){

    }
    if(type === "date"){

    }
    if(type === "word"){
      Taro.navigateTo({
        url: "/pages/wordWall/index"
      })
    }
  }
  render () {
    let {
      tipList,
      password,
      passwordVisible
    } = this.state;
    return (
      <View className='page_index'>
        <AtMessage />
        <Swiper
          className='image_show'
          indicatorColor='#ccc'
          indicatorActiveColor='#fff'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <View className='image-1'>
              {/* <View className='text_container'>
                <View className='image_text'>欢迎来到</View>
                <View className='image_text'>我们的恋爱小屋</View>
              </View> */}
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='image-2'></View>
          </SwiperItem>
          <SwiperItem>
            <View className='image-3'></View>
          </SwiperItem>
        </Swiper>
        <View className='right_option'>
          <View className='设置轮播图片'></View>
        </View>
        <View className='page_bg'>
          <View className='page_list'>
              <View className='page_one list' onClick={()=>this.goOtherPage("first")}><i></i>我们的第一次</View>
              <View className='page_one date' onClick={()=>this.goOtherPage("date")}><i></i>我们的纪念日</View>
              <View className='page_one word' onClick={()=>this.goOtherPage("word")}><i></i>留言墙</View>
              <View className='page_one word' onClick={()=>this.goOtherPage("user")}><i></i>我的</View>
          </View>
          <View className='tip_list'>
            {
              tipList.map((item, index)=>{
                return (
                  <View className='tip_one' key={index}>
                    <View className={`user_header ${item.header}`}></View>
                    <View className='tip_title'>{item.title}</View>
                    <View className='tip_content'>{item.content}</View>
                    <View className='level_list'>
                      {
                        [1,2,3,4,5].map((child, index2)=>{
                          if(index2 >= item.level){
                            return;
                          }
                          return <i className='level_one' key={index2}></i>
                        })
                      }
                    </View>
                  </View>
                )
              })
            }
          </View>
          {/* <View className='choose_image' onClick={this.chooseImage}>选择图片</View> */}
          <View className='tip_show'>
            <View className='show_container'>
              <View className='circle_container'>
                <View className='circle_one'></View>
                <View className='circle_one'></View>
                <View className='circle_one'></View>
                <View className='circle_one'></View>
                <View className='circle_one'></View>
                <View className='circle_one'></View>
              </View>
              <View className='user_header'></View>
              <View className='level_list'>
                <i className='level_one'></i>
                <i className='level_one'></i>
                <i className='level_one'></i>
                <i className='level_one'></i>
                <i className='level_one'></i>
              </View>
              <View className='tip_content'>宝宝的生日：2000-06-23</View>
              <View className='tip_tip'>不记得可是要讨打的哦！</View>
            </View>
          </View>
        </View>
        {
          sessionStorage.getItem("password")?
          "":
          <AtModal isOpened={passwordVisible}>
            {/* <AtModalHeader>请输入邀请码</AtModalHeader> */}
            <AtModalContent>
              <AtInput
                className="password_input"
                name='value2'
                title=''
                type='number'
                maxLength='6'
                placeholder='请输入邀请码...'
                value={password}
                onChange={this.changePassword}
              />
            </AtModalContent>
            <AtModalAction>
              <AtButton className="modal_btn" onClick={()=>this.changePasswordVisible(false)}>确定</AtButton>
              <AtButton className="modal_btn" onClick={()=>this.changePasswordVisible(false)}>我是游客</AtButton>
            </AtModalAction>
          </AtModal>
        }
        
      </View>
    )
  }
}
