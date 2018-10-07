// pages/home/login/index.js

const createModel = require('../../../model/index.js')

const UserModel = createModel('user')

Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  submit(e){
    const form = e.detail.value
    UserModel.login(form, {
      name: [{ rule: 'REQUIRED', message: '请输入用户名/手机号'}],
      password: [{ rule: 'REQUIRED', message: '请输入密码' }]
    }).catch(title => {
      title = typeof title === 'string' && title || '登录失败'
      return wx.showToast({
        title,
        icon: 'none'
      })
    }).then(res => {
      const info = res && res.data
      if (!info) {
        return wx.showToast({
          title: res.message || '登录失败',
          icon: 'none'
        })
      }
      wx.showToast({
        title: '登录成功',
        icon: 'none',
        success() {
          return wx.navigateBack()
        }
      })
    })
  }
})