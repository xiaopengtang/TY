// pages/home/publish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cate: {
      id: null,
      name: ''
    },
    read: false,
    poster: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      cate: options
    })
  },
  selectCate(){
    // console.log(`/pages/home/category/index?url${this.is}`)
    wx.redirectTo({
      url: `/pages/home/category/index?url=/${this.is}`,
    })
  },
  delPoster(e){
    const index = e.currentTarget.dataset.index
    let poster = this.data.poster.filter((it, i) => i !== index)
    this.setData({ poster})
  },
  saveFile(){
    let that = this
    wx.chooseImage({
      success: function(res) {
        const imageSrc = res.tempFilePaths[0]
        wx.uploadFile({
          url: 'http://47.99.166.177:8360/upload', //仅为示例，非真实的接口地址
          filePath: imageSrc,
          name: 'file',
          success(res){
            // console.log({res})
            const data = JSON.parse(res.data)
            console.log({data})
            const list = data.data || []
            let poster = that.data.poster
            Array.prototype.push.apply(poster, list.map(it => {
              it.url = `http://47.99.166.177:8360/${it.path}/${it.name}`
              return it
            }))
            that.setData({ poster})
          },
          fail(){
            wx.showToast({
              title: '图片上传失败'
            })
          }
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  submit(){}
})