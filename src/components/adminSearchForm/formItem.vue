<template>
  <div id="adminFormItem">
    <!-- 输入框 -->
    <el-input
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
      :placeholder="
        item.props.placeholder ? item.props.placeholder : `请输入${item.label}`
      "
      @keyup.enter.native="handleFilter"
      class="filter-item-input"
      v-if="item.type === 'input'"
      :style="{ maxWidth: item.props.width || '120px' }"
    >
    </el-input>
    <!-- 下拉选择器 -->
    <el-select
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
      :placeholder="
        item.props.placeholder ? item.props.placeholder : `请选择${item.label}`
      "
      clearable
      value-key="name"
      class="filter-item-select"
      :style="{ maxWidth: item.props.width || '140px' }"
      :disabled="item.props.disabled"
      @change="
        (value) => {
          onChange(value, item.onChange);
        }
      "
      v-if="item.type === 'select'"
    >
      <el-option
        v-for="(optionItem, index) in [
          { id: '-1', name: `所有${item.label}` },
          ...item.props.options,
        ]"
        :key="`select${index}${item.props.fieldName}${optionItem.value}`"
        :label="optionItem.name || optionItem.text"
        :value="
          item.obj ? optionItem : `${optionItem.id}` || `${optionItem.value}`
        "
      />
    </el-select>
    <!-- 单选 -->
    <el-radio-group
      v-if="item.type === 'radio'"
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
    >
      <el-radio
        v-for="ch in item.props.options"
        :label="ch.value || ch.id"
        :key="ch.value || ch.id"
      >
        {{ ch.text || ch.name }}
      </el-radio>
    </el-radio-group>
    <!-- 单选按钮 -->
    <el-radio-group
      v-if="item.type === 'radioButton'"
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
      @change="item.change && item.change(item.props.fieldName)"
    >
      <el-radio-button
        v-for="ch in item.props.options"
        :label="ch.value || ch.id"
        :key="ch.value || ch.id"
      >
        {{ ch.name || ch.text }}
      </el-radio-button>
    </el-radio-group>
    <!-- 复选框 -->
    <el-checkbox-group
      v-if="item.type === 'checkbox'"
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
    >
      <el-checkbox
        v-for="ch in item.props.options"
        :label="ch.name || ch.text"
        :key="ch.id"
      ></el-checkbox>
    </el-checkbox-group>
    <!-- 日期 -->
    <el-date-picker
      :style="{ maxWidth: item.props.width ? item.props.width : '330px' }"
      v-model="currentVal"
      :value-format="item.props.format || 'yyyy-MM-dd HH:mm:ss'"
      :type="item.props.type || 'datetimerange'"
      unlink-panels
      range-separator="至"
      :start-placeholder="item.props.startPlaceholder || '请选择开始日期'"
      :end-placeholder="item.props.endPlaceholder || '请选择结束日期'"
      :placeholder="item.placeholder"
      v-if="item.type === 'dataPicker'"
      :prefix-icon="item.props.prefixIcon || 'el-icon-date'"
      :clear-icon="item.props.clearIcon || 'el-icon-circle-close'"
    ></el-date-picker>
    <!-- 月份 -->
    <el-date-picker
      :style="{ maxWidth: item.props.width ? item.props.width : '330px' }"
      v-bind="bindProps"
      v-on="bindEvents"
      v-model="currentVal"
      :type="item.props.type"
      align="right"
      :placeholder="item.props.placeholder || '请选择' + item.label"
      :value-format="item.props.format || 'yyyy-MM'"
      :start-placeholder="item.props.startPlaceholder || '请选择开始月份'"
      :end-placeholder="item.props.endPlaceholder || '请选择结束月份'"
      v-if="item.type === 'monthPicker'"
    >
    </el-date-picker>
    <!-- 树结构选择框 -->
    <treeselect
      :style="{ maxWidth: item.props.width ? item.props.width : '330px' }"
      v-if="item.type === 'treeselect'"
      :multiple="item.props.multiple || false"
      :options="item.props.options"
      :disable-branch-nodes="item.props.disableBranch || false"
      :normalizer="
        (node) => {
          return formatterNode(node, item.normalizer);
        }
      "
      :load-options="
        ({ action, parentNode, callback }) => {
          return loadOptions(action, parentNode, callback, item.callback);
        }
      "
      :placeholder="
        item.props.placeholder ? item.props.placeholder : `请选择${item.label}`
      "
      v-model="currentVal"
    />
  </div>
</template>
<script>
import treeselect from "@riophae/vue-treeselect";
export default {
  props: {
    value: {},
    // 搜索组件
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    treeselect,
  },
  data() {
    return {
      checkBoxGroup: [],
      currentVal: null,
    };
  },
  created() {
    if (this.item.type === "checkbox") {
      this.currentVal = []
    } else {
      this.currentVal = ''
    }
    this.$emit("input", this.item.props.defaultValue || "");
  },
  computed: {
    // 双向绑定数据值
    // currentVal: {
    //   get () {
    //     if (this.item.type === 'checkbox') {
    //       return this.value ? this.value : [];
    //     }
    //     if (this.item.type === 'select') {
    //       return this.value ? this.value : (this.item.obj ? `所有${this.item.label}` : '-1')
    //     }
    //     if (this.item.type === 'treeselect') {
    //       return this.value ? this.value : null
    //     }
    //     return this.value ? this.value : ''
    //   },
    //   set (val) {
    //     this.currentVal = val
    //     this.$emit('input', val)
    //   }
    // },
    // 绑定属性
    bindProps() {
      let obj = { ...this.item };
      // 移除冗余属性
      delete obj.label;
      delete obj.prop;
      delete obj.element;
      delete obj.initValue;
      delete obj.rules;
      delete obj.events;
      if (obj.type === "select" || obj.type === "checkbox") {
        delete obj.options;
      }
      return obj;
    },
    // 绑定方法
    bindEvents() {
      return this.item.events || {};
    },
  },
  methods: {
    onChange(val, fun) {
      if (fun) {
        if (typeof fun == "function") {
          fun(val);
        } else {
          return;
        }
      }
    },
    // 延迟加载
    loadOptions(action, parentNode, callback, fn) {
      if (fn) {
        if (typeof fn == "function") {
          fn(action, parentNode, callback);
          // callback()
        } else {
          return;
        }
      }
    },
    // 自定义健名
    formatterNode(node, fun) {
      if (fun) {
        if (typeof fun == "function") {
          return fun(node);
        } else {
          return;
        }
      }
    },
  },
};
</script>
<style lang="less">
#adminFormItem {
  input {
    font-size: 12px; /*no*/
    font-weight: 400;
  }
  .el-radio-group {
    .el-radio {
      margin-right: 5px; /*no*/
      .el-radio__label {
        padding-left: 3px; /*no*/
        font-size: 12px; /*no*/
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #626262;
      }
    }
  }
  .el-checkbox__label {
    font-size: 12px; /*no*/
  }
  .el-date-editor {
    .el-range-separator {
      padding: 5px 0;
    }
    .el-range-input {
      height: 100%;
    }
  }
  .filter-item-input {
    max-width: 160px;
  }
  .filter-item-select {
    max-width: 140px;
  }
  /deep/.vue-treeselect {
    height: 30px; /*no*/
    .vue-treeselect__control {
      height: 30px; /*no*/
      font-size: 12px; /*no*/
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(230, 236, 255, 1);
      border-radius: 4px; /*no*/
      .vue-treeselect__value-container {
        height: 30px; /*no*/
        .vue-treeselect__multi-value {
          height: 30px; /*no*/
          margin-bottom: 0px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .vue-treeselect__input-container {
          padding-top: 0;
        }
        .vue-treeselect__multi-value-item-container {
          height: 24px; /*no*/
          padding: 0;
          .vue-treeselect__multi-value-item {
            height: 24px; /*no*/
            line-height: 24px; /*no*/
            margin: 2px 0 2px 6px;
            padding: 0 20px 0 8px;
            background-color: #f4f4f5;
            border-color: #e9e9eb;
            color: #909399;
            position: relative;
            border-radius: 4px; /*no*/
            .vue-treeselect__multi-value-label {
              padding: 0;
            }
            .vue-treeselect__value-remove {
              display: inline-block;
              color: #909399;
              padding: 0;
              background-color: #c0c4cc;
              border-radius: 50%;
              height: 16px; /*no*/
              width: 16px; /*no*/
              line-height: 16px; /*no*/
              text-align: center;
              transform: scale(0.8);
              position: absolute;
              top: 0;
              svg {
                width: 12px;
                height: 12px;
              }
            }
          }
        }
      }
    }
    .vue-treeselect__menu-container {
      z-index: 1002 !important;
      .vue-treeselect__menu {
        padding: 0;
        margin-top: 10px; /*no*/
      }
    }
  }
}
</style>
