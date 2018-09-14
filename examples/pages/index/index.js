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
			}],
		}, {
			groupName: '业务组件',
			list: [{
				path: '/countdown/countdown',
				title: '倒计时'
			},{
        path: '/like/like',
        title: '点赞'
      }]
		}]
	}
})