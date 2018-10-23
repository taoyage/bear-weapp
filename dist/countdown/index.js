Component({
  externalClasses: ['num-class', 'symbol-class'],
  // options: {
  // 	addGlobalClass: true,
  // },
  properties: {
    countdown: {
      type: Number,
      value: 0,
      observer: 'init'
    },
    format: {
      type: String,
      value: 'dd天hh时mm分ss秒'
    },
    text: {
      type: String,
      value: ''
    }
  },
  data: {
    computeTime: 0,
    endTimeMs: 0,
    timeItems: []
  },
  methods: {
    init(newVal, oldVal) {
      // 当前时间
      const now = Date.now();
      this.setData({
        computeTime: this.properties.countdown,
        // 结束时间
        endTimeMs: now + this.properties.countdown * 1000
      });

      this.initCountdown();
    },

    initCountdown() {
      clearInterval(this._timer);
      const now = Date.now();

      let computeTimeMs = this.data.endTimeMs - now;

      let timeout = computeTimeMs % 1000 || 0;

      this.timer = setTimeout(() => {
        this.initCountdown();
      }, timeout);

      this.setCountdownTimeItems(computeTimeMs);
    },

    setCountdownTimeItems(computeTimeMs) {
      this.setData({
        computeTime: parseInt(Math.ceil(computeTimeMs / 1000))
      });

      if (this.data.computeTime <= 0) {
        clearInterval(this.timer);
        this.properties.countdown = 0;
      }

      let timeItems = this.getTimeItems(this.data.computeTime, this.data.format);
      this.setData({ timeItems });
    },

    getTimeItems(computeTime, format) {
      if (computeTime < 0) {
        computeTime = 0;
      }
      // 匹配format时间
      let arr = format.match(/[a-zA-Z]{1,3}/g) || [];
      // 匹配format中文
      let symbolArr = format.match(/[\u4e00-\u9fa5]+|[^a-zA-Z]/g) || [];

      let time = this.getTime(computeTime, format);

      return arr.map((item, i) => {
        return {
          num: time[item],
          symbol: symbolArr[i]
        };
      });
    },

    getTime(computeTime, format) {
      let d = computeTime;
      let [s, m, h] = [60, 60, 24].map(unit => {
        let num = d % unit;
        d = Math.floor(d / unit);
        return num;
      });

      if (computeTime > 86400 && format.indexOf('d') === -1) {
        h += d * 24;
      }

      if (computeTime > 3600 && format.indexOf('h') === -1) {
        m += h * 60;
      }

      if (computeTime > 60 && format.indexOf('m') === -1) {
        s += m * 60;
      }
      return {
        dd: this.formatTime(d),
        hh: this.formatTime(h),
        mm: this.formatTime(m),
        ss: this.formatTime(s),
        d,
        h,
        m,
        s
      };
    },

    formatTime(val) {
      return val < 10 ? `0${val}` : val;
    },

    onText(event) {
      this.triggerEvent('text');
    }
  }
});
