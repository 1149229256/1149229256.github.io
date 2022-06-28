import { Component } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

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
      ]
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onBackClick = () => {

  }
  onHomeClick = () => {
    
  }
  onUserClick = () => {
    
  }
  render () {
    let {
      tipList
    } = this.state;
    return (
      <View className='page_index'>
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
        <View className='page_bg'>
          <View className='page_list'>
              <View className='page_one list'><i></i>我们的第一次</View>
              <View className='page_one date'><i></i>我们的纪念日</View>
              <View className='page_one word'><i></i>留言墙</View>
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
      </View>
    )
  }
}
