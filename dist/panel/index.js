Component({
  externalClasses: ['b-header-class', 'b-content-class', 'b-footer-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    title: String,
    label: String,
    useFooter: Boolean,
    useHeaderSlot: Boolean
  }
});
