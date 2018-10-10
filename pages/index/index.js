//index.js
// const utils = require('../../utils/util.js')
//获取应用实例
const app = getApp()

const createModel = require('../../model/index.js')
const HomeModel = createModel('home')
const UserModel = createModel('user')

// console.log({ HomeModel})

Page({
  data: {
    motto: 'Hello World',
    hot: [],
    hotMenus: [],
    menu: [],
    list: [],
    index: 1,
    showMemuState: false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  redirectToIndex(url){
    wx.navigateTo({
      url: "/pages/index/index",
    })
  },
  onLoadMore(){
    // console.log(111)
  },
  redirectToPublish(){
    UserModel.canDoWhenLogin(() => wx.navigateTo({
      url: '/pages/home/publish/index',
    }))
  },
  redirectToUser(){
    UserModel.canDoWhenLogin(() => wx.navigateTo({
      url: '/pages/user/center/index',
    }))
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  hideMenu(){
    this.setData({
      showMemuState: false
    })
  },
  showMenu(){
    wx.navigateTo({
      url: '/pages/home/category/index',
    })
  },
  onLoad: function () {
    HomeModel.getHotList(hot => this.setData({hot}))
    HomeModel.getMenuItems(list => {
      const hotMenus = list.slice(0, 7)
      return this.setData({
        hotMenus,
        menu: list
      })
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
