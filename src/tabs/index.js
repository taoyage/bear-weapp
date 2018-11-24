Component({
  relations: {
    '../tab/index': {
      type: 'child',
      linked() {
        this.changeCurrent();
      },
      linkChanged() {
        this.changeCurrent();
      },
      unlinked() {
        this.changeCurrent();
      }
    }
  },
  properties: {
    current: {
      type: String,
      value: '',
      observer: 'changeCurrent'
    },
    color: {
      type: String,
      value: ''
    },
    scroll: {
      type: Boolean,
      value: false
    }
  },
  data: {
    scrollLeft: '0rpx'
  },
  ready() {
    this.scrollIntoView();
  },

  methods: {
    changeCurrent(val = this.properties.current) {
      let items = this.getRelationNodes('../tab/index');
      const len = items.length;
      if (len > 0) {
        items.forEach(item => {
          item.changeScroll(this.properties.scroll);
          item.changeCurrent(item.data.key === val);
          item.changeCurrentColor(this.properties.color);
        });
        this.scrollIntoView();
      }
    },
    scrollIntoView() {
      if (!this.properties.scroll) {
        return;
      }
      let items = this.getRelationNodes('../tab/index');
      const len = items.length;
      if (len > 0) {
        items.forEach((item, index) => {
          const childQuery = wx.createSelectorQuery().in(item);
          const parentQuery = wx.createSelectorQuery().in(this);
          childQuery.select('.b-tab').boundingClientRect(tabRect=> {
            if(tabRect) {
              if(item.properties.current) {
                let activeRectLeft = tabRect.left;
                let activeRectWith = tabRect.width;
                parentQuery.select('.b-tabs').boundingClientRect(tabsRect=>{
                  this.setData({
                    scrollLeft: activeRectLeft + activeRectWith - tabsRect.width / 2
                  })
                }).exec();
              }
            }
          }).exec();
        });
      }
    },
    emitEvent(key) {
      // 向组件调用者提供change事件，将当前子组件中点击获取的tab的key值传递出去
      this.triggerEvent('change', { key });
    }
  }
});
