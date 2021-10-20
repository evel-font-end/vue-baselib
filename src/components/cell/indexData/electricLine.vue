<template>
  <div id="electricLine" :class="className" @click="click">
    <div class="line" :style="`width:${lineW}%;height:${lineH};background:linear-gradient(270deg,${colorS} 0%,${colorE} 100%);`"/>
  </div>
</template>

<script>
export default {
  name: 'electricLine',
  props: {
    startColor: {
      type: String,
      default: 'rgba(236,104,35,1)'
    },
    endColor: {
      type: String,
      default: 'rgba(183,19,93,1)'
    },
    width: {
      type: String,
      default: '100'
    },
    height: {
      type: String,
      default: '20px'
    },
    className: {
      type: String,
      default: ''
    },
    click: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      colorS: '',
      colorE: '',
      lineW: '',
      lineH: ''
    };
  },
  computed: {
    propsUpdate () {
      const { startColor, endColor, width } = this;
      return {
        startColor,
        endColor,
        width
      };
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init () {
      this.colorS = this.startColor
      this.colorE = this.endColor
      this.lineW = this.width
      this.lineH = this.height
    }
  },
  watch: {
    propsUpdate: {
      deep: true,
      handler (newval, oldval) {
        if (newval) {
          this.init()
        }
      }
    }
  }
};
</script>

<style lang="less">
#electricLine{
  overflow: hidden;
  .line{
    position: relative;
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        background: repeating-linear-gradient(
        90deg,
        transparent 0,
        #022f4f 1px, #022f4f .1em,
        transparent calc(.1em + 1px), transparent .25em
      );/*no*/
    }
  }
}
</style>
