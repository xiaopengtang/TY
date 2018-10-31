module.exports = class {
  curl(opt, rule){
    
    return new Promise((resolve, reject) => {
      return ((next) => {
        if(rule){
          return this.validate(opt.data, rule).then(next).catch(reject)
        }else{
          next()
        }
      })(() => {
        
        const token = wx.getStorageSync('TOKEN') || null
        const url = opt.url.replace(/^\/+/, '')
        // console.log(url)
        // const host = 'http://106.15.201.3:3000'
        const host = 'http://127.0.0.1:3000'
        // const host = 'http://47.99.166.177:8080/wzt'
        return wx.request({
          url: `${host}/${url.replace(/^\/+/g, '')}`,
          data: opt.data,
          success: res => resolve(res.data),
          fail: reject,
          header: {
            'content-type': 'application/json', // 默认值
            token}
        })
      })
    })
  }
  validate(data, rule){
    console.log({data,rule})
    return new Promise((resolve ,reject) => {
      if(!data){
        return resolve()
      }
      const keys = Object.keys(data)
      if(keys.length === 0){
        return resolve()
      }
      let msg = ''
      for(let i = 0; i < keys.length; i++){
        const label = keys[i]
        const value = data[label]
        let rules = rule[label]
        if(!Array.isArray(rules)){
          continue
        }
        
        for(let j = 0; j < rules.length; j++){
          const r = rules[j]
          
          if (r.rule === 'REQUIRED' && !value) {
            console.log({ rules, r, label, keys, value, msg })
            msg = r.message
            break;
          }
          if(r.rule === 'NUMBER' && !/\d+/.test(value)){
            msg = r.message || '请输入数字'
            break;
          }
          if (r.rule === 'TEL' && !/\d{11}/.test(value)) {
            msg = r.message || '请输入手机号'
            break;
          }
          if(typeof r.rule === 'function'){
            const message = r.rule(value, data)
            if(message){
              msg = message
              break
            }
          }
        }
        if(msg){
          break
        }
      }
      msg ? reject(msg) : resolve()
    })
  }
}