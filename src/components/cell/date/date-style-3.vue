<template>
  <div class="date-container">
    <div class="datePicker">
        <span v-if="isShowTitle" class="demonstration">选择时间：</span>
        <el-date-picker
          v-model="year"
          :format="format"
          type="year"
          @change="dateChange"
          :placeholder="tip"
        >
        </el-date-picker>
      </div>
  </div>
</template>

<script>
import { formatDate } from './date'

export default {
  name: 'date-style-3',
  props: {
    value: {
      required: true,
    },
    format: {
      type: String,
      default: 'yyyy',// 年显示的格式
    },
    tip: {
      type: String,
      default: '选择年',
    },
    isShowTitle: {
      type: Boolean,
      default: true,// 是否显示日期标题
    },
  },
  data() {
    return {
      year: '',
    }
  },
  watch: {
    value(val) {
      let _val = this.getformatDate(val);
      if (_val !== this.year) {
        this.year = _val;
        this.$emit('input', this.year);
      }
    }
  },
  created() {
    this.year = this.getformatDate(this.value);
  },
  methods: {
     isString(obj) {// 判断是不是字符串
      Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'string'
    },
    getformatDate(date) {
      if (this.isString(date) && /^(\d{4})$/.test(date)) { // 修正来自移动端的'20220229'的数据
        date = `${RegExp.$1}`;
      }
      if (date) {
        return formatDate(date, 'yyyy');
      }
      return '';
    },
    dateChange(val) {
      this.year = val;
      this.$emit('input', val);
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