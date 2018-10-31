// pages/home/notice/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "id": 2,										// id
      "userId": 10000,								// 用户id
      "userName": "liangge",							// 用户名_昵称	
      "title": "人民币收藏",							// 文章标题
      "text": "我的钱币真好看啊1!!",					// 文章正文
      "images": ['http://47.99.166.177:8360/static/source/2018-10-27/4dc109e148e9ed590b46555641a4f1e5.jpg',
      'http://47.99.166.177:8360/static/source/2018-10-27/20a993565f5c3a1625879fc430c73b27.jpg',
      'http://47.99.166.177:8360/static/source/2018-10-27/a05efddfffecf89a0fdb153fe49569fe.jpg'
      ],	// 图片地址，多个用逗号隔开
      "foot": "反反复复",							// 文章脚标
      "pubTime": "2018-09-09 10:15:10.0",			// 添加时间
      "flag": 0	
    },
    {
      "id": 2,										// id
      "userId": 10000,								// 用户id
      "userName": "liangge",							// 用户名_昵称	
      "title": "青奥五洲和玺",							// 文章标题
      "text": "我的钱币真好看啊1!!",					// 文章正文
      "images": null,//"http://127.0.0.1/images/col/收藏2",	// 图片地址，多个用逗号隔开
      "foot": "反反复复",							// 文章脚标
      "pubTime": "2018-09-09 10:15:10.0",			// 添加时间
      "flag": 0	
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})