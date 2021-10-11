<template>
  <div class="lineComponent" :class="className">
    <!-- <div class="start"/> -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="width" :height="height" v-if="type === 1">
      <defs>
        <linearGradient id="linear-gradient" x1="615" y1="887" x2="615" y2="871" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#0ACEE6" stop-opacity="1"/>
          <stop offset="1" stop-color="#0fc7dd" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path id="1-3" data-name="1-3" class="cls-1" d="M369,871l492,16Zm396,120,95,3Z" transform="translate(-368 -870)"/>
      <use
        :stroke="'#fff'"
        stroke-width="3"
        :xlink:href="`#1-3`"
      >
        <animate
          attributeName="stroke-dasharray"
          :from="`0, ${1000}`"
          :to="`${1000}, 0`"
          :dur="`${1.5}s`"
          repeatCount="indefinite"
        />
      </use>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="width" :height="height" v-if="type === 2">
      <defs>
        <linearGradient id="linear-gradient2" x1="770" y1="1007.12" x2="770" y2="933.875" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#0ACEE6" stop-opacity="0"/>
          <stop offset="1" stop-color="#0FC7DD" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <path id="2-3" data-name="2-3" class="cls-2" d="M656.307,1007.13l227.386-73.26ZM803,959.177l79.007-23.347" transform="translate(-655.312 -932.906)"/>
      <!-- <use
        :stroke="'#fff'"
        stroke-width="3"
        :xlink:href="`#2-3`"
      >
        <animate
          attributeName="stroke-dasharray"
          :from="`0, ${1000}`"
          :to="`${1000}, 0`"
          :dur="`${1.5}s`"
          repeatCount="indefinite"
        />
      </use> -->
    </svg>
  </div>
</template>

<script>
// import autoResize from '@/util/autoResize'
// import { deepMerge } from '@jiaminghi/charts/lib/util/index'
// import { deepClone } from '@jiaminghi/c-render/lib/plugin/util';
export default {
  name: 'Line',
  // mixins: [autoResize],
  props: {
    width: {
      type: Number || String,
      default: 40
    },
    height: {
      type: Number,
      default: 40
    },
    type: {
      type: Number,
      default: 1
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mergedColor: []
    }
  },
  watch: {
  },
  methods: {
  },
  mounted () {
    this.$nextTick(() => {

    })
  }
}
</script>

<style lang="less">
.lineComponent {
  position: absolute;
  // width: 100%;
  // height: 100%;

  .cls-1 {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 4px;/*no*/
    fill-rule: evenodd;
    stroke: url(#linear-gradient);
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 1.5s linear infinite;
  }
  .cls-2 {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 4px;/*no*/
    fill-rule: evenodd;
    stroke: url(#linear-gradient2);
    stroke-dasharray: 560;
    stroke-dashoffset: 560;
    animation: dash2 1.5s linear infinite;
  }
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes dash2 {
  to {
    stroke-dashoffset: 1000;
  }
}
</style>
