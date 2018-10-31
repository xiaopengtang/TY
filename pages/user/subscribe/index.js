// pages/user/subscribe/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        "userId": 10012,                        // 用户id
        "name": "MMM",                          // 用户名_昵称
        "faceUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q6x99VxceL0a700G1R1d6SHdxO2TXDrb44PLnANDamcu56v72icCxW9cfUSqKUQtKq2VL1oxq9KcVEvsOQ31tVA/132",
        "sex": 0,                               // 用户性别，0-男 1-女
        "level": 0,                             // 用户等级 0-普通会员 1-超级管理员 ...
      },
      {
        "userId": 10001,
        "name": "HHH",
        "faceUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q6x99VxceL0a700G1R1d6SHdxO2TXDrb44PLnANDamcu56v72icCxW9cfUSqKUQtKq2VL1oxq9KcVEvsOQ31tVA/132",
        "sex": 0,
        "level": 0
      }
    ]
  },
  check(e) {
    const info = e.target && e.target.dataset && e.target.dataset.info
    const index = e.target && e.target.dataset && e.target.dataset.index
    if(!info){
      return 
    }
    this.data.list[index].check = this.data.list[index].check === void 0 ? false : !this.data.list[index].check
    this.setData({
      list: this.data.list
    })
    wx.showToast({
      title: this.data.list[index].check === true ? '关注成功':'取消成功',
    })
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