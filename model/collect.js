'use strict'

const Base = require('./base.js')

module.exports = class extends Base{
  getList(data){
    return this.curl({
      url: '',
      data
    })
  }

  getMyCollect(data){
    const userId = wx.getStorageSync('TOKEN')
    data.size = 10
    data.userId = userId
    return new Promise((resolve, reject) => this.curl({
      url: 'mycollection/getMyColList',
      data
    }).then(res => {
      res && res.data && Array.isArray(res.data.colList) && (res.data.colList = res.data.colList.map(it => {
        it.images = it.images.split(',')[0]
        return it
      }))
      return resolve(res)
    }).catch(reject))
  }
  cancelCollect(){
    const userId = wx.getStorageSync('TOKEN')
    data.userId = userId
    return this.curl({
      url: 'mycollection/deleteMyCollection',
      data
    })
  }

  addCollect(){
    const userId = wx.getStorageSync('TOKEN')
    data.userId = userId
    return this.curl({
      url: 'mycollection/addMyCollection',
      data
    })
  }
}