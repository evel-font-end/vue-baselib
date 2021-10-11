<template>
  <div
    class="c--flex"
    :style="style"
    :class="className"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    justify: {
      type: String,
      default: 'left'
    },
    wrap: {
      type: String,
      default: 'nowrap'
    },
    align: {
      type: String,
      default: 'center'
    },
    paddingY: {
      type: String,
      default: ''
    },
    paddingX: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'flex-center'
    },
    pointer: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      return {
        display: this.inline ? 'inline-flex' : 'flex',
        'justify-content': this.justify,
        'flex-wrap': this.wrap,
        'flex-direction': this.direction,
        'align-items': this.align,
        paddingTop: this.paddingY ? this.paddingY : 0,
        paddingBottom: this.paddingY ? this.paddingY : 0,
        paddingLeft: this.paddingX ? this.paddingX : 0,
        paddingRight: this.paddingX ? this.paddingX : 0
      };
    }
  },

  mounted () {
  }

};
</script>

<style scoped lang="less">
.c--flex {
  width: 100%;
  box-sizing: border-box;
  &.pointer {
    cursor: pointer;
  }
}
</style>
