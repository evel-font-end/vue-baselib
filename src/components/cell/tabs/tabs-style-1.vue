<template>
  <div class="tabs-container">
    <div class="top_btns">
      <ul class="top_btn_list">
        <li
          v-for="(item, itemIndex) in tabsList"
          :key="itemIndex"
          :class="{ active: currIndex === itemIndex }"
          @click="changeIndex(itemIndex)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs-style-1',
  data() {
    return {
      //  tabsList: [
      //   '骨干网核心节点',
      //   '国际出口',
      //   '骨干网设备端口',
      //   '城域网设备',
      //   '骨干网设备端口',
      //   '城域网设备',
      // ],
      currIndex: 0,
    }
  },
  props: {
    tabsList:{
      type: Array,
      default: []
    }
  },
  methods: {
    changeIndex(itemIndex) {
      this.currIndex = itemIndex;
      // console.log('this.firsScreenRadio', this.currIndex);
      this.$emit('tabsHandle', itemIndex);
    }
  }
}
</script>

<style lang='scss' scoped>
.tabs-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20px;
  .top_btns {
    display: inline-block;
    border-radius: 48px;
    overflow: hidden;
    padding: 2px;
    box-sizing: border-box;
    position: absolute;
    clear: both;
    .top_btn_list {
      clear: both;
      box-sizing: border-box;
      display: flex;
      color: white;
      justify-content: center;
      border: 1px solid #30a4e7;
      border-radius: 100px;
      overflow: hidden;
      li {
        box-sizing: border-box;
        clear: both;
        cursor: pointer;
        padding: 0 20px;
        line-height: 50px;
        border-left: 1px solid #30a4e7;
        list-style: none;
        box-shadow: 0px 7px 5px 0px rgba(23, 183, 216, 0.47),
          0px 0px 14px 0px rgba(23, 183, 216, 0.47) inset;
        border-collapse: collapse;
        &:first-child {
          border-left: none;
          // box-shadow: none
        }
        &.active {
          background: #005374;
        }
      }
    }
  }
  .tabs-content {
    width: 100%;
    height: 100%;
    margin-top: 60px;
    // border: 1px solid red;
  }
}
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear:both;
  visibility: hidden;
}
.clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
</style>