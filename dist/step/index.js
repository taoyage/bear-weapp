Component({
  externalClasses: ['b-step-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../steps/index': {
      type: 'parent'
    }
  },
  properties: {
    status: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    }
  },
  data: {
    length: 1,
    index: 0,
    current: 0,
    direction: 'horizontal'
  },
  methods: {
    updateCurrent(opts = {}) {
      this.setData({
        length: opts.length,
        index: opts.index,
        current: opts.current,
        direction: opts.direction
      });
    }
  }
});
