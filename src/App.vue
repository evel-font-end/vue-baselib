<template>
  <div id='app'>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  user-select: none;
}
.content {
  /* justify-content: space-between; */
  padding: 20px 0;
  height: auto !important;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar{
  width: 3px;
  height: 15px;
  background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #2d8cf0;
}
pre{
  padding: 10px !important;
  .code {
    position: relative;
    border-radius: 3px;
    border: 1px solid #C3CCD0;
    overflow: hidden;
    // padding-left: 60px!important;
    code {
        line-height: 30px !important;
    }
    ol.pre-numbering {
        position: absolute;
        top: 0;
        left: 5px;
        line-height: 30px;
        padding: 16px 0;
        list-style-type:none;
        counter-reset:sectioncounter;
        margin-bottom: 0;
        li{
            margin-top: 0!important;
            &:before{
                content:counter(sectioncounter) "";
                counter-increment:sectioncounter;
                display: inline-block;
                width: 40px;
                text-align: center;
                border-right: solid 1px rgba(0, 0, 0, 0.53);
            }
        }
    }
    i.code-copy{
        position: absolute;
        top:0;
        right: 0;
        background-color: #464d5e;
        padding: 3px;
        margin: 3px 3px 0 0;
        font-size: 16px;
        border-radius: inherit;
        color: #f1f1f1;
        cursor: pointer;
        display: none;
    }
    &:hover i.code-copy{
        display: block;
    }
  }
}
table {
  th{
    &:not(:last-child) {
      width: 18%;
    }
    &:nth-last-of-type(1) {
      width: 28%;
    }
  }
}
</style>
