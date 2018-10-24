Component({
	externalClasses: ['custom-class'],
	options: {
		multipleSlots: true
	},
	properties: {
		// 左侧标题
		title: String,
		// 右侧内容
		value: String,
		// 跳转链接
		url: String,
		// 图标
		icon: String,
		// 标题下方描述
		label: String,
		// 是否展示url
    isLink: Boolean,
    // 是否使用插槽
    useSlot: Boolean,
		// 链接跳转方式
		linkType: {
			type: String,
			value: 'navigateTo'
		},
		// 是否显示边框
		border: {
			type: Boolean,
			value: true
		}
	},
	methods: {
		onTap() {
			const { url } = this.data;
			url && wx[this.data.linkType]({ url });
			this.triggerEvent('clike');
		}
	}
})