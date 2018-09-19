// pages/home/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      'https://wx.qlogo.cn/mmopen/vi_32/Q6x99VxceL0a700G1R1d6SHdxO2TXDrb44PLnANDamcu56v72icCxW9cfUSqKUQtKq2VL1oxq9KcVEvsOQ31tVA/132',
      'https://wx.qlogo.cn/mmopen/vi_32/Q6x99VxceL0a700G1R1d6SHdxO2TXDrb44PLnANDamcu56v72icCxW9cfUSqKUQtKq2VL1oxq9KcVEvsOQ31tVA/132',
      'https://wx.qlogo.cn/mmopen/vi_32/Q6x99VxceL0a700G1R1d6SHdxO2TXDrb44PLnANDamcu56v72icCxW9cfUSqKUQtKq2VL1oxq9KcVEvsOQ31tVA/132'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    height: 0
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