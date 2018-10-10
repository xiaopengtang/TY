'use strict'

const Pages = {
  home: require('./home.js'),
  user: require('./user.js'),
  collect: require('./collect')
}

module.exports = (id, opt) => {
  const ctrl = Pages[id]
  if(!ctrl){
    return 
  }
  return new ctrl(opt)
}