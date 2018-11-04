Component({
  externalClasses: ['b-steps-class'],
  properties: {
    current: {
      type: Number,
      value: 0,
      observer: 'updateCurrent'
    },
    direction: {
      type: String,
      value: 'horizontal'
    }
  },
  relations: {
    '../step/index': {
      type: 'child',
      linked() {
        this.updateCurrent();
      },
      linkChanged() {
        this.updateCurrent();
      },
      unlinked() {
        this.updateCurrent();
      }
    }
  },
  methods: {
    updateCurrent() {
      const elements = this.getRelationNodes('../step/index');
      const length = elements.length;
      if (length > 0) {
        elements.forEach((step, index) => {
          step.updateCurrent({
            length,
            index,
            current: this.data.current,
            direction: this.data.direction
          });
        });
      }
    }
  }
});
