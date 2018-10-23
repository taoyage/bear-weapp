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
      }
    },
    emitEvent(key) {
      // 向组件调用者提供change事件，将当前子组件中点击获取的tab的key值传递出去
      this.triggerEvent('change', { key });
    }
  }
});
