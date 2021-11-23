<template>
  <div class="outerBox" :class="headlineClass">
    <div class="innerBox">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headline-style-4',
  props: {
    title: {
      type: String,
      default: ""
    },
    headlineClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.outerBox {
  /* width: 95%;
  max-height: 63px; */
  margin-bottom: 20px;
  background: linear-gradient(
    270deg,
    rgba(6,63,179,0),
    rgba(15,115,218,0.1) 49%,
    rgba(15,115,218,0)
  );
  padding: 10px 14px 10px 0;
}
.innerBox {
  width: 100%;
  height: 100%;
  opacity: 1;
  background: linear-gradient(
    270deg,
    rgba(6, 63, 179, 0),
    rgba(36, 88, 202, 0.52) 54%,
    rgba(0, 172, 212, 0)
  );
}
.innerBox span {
  background-image: linear-gradient(180deg, #ffffff 18%, #d5f4ff 70%);
  opacity: 1;
  font-size: 30px;
  font-family: YouSheBiaoTiHei;
  text-align: left;
  color: #ffffff;
  line-height: 39px;
  letter-spacing: 1px;
  text-shadow: 0px 2px 4px 0px #1c4696;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.innerBox::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 14px solid #73cfff;
  border-bottom: 10px solid transparent;
  margin-right: 12px;
}
</style>