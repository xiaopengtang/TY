// components/layout/layout.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    upper() {
      this.triggerEvent('onRefresh')
    },
    lower() {
      console.log(11)
      this.triggerEvent('onLoadMore')
    }
  }
})
