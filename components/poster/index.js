// components/poster/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
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
   * 组件的方法列表
   */
  methods: {
    imageLoad(e) {
      wx.getSystemInfo({
        success: (res) => {
          const { screenWidth } = res
          const { height } = this.data
          if (e.detail.height > height) {
            return this.setData({ height: e.detail.height * (screenWidth / e.detail.width) })
          }
        }
      })
    }
  }
})
