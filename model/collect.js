'use strict'

const Base = require('./base.js')

module.exports = class extends Base{
  getList(){
    return this.curl({
      url: ''
    })
  }
}