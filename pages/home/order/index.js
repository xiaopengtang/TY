// pages/home/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      'http://47.99.166.177:8360/static/source/2018-10-27/4dc109e148e9ed590b46555641a4f1e5.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    height: 0,
    data: {
      "id": 1,                                     	// 我的收藏id
      "userId": 10000,                          		// 用户id_对应user_info表的id
      "collectionUserId": 10000,						// 用户id_藏品发布人Id
      "collectionUserName": "liangge",				// 用户名_藏品发布人昵称
      "collectionId": 1,								// 藏品id
      "title": "第四套人民币大全套",							// 藏品标题
      "desc": "第四套人民币大全套!!",					// 藏品简介
      "images": ['http://47.99.166.177:8360/static/source/2018-10-27/4dc109e148e9ed590b46555641a4f1e5.jpg'], // 图片地址，多个用逗号隔开
      "price": 13800,									// 藏品价格
      "unit": "美元",								// 藏品单位
      "pubTime": "2018-09-09 10:10:10.0",			// 添加时间
      "flag": 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  collect(){},
  share(){
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '测试',
      path: '/' + this.is,
      desc: '自定义分享描述'
    }
  },
  imageLoad(e){
    wx.getSystemInfo({
      success:(res) => {
        const {screenWidth} = res
        const { height } = this.data
        if (e.detail.height > height) {
          return this.setData({ height: e.detail.height * (screenWidth/e.detail.width) })
        }
      }
    })
  }
})