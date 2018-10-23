Component({
  relations: {
    '../tabs/index': {
      type: 'parent'
    }
  },
  properties: {
    key: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    }
  },
  data: {
    current: false,
    currentColor: '',
    scroll: false
  },
  methods: {
    /**
     * 从父组件传递过来的当前选中的tab
     * @param {*} current 
     */
    changeCurrent(current) {
      this.setData({ current });
    },
    /**
     * 从父组件传递过来的color
     * @param {*} currentColor 
     */
    changeCurrentColor(currentColor) {
      this.setData({ currentColor });
    },
    /**
     * 从父组件传递过来是否启用横向滚动
     * @param {*} scroll 
     */
    changeScroll(scroll) {
      console.log(scroll);
      this.setData({ scroll });
    },
    onItem() {
      // 获取父组件
      const parent = this.getRelationNodes('../tabs/index')[0];
      // 调用父组件emitEvent时间函数,将当前点击的tab的key值传递过去
      parent.emitEvent(this.properties.key);
    }
  }
});
