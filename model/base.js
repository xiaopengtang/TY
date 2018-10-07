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
        return wx.request({
          url: opt.url,
          data: opt.data,
          success: resolve,
          fail: reject
        })
      })
    })
  }
  validate(data, rule){
    return new Promise((resolve ,reject) => {
      if(!data){
        return resolve()
      }
      const keys = Object.keys(data)
      if(keys.length === 0){
        return resolve()
      }
      let meg = ''
      for(let i = 0; i < keys.length; i++){
        const label = keys[i]
        const value = data[label]
        let rules = rule[label]
        if(!Array.isArray(rules)){
          continue
        }
        for(let j = 0; j <= rules.length; j++){
          const r = rules[j]
          if(r.rule === 'NUMBER' && !/\d+/.test(value)){
            meg = r.message || '请输入数字'
            break;
          }
          if (r.rule === 'TEL' && !/\d{11}/.test(value)) {
            meg = r.message || '请输入手机号'
            break;
          }
          if(typeof r.rule === 'function'){
            const message = r.rule(value)
            if(message){
              meg = message
              break
            }
          }
        }
        if(meg){
          break
        }
      }
      meg ? reject(meg) : resolve()
    })
  }
}