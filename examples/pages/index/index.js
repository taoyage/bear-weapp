Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      groupName: '基础组件',
      list: [{
        path: '/icon/icon',
        title: 'Icon 图标'
      }, {
        path: '/list/list',
        title: '列表'
      }, {
        path: '/tabs/tabs',
        title: '标签栏'
      }, {
        path: '/button/button',
        title: '按钮'
      }],
    }, {
      groupName: '业务组件',
      list: [{
        path: '/countdown/countdown',
        title: '倒计时'
      }, {
        path: '/like/like',
        title: '点赞'
      }, {
        path: '/grade/grade',
        title: '评分'
      }, {
        path: '/panel/panel',
        title: '面板'
      }, {
          path: '/card/card',
        title: '卡片'
      },{
        path: '/steps/steps',
        title: '步骤条'
      }]
    }]
  }
})