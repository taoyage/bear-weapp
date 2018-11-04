Component({
  externalClasses: ['b-class', 'b-class-count'],
  properties: {
    count: {
      type: Number,
      value: 0,
      observer: 'finalCount'
    },
    overflowCount: {
      type: Number,
      value: 99
    }
  },
  data: {
    finalCount: 0
  },
  methods: {
    finalCount(newVal) {
      const { overflowCount } = this.data;
      const finalCount = parseInt(newVal) >= parseInt(overflowCount) ? `${overflowCount}+` : newVal;
      this.setData({ finalCount });
    }
  }
});
