// components/list/list.js
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
    list: [{
      "id": 1,                                     	// 我的收藏id
      "userId": 10000,
      "userName": "张先生",                          		// 用户id_对应user_info表的id
      "collectionUserId": 10000,						// 用户id_藏品发布人Id
      "collectionUserName": "liangge",				// 用户名_藏品发布人昵称
      "collectionId": 1,								// 藏品id
      "title": "第四套人民币四连体",							// 藏品标题
      "desc": "我的邮票真好看啊1!!",					// 藏品简介
      "images": "http://47.99.166.177:8360/static/source/2018-10-27/2bdc2f7604592fe5076f3bd6396daa58.jpg", // 图片地址，多个用逗号隔开
      "price": 53000,									// 藏品价格
      "unit": "美元",								// 藏品单位
      "pubTime": "2018-09-09 10:10:10.0",			// 添加时间
      "flag": 0	
    }, {
        "id": 1,                                     	// 我的收藏id
        "userId": 10000,
        "userName": "徐女士",                          		// 用户id_对应user_info表的id
        "collectionUserId": 10000,						// 用户id_藏品发布人Id
        "collectionUserName": "liangge",				// 用户名_藏品发布人昵称
        "collectionId": 1,								// 藏品id
        "title": "第四套人民币大全套",							// 藏品标题
        "desc": "我的邮票真好看啊1!!",					// 藏品简介
        "images": "http://47.99.166.177:8360/static/source/2018-10-27/4dc109e148e9ed590b46555641a4f1e5.jpg", // 图片地址，多个用逗号隔开
        "price": 13800,									// 藏品价格
        "unit": "美元",								// 藏品单位
        "pubTime": "2018-09-09 10:10:10.0",			// 添加时间
        "flag": 0
      }, {
        "id": 1,                                     	// 我的收藏id
        "userId": 10000,
        "userName": "赵先生",                          		// 用户id_对应user_info表的id
        "collectionUserId": 10000,						// 用户id_藏品发布人Id
        "collectionUserName": "liangge",				// 用户名_藏品发布人昵称
        "collectionId": 1,								// 藏品id
        "title": "人民币整版钞“一筒天下”",							// 藏品标题
        "desc": "我的邮票真好看啊1!!",					// 藏品简介
        "images": "http://47.99.166.177:8360/static/source/2018-10-27/20a993565f5c3a1625879fc430c73b27.jpg", // 图片地址，多个用逗号隔开
        "price": 388000,									// 藏品价格
        "unit": "美元",								// 藏品单位
        "pubTime": "2018-09-09 10:10:10.0",			// 添加时间
        "flag": 0
      }, {
        "id": 1,                                     	// 我的收藏id
        "userId": 10000,
        "userName": "王女士",                          		// 用户id_对应user_info表的id
        "collectionUserId": 10000,						// 用户id_藏品发布人Id
        "collectionUserName": "liangge",				// 用户名_藏品发布人昵称
        "collectionId": 1,								// 藏品id
        "title": "青奥五洲和玺",							// 藏品标题
        "desc": "我的邮票真好看啊1!!",					// 藏品简介
        "images": "http://47.99.166.177:8360/static/source/2018-10-27/a05efddfffecf89a0fdb153fe49569fe.jpg", // 图片地址，多个用逗号隔开
        "price": 25800,									// 藏品价格
        "unit": "美元",								// 藏品单位
        "pubTime": "2018-09-09 10:10:10.0",			// 添加时间
        "flag": 0
      }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
