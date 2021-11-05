<template>
  <div class="date-container">
    <div class="datePicker">
        <span class="demonstration">选择时间：</span>
        <el-date-picker
          v-model="year"
          format="yyyy"
          type="year"
          @change="dateChange"
          placeholder="选择年"
        >
        </el-date-picker>
      </div>
  </div>
</template>

<script>
export default {
  name: 'date-style-3',
  data() {
    return {
      year: '',
    }
  },
  methods: {
    dateChange(e) {
      console.log('e', e);
    }
  }
}
</script>

<style lang="scss" scoped>
.date-container {
  width: 100%;
  height: 100%;
  position: relative;
  .datePicker {
    color: #fff;
    /deep/ .el-input--suffix .el-input__inner {
      padding: 0;
      padding-left: 30px;
      padding-right: 30px;
    }
    /deep/ .el-input {
      width: 210px;
    }
    /deep/ .el-input__inner {
      background: rgba(13, 44, 70, 0.19);
      border: 2px solid;
      border-image: linear-gradient(270deg, rgba(0, 136, 175, 0.98) 1%, #0088af)
        2 2;
      color: #fff;
    }
    /deep/ .el-input__prefix,
    .el-input__suffix {
      color: #bdeaff;
    }
  }
}
</style>