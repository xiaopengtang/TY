// pages/home/register/index.js

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
  formSubmit(e){
    const form = e.detail.value
    UserModel.register(form, {
      name: [{ rule: "REQUIRED", message: '请输入用户名'}],
      password: [{ rule: "REQUIRED", message: '请输入密码' }],
      repassword: [{ rule(v, data){
        if (!data.repassword){
          return '请确认密码'
        }
        if (data.password !== data.repassword){
          return '两次输入密码不一致'
        }
      }}],
      tel: [{ rule: "TEL", message: '请输入正确的手机号' }]
    }).catch(title => {
      title = typeof title === 'string' && title || '注册失败'
      return wx.showToast({
        title,
        icon: 'none'
      })
    }).then(res => {
      // console.log({res})
      const info = res && res.data
      if (!info){
        return wx.showToast({
          title: res.message || '注册失败',
          icon: 'none'
        })
      }
      wx.showToast({
        title: '注册成功',
        icon: 'none',
        success(){
          return wx.navigateTo({
            url: '/pages/user/center/index'
          })
        }
      })
    })
  }
})