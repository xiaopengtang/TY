'use strict'

const Base = require('./base.js')

module.exports = class extends Base {
  getUserInfo(){
    const token = wx.getStorageSync('TOKEN')
    console.log({ token})
    return this.curl({
      url: '/user/getUserInfo',
      data: {token}
    })
  }

  canDoWhenLogin(cb){
    this.getUserInfo().then(res => {
      const info = res && res.data
      if(info){
        return cb()
      }
      wx.showModal({
        title: '提示',
        content: '您尚未登录，请先登录',
        cancelText: '注册',
        // cancelColor: 'green',
        confirmText: '登录',
        success(res) {
          res.confirm && wx.navigateTo({
            url: '/pages/home/login/index',
          })
          res.cancel && wx.navigateTo({
            url: '/pages/home/register/index',
          })
        }
      })
    })
  }

  register(data, rule){
    return this.curl({
      url: '/user/register',
      data
    }, rule)
  }

  login(data, rule){
    return new Promise((resolve, reject) => this.curl({
      url: '/user/login',
      data
    }, rule).catch(reject).then(res => {
      const token = res && res.data && res.data.token
      wx.setStorageSync('TOKEN', token)
      resolve(res)
    }))
  }

  loginout(){
    const token = wx.getStorageSync('TOKEN')
    return this.curl({
      url: '/user/loginout',
      data: {token}
    })
  }
}