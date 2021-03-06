// components/menu-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    }
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
    select(e){
      const id = e.currentTarget.dataset.id
      const name = e.currentTarget.dataset.name
      this.triggerEvent('onSelect', { id, name })
    }
  }
})
