<template>
    <div class='board-container' :id='sid'>
    <div class='com-chart'>
      <svg
        width='300px'
        height='210px'
        class='circle-line'
        viewBox='0 0 267 219'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlns:xlink='http://www.w3.org/1999/xlink'>
        <title>路径</title>
        <defs>
          <linearGradient
            x1='54.9676335%'
            y1='89.3607194%'
            x2='62.4135293%'
            y2='16.6241132%'
            id='linearGradient-1'>
            <stop stop-color='#398BFF' stop-opacity='0' offset='0%' />
            <stop stop-color='#25EDA0' offset='50.4955403%' />
            <stop stop-color='#39D6FF' offset='100%' />
          </linearGradient>
        </defs>
        <g
          id='确定的效果'
          stroke='none'
          stroke-width='1'
          fill='none'
          fill-rule='evenodd'>
          <g
            id='摄像头'
            transform='translate(-113.000000, -215.000000)'
            fill='url(#linearGradient-1)'
            fill-rule='nonzero'>
            <g id='编组-45' transform='translate(40.000000, 210.000000)'>
              <g id='今日事件数据' transform='translate(73.000000, 0.000000)'>
                <g id='编组-27' transform='translate(0.000000, 0.502242)'>
                  <path
                    d='M133.737778,5.09321173 C207.323506,5.09321173 266.975556,65.0303401 266.975556,138.965346 C266.975556,169.582391 256.714429,198.622894 238.17864,222.098745 L237.614419,222.808427 L236.833751,222.183481 C255.584626,198.760338 265.975556,169.662518 265.975556,138.965346 C265.975556,65.5815604 206.770151,6.09321173 133.737778,6.09321173 C60.7054048,6.09321173 1.5,65.5815604 1.5,138.965346 C1.5,168.920933 11.3936945,197.358133 29.31165,220.494177 L29.8570725,221.193643 L29.070522,221.811169 C10.6708788,198.375307 0.5,169.449352 0.5,138.965346 C0.5,65.0303401 60.15205,5.09321173 133.737778,5.09321173 Z'
                    id='路径' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div class='ball' />
      <div class='gauge-img' ref='gauge' />
      <div class='todayEvents'>
        <p
          class='num'
          :style="echartOptions.sourceStyle"
        >
        {{source}}
        </p>
        <p
          class='text'
          :style="echartOptions.subtextStyle"
        >
        {{echartOptions.subtext}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoardStyle3',
  props: {
    sid: {
      type: String,
      default: () => 'board3',
    },
    source: {
      type: String,
      default() {
        return '80';
      },
    },
    options: {
      type: Object,
      default() {
        return {
        }
      }
    },
  },
  data() {
    return {
      chart: null,
      option: {},
      echartOptions: {
        subtext: '今日事件',
        subtextStyle: {},
        sourceStyle: {}
      }
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.echartOptions = Object.assign(this.echartOptions, this.options)
    })
  },
  methods: {
  },
}
</script>
<style lang='scss' scoped>
.board-container{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes ball {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}
.com-chart {
  width: 300px;
  height: 210px;
  position: relative;
  display: flex;
  align-items: center;
  .ball {
    position: absolute;
    top: -2%;
    left: 3%;
    width: 30px;
    height: 7px;
    background: url("./images/line.png") no-repeat;
    background-size: 100% 100%;
    offset-path: path(
      "M133.737778,5.09321173 C207.323506,5.09321173 266.975556,65.0303401 266.975556,138.965346 C266.975556,169.582391 256.714429,198.622894 238.17864,222.098745 L237.614419,222.808427 L236.833751,222.183481 C255.584626,198.760338 265.975556,169.662518 265.975556,138.965346 C265.975556,65.5815604 206.770151,6.09321173 133.737778,6.09321173 C60.7054048,6.09321173 1.5,65.5815604 1.5,138.965346 C1.5,168.920933 11.3936945,197.358133 29.31165,220.494177 L29.8570725,221.193643 L29.070522,221.811169 C10.6708788,198.375307 0.5,169.449352 0.5,138.965346 C0.5,65.0303401 60.15205,5.09321173 133.737778,5.09321173 Z"
    );
    offset-distance: 0%;
    animation: ball 8s linear 0s infinite;
  }
  .circle-line {
    position: absolute;
    width: 300px;
    height: 210px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .gauge-img {
    width: 220px;
    height: 180px;
    background: url("./images/camera_gauge.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
  .todayEvents {
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    .num {
      font-size: 48px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
      line-height: 36px;
      letter-spacing: 2px;
      margin-bottom: 28px;
      text-align: center;
    }
    .text {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #ffffff;
      line-height: 16px;
      letter-spacing: 1px;
    }
  }
}
</style>
