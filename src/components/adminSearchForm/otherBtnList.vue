<template>
  <div id="adminOtherBtnList" class="pos-r">
    <el-button type="primary" @click="toogle">
      更多操作<i :class="getClass()"></i>
    </el-button>
    <div :style="{display: an === 0 ? 'none' : 'block'}" class="list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addTitleBtn: {
      type: String,
      default: '新增'
    },
    anBoolean: Number
  },
  watch: {
    anBoolean (val) {
      this.an = val
      this.toogle()
    }
  },
  data () {
    return {
      an: 0
    };
  },
  methods: {
    getClass () {
      let className = {
        0: 'el-icon-caret-bottom',
        1: 'el-icon-caret-top'
      };
      return `${className[this.an]} el-icon--right f-9`
    },
    toogle () {
      this.an = this.an === 0 ? 1 : 0;
    }
  }
};
</script>

<style lang="less">
#adminOtherBtnList {
  position: relative;
  button{
    width:105px;
    height:36px;
    background:rgba(37,115,241,1);
    border-radius: 0;
    span{
      font-size:14px;/*no*/
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
    }
  }
  .list{
    position: absolute;
    width: 100%;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 4px 0px rgba(137,137,137,0.5);/*no*/
    z-index: 1;
    li{
      padding: 10px 15px;/*no*/
      font-size:14px;/*no*/
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(34,34,38,1);
      cursor: pointer;
    }
  }
}
</style>
