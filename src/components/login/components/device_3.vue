<template>
  <div class="container">
    <div class="dot">
      <img :src="src" alt="" />
    </div>
    <div class="pulse"></div>
    <div class="pulse1"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="less">
@keyframes warn {
  0% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0;
  }

  25% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.5;
  }

  50% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.7;
  }

  75% {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes warn1 {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
    opacity: 0;
  }

  25% {
    transform: scale(0.2);
    -webkit-transform: scale(0.2);
    opacity: 0.1;
  }

  50% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.3;
  }

  75% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(0.6);
    -webkit-transform: scale(0.6);
    opacity: 0;
  }
}

@keyframes trans {
  0% {
    top: 0;
  }
  100% {
    top: 70px;
  }
}
.container {
  position: relative;
  width: 74px;
  height: 150px;
}
/* 中间保持大小不变的图片 */
.dot {
  position: absolute;
  width: 74px;
  height: 70px;
  z-index: 2;
  left: 50%;
  top: 70px;
  transform: translateX(-50%);

  // -webkit-animation: trans 2s linear;
  // -moz-animation: trans 2s linear;
  // animation: trans 2s linear;
  // -webkit-animation-iteration-count: infinite;
  // -moz-animation-iteration-count: infinite;
  // animation-iteration-count: infinite;
  img {
    width: 100%;
    height: 100%;
  }
}
/* 向外扩散变大的圆圈 第一个圆 */
.pulse {
  position: absolute;
  width: 74px;
  height: 26px;
  bottom: -15px;
  background: radial-gradient(rgba(20, 136, 234, 0), rgba(20, 136, 234, 0.4));
  border: 2px solid rgb(115,241,255);
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  z-index: 1;
  opacity: 0;
  -webkit-animation: warn 2s linear;
  -moz-animation: warn 2s linear;
  animation: warn 2s linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
/* 向外扩散变大的圆圈 第二个圆 */
.pulse1 {
  position: absolute;
  width: 74px;
  height: 26px;
  bottom: -15px;

  background: radial-gradient(rgba(20, 136, 234, 0), rgba(20, 136, 234, 0.4));
  border: 2px solid rgb(115,241,255);
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  z-index: 1;
  opacity: 0;
  -webkit-animation: warn1 2s linear;
  -moz-animation: warn1 2s linear;
  animation: warn1 2s linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>