Component({
	properties: {
		like: {
			type: Boolean
		},
		count: {
			type: Number
		},
		iconSize: {
			type: String,
			value: '18'
		},
		readOnly: {
			type: Boolean,
			value: false
		}
	},
	methods: {
		onLike: function(event) {
			if (this.properties.readOnly) {
				return;
			}
			let count = this.properties.count;

			count = this.properties.like ? count - 1 : count + 1;

			this.setData({
				count,
				like: !this.properties.like
			});

			let behavior = this.properties.like ? 'like' : 'cancel';

			this.triggerEvent('like', { behavior }, {});
		}
	}
});