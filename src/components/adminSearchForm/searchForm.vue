<template>
  <div id="adminSearchForm">
    <el-form
      class="adminSearchForm"
      :label-width="labelWidth"
      :model="formData"
      ref="formRef"
    >
      <div style="width: 100%">
        <div class="searchItem">
          <template
            v-for="(item, index) in searchItem['filterData']"
            :span="item.span || 6"
          >
            <el-form-item
              :key="`formItem${index + 1}`"
              class="form-group"
              :label="
                item.type === 'radio' || item.isLabel ? item.label + '：' : ''
              "
              :label-width="
                item.type === 'radio' || item.isLabel ? item.labelWidth : ``
              "
              :prop="item.props.fieldName"
              :rules="item.props.rules"
              v-if="!item.hide && !(senior && index > 4)"
            >
              <!-- <form-item
                v-model="formData[item.props.fieldName]"
                :item="item"
                :value="item.value || ''"
              /> -->
              <!-- 输入框 -->
              <el-input
                v-model="formData[item.props.fieldName]"
                :placeholder="
                  item.props.placeholder
                    ? item.props.placeholder
                    : `请输入${item.label}`
                "
                class="filter-item-input"
                v-if="item.type === 'input'"
                :style="{ maxWidth: item.props.width || '200px' }"
              >
              </el-input>
              <!-- 下拉选择器 -->
              <el-select
                v-model="formData[item.props.fieldName]"
                :placeholder="
                  item.props.placeholder
                    ? item.props.placeholder
                    : `请选择${item.label}`
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
                  :key="
                    `select${index}${item.props.fieldName}${optionItem.value}`
                  "
                  :label="optionItem.name || optionItem.text"
                  :value="
                    item.obj
                      ? optionItem
                      : `${optionItem.id}` || `${optionItem.value}`
                  "
                />
              </el-select>
              <!-- 单选 -->
              <el-radio-group
                v-if="item.type === 'radio'"
                v-model="formData[item.props.fieldName]"
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
                v-model="formData[item.props.fieldName]"
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
                v-model="formData[item.props.fieldName]"
              >
                <el-checkbox
                  v-for="ch in item.props.options"
                  :label="ch.name || ch.text"
                  :key="ch.id"
                ></el-checkbox>
              </el-checkbox-group>
              <!-- 日期 -->
              <el-date-picker
                :style="{
                  maxWidth: item.props.width ? item.props.width : '330px',
                }"
                v-model="formData[item.props.fieldName]"
                :value-format="item.props.format || 'yyyy-MM-dd HH:mm:ss'"
                :type="item.props.type || 'datetimerange'"
                unlink-panels
                range-separator="至"
                :start-placeholder="
                  item.props.startPlaceholder || '请选择开始日期'
                "
                :end-placeholder="item.props.endPlaceholder || '请选择结束日期'"
                :placeholder="item.placeholder"
                v-if="item.type === 'dataPicker'"
                :prefix-icon="item.props.prefixIcon || 'el-icon-date'"
                :clear-icon="item.props.clearIcon || 'el-icon-circle-close'"
              ></el-date-picker>
              <!-- 月份 -->
              <el-date-picker
                :style="{
                  maxWidth: item.props.width ? item.props.width : '330px',
                }"
                v-model="formData[item.props.fieldName]"
                :type="item.props.type"
                align="right"
                :placeholder="item.props.placeholder || '请选择' + item.label"
                :value-format="item.props.format || 'yyyy-MM'"
                :start-placeholder="
                  item.props.startPlaceholder || '请选择开始月份'
                "
                :end-placeholder="item.props.endPlaceholder || '请选择结束月份'"
                v-if="item.type === 'monthPicker'"
              >
              </el-date-picker>
              <!-- 树结构选择框 -->
              <!-- <treeselect
                :style="{
                  maxWidth: item.props.width ? item.props.width : '330px',
                }"
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
                    return loadOptions(
                      action,
                      parentNode,
                      callback,
                      item.callback
                    );
                  }
                "
                :placeholder="
                  item.props.placeholder
                    ? item.props.placeholder
                    : `请选择${item.label}`
                "
                v-model="formData[item.props.fieldName]"
              /> -->
              <template v-if="item && item.type === 'custom'">
                <slot :name="item.props.fieldName"> </slot>
              </template>
            </el-form-item>
          </template>
          <div
            class="btnInfo text-center cl search"
            v-if="searchItem['filterData'].length > 0 && searchBtnShow"
          >
            <el-button
              class="submitBtn f-12 f-l"
              size="small"
              @click="onSearch"
              :disabled="$_loading"
            >
              <i class="iconfont icon-sousuo"></i>
              搜索</el-button
            >
            <el-button
              class="seniorBtn f-12 f-l"
              size="small"
              v-if="searchItem.length > 5"
              @click="setSenior"
            >
              <i class="iconfont icon-sousuo"></i>
              {{ senior ? "高级查询" : "取消高级查询" }}
            </el-button>
            <!-- <el-button class="f-12 resetBtn f-l" size="small" @click="onReset">
              <i class="iconfont icon-gongxianzhishi"></i>
              重置</el-button
            > -->
            <el-button
              class="btnList addBtn"
              :disabled="addBtnDisabled"
              @click="addBtn"
              v-if="addBtnVisible"
            >
              <i class="iconfont icon-xinzeng"></i>
              <span class="pos-r">{{ addTitleBtn }}</span>
            </el-button>
            <el-button
              class="btnList delBtn"
              @click="delBtn"
              v-if="delBtnVisible"
              :disabled="delBtnDisabled"
            >
              <!-- <i class="iconfont icon-delete f-12 "></i> -->
              <span class="pos-r">{{ delTitleBtn }}</span>
            </el-button>
          </div>
          <div
            class="flexRow search"
            :class="
              addBtnVisible || delBtnVisible || otherBtnVisible
                ? 'hasbtnList'
                : ''
            "
          >
            <el-button
              class="btnList otherBtn"
              v-for="(item, index) in otherBtnLists"
              :key="`btn${index}`"
              @click="
                () => {
                  item.onClick();
                }
              "
              :disabled="item.disabled || false"
              v-if="otherBtnVisible"
            >
              <i :class="`iconfont ${item.icon}`"></i>
              <span class="pos-r">{{ item.label }}</span>
            </el-button>
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script lang="ts">
// import formItem from "./formItem.vue";
// import searchFormTools from "@/util/searchFormTools";
// import otherBtnList from "./otherBtnList";
// import treeselect from "@riophae/vue-treeselect";
import { ref, reactive, watch, toRefs, computed } from "vue";
export default {
  props: {
    // label width
    labelWidth: {
      type: String,
      default: "0px",
    },
    // 所有的搜索组件
    searchItems: {
      type: Array,
      required: true,
      default: () => [],
    },
    addTitleBtn: {
      type: String,
      default: "新增",
    },
    addTitleBtn301: {
      type: String,
      default: "新增",
    },
    delTitleBtn: {
      type: String,
      default: "删除",
    },
    search: {
      type: Boolean,
      default: true,
    },
    // 添加按钮显示
    addBtnVisible: {
      type: Boolean,
      default: false,
    },
    addBtnDisabled: {
      type: Boolean,
      default: false,
    },
    addBtnVisible301: {
      type: Boolean,
      default: false,
    },
    delBtnVisible: {
      type: Boolean,
      default: false,
    },
    delBtnDisabled: {
      type: Boolean,
      default: false,
    },
    // 是否显示查询按钮
    otherBtnVisible: {
      type: Boolean,
      default: false,
    },
    otherBtnLists: {
      type: Array,
      default: null,
    },
    addBtnIconfont: {
      type: Boolean,
      default: true,
    },
    searchChangeValue: {
      type: Object,
      default: () => {
        return {};
      },
    },
    searchBtnShow: {
      type: Boolean,
      default: true,
    },
    an: Number,
  },
  setup(props: any, content: any) {
    const { searchItems, searchChangeValue } = toRefs(props);
    const searchItemList = reactive([...props.searchItems]);
    const searchItem = reactive({
      filterData: searchItemList.filter((value) => !value.hide),
    });
    let obj: any = {};
    searchItem.filterData.forEach((v) => {
      if (v.type === "checkbox") {
        obj[v.props.fieldName] = v.initValue ? v.initValue : [];
      } else {
        obj[v.props.fieldName] = v.initValue ? v.initValue : undefined;
      }
    });
    let formData = reactive({
      ...obj,
    });
    let data = reactive({
      checkBoxGroup: [],
      // formData: {},
      senior: true,
      searchItemList: searchItems,
      anBoolean: 0,
    })
    const formRef = ref<any>({})
    const newKeys = computed(() => "jkl");
    watch(searchItems, (val) => {
       data.searchItemList = val;
        if (Object.keys(searchChangeValue).length === 0) {
          addInitValue();
        } else {
          formData = Object.assign(formData, searchChangeValue);
        }
    })
    watch(formData, (val) => {
      // if (JSON.stringify(this.formItem) !== JSON.stringify(val)) {
        content.emit('onChange', val)
      // }
    })
    watch(searchChangeValue, (val) => {
       if (JSON.stringify(formData) !== JSON.stringify(val)) {
          formData = JSON.parse(JSON.stringify({...formData, ...val}));
        }
    })
    const onChange = (val: any, fun: any) => {
      if (fun) {
        if (typeof fun == "function") {
          fun(val);
        } else {
          return;
        }
      }
    };
    // 延迟加载
    const loadOptions = (action: any, parentNode: any, callback: any, fn: any) => {
      if (fn) {
        if (typeof fn == "function") {
          fn(action, parentNode, callback);
          // callback()
        } else {
          return;
        }
      }
    };
    // 自定义健名
    const formatterNode = (node: any, fun: any) => {
      if (fun) {
        if (typeof fun == "function") {
          return fun(node);
        } else {
          return;
        }
      }
    };
    // 校验
    const onValidate = (callback: any) => {
      formRef.value.validate((valid: any) => {
        if (valid) {
          callback();
        }
      });
    };
    // 搜索按钮传给父组件
    const onSearch = () => {
      onValidate(() => {
        let formDataObj: any = {};
        Object.keys(formData).map((data) => {
          if (formData[data] !== "-1") {
            formDataObj[data] = formData[data];
          }
        });
        console.log(formData);
        content.emit("onSearch", formDataObj);
        // this.$forceUpdate();
      });
      return formData;
    };
    const onReset = () => {
      formData = {};
      formRef.value.resetFields();
      content.emit("onReset", true);
    };
    // 添加初始值
    const addInitValue = async() => {
      let obj: any = {};
      await searchItem.filterData.forEach((v) => {
        if (v.type === "checkbox") {
          obj[v.props.fieldName] = v.initValue ? v.initValue : [];
        } else {
          obj[v.props.fieldName] = v.initValue ? v.initValue : undefined;
        }
      });
      formData = { ...obj };
    };
    const forceUpdate = () => {
      addInitValue();
      // this.$forceUpdate();
    };
    const setSenior = () => {
      data.senior = !data.senior;
      if (data.senior) {
        searchItem.filterData.map((item, index) => {
          if (index > 1) {
            delete formData[item.props.fieldName];
          }
        });
      }
    };
    // 点击新增按钮
    const addBtn = () => {
      content.emit("on-addBtn", true);
    };
    const delBtn = () => {
      content.emit("on-delBtn", true);
    };
    return {
      searchItem,
      formData,
      formRef,
      onChange,
      loadOptions,
      formatterNode,
      onValidate,
      onSearch,
      onReset,
      addInitValue,
      forceUpdate,
      setSenior,
      addBtn,
      delBtn
    };
  },
  data() {
    return {
      checkBoxGroup: [],
      // formData: {},
      senior: true,
      // searchItem: [],
      // searchItemList: this.searchItems,
      anBoolean: 0,
    };
  }
};
</script>
<style lang="less" scoped>
#adminSearchForm {
  width: 100%;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 0px 9px 0px rgba(198, 198, 198, 0.27);
}
.adminSearchForm {
  padding: 15px 0;/*no*/
  .el-row {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: -10px; /*no*/
    /deep/.el-col {
      margin-bottom: 10px; /*no*/
      .el-form-item {
        margin-bottom: 0px;
      }
    }
  }
  // 按钮
  .searchItem {
    width: 100%;
    label {
      height: 30px; /*no*/
      line-height: 30px; /*no*/
      font-size: 12px; /*no*/
      color: #000;
    }
  }
  .searchItem,
  .btnInfo {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  button {
    min-width: 70px; /*no*/
    height: 36px; /*no*/
    font-size: 14px !important; /*no*/
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 600;
    border-radius: 2px;
  }
  .form-group {
    margin-right: 10px; /*no*/
    margin-bottom: 0;
    float: left;
  }
  .submitBtn,
  .seniorBtn,
  .resetBtn {
    margin-left: 0px !important;
    margin-right: 10px; /*no*/
    background: #3f5cc5 !important;
    color: #fff;
    box-shadow: 0px 4px 7px 0px #deebff;
    &:hover,
    &:focus,
    &:active {
      color: #fff;
    }
    span {
      vertical-align: middle;
      i {
        vertical-align: inherit;
      }
    }
  }
  .resetBtn {
    background: #fff !important;
    margin-left: 0px !important;
    border: 1px solid #3f5cc5;
    margin-right: 10px; /*no*/
    font-weight: 600;
    color: #3f5cc5;
    &:hover,
    &:focus,
    &:active {
      color: #3f5cc5;
    }
  }
  // 新增，删除以及其它自定义的按钮
  .search {
    vertical-align: middle;
    font-size: 0;
    .btnList {
      min-width: 70px; /*no*/
      padding: 8px 14px;/*no*/
      background: #3f5cc5;
      font-size: 14px; /*no*/
      color: #fff;
      // cursor: pointer;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      margin-right: 10px; /*no*/
      margin-left: 0;
      box-sizing: border-box;
      &.delBtn {
        margin-left: 0;
        padding: 0;
        background: rgba(255, 255, 255, 1);
        border: 1px solid #3f5cc5; /*no*/
        color: #3f5cc5;
        &.is-disabled {
          color: #fff;
          border: 1px solid #b9b9b9; /*no*/
        }
      }
      &.otherBtn{
         background: #20becf;
        box-shadow: 0px 4px 7px 0px #cbf0f3;
      }
      &.is-disabled {
        background: #b9b9b9;
      }
    }
    .addBtn {
      background: #20becf;
      box-shadow: 0px 4px 7px 0px #cbf0f3;
    }
  }

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
  // vue-tree-select
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
