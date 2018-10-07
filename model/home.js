'use strict'

const Base = require('./base.js')

module.exports = class extends Base{
  getHotList(cb){
    this.curl({
      url: '/collection/getHotList'
    }).then(res => {
      const data = res && res.data
      if(!data){
        return 
      }
      // console.log({res})
      cb(data.map(d => {
        const image = d.images.split(',')[0]
        return {
          id: d.id,
          image
        }
      }))
    })
  }
  getMenuItems(cb){
    return this.curl({
      url: 'navigate/getNavInfo'
    }).then(res => {
      const data = res && res.data
      if(!data){
        return 
      }
      cb(data)
    })
  }
  getList(){}
}