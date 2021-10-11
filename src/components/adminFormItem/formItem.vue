<template>
  <div id="adminFormItem">
    <el-form
      ref="preForm"
      :model="preForm"
      :label-width="labelWidth"
      :rules="preRules"
    >
      <!-- <baseInfo :formItems="formItems" :disabled="disabled" :form="preForm"/> -->
      <el-row :gutter="10">
        <el-col
          v-for="(item, index) in formItems"
          :key="`item-${index}`"
          :span="(item && item.span) || 12"
          :offset="item.offset"
          :style="item.style"
        >
          <el-form-item
            :class="item.class"
            :label="
              item.label != '' && item.label
                ? item.label + (item.label.indexOf('：') > -1 ? '' : '：')
                : ''
            "
            :label-width="
              `${
                !item.label
                  ? '0px'
                  : item.labelWidth
                  ? item.labelWidth
                  : labelWidth
              }`
            "
            :prop="item && item.prop"
            v-if="!item.hide"
          >
            <div
              v-if="item.value && !item.prop && !item.custom"
              class="textItem"
            >
              <div>{{ item.value }}</div>
              <slot :name="item.prop" :value="preForm[item.prop]" />
            </div>

            <!-- <slot
              :name="item.prop"
              :value="preForm[item.prop]"
            /> -->
            <div v-if="!item.custom">
              <!-- 输入框 -->
              <template v-if="item && item.inputType === 'input'">
                <el-input
                  v-model="preForm[item.prop]"
                  :disabled="item.disabled || disabled"
                  :show-password="item.showPassword || false"
                  :type="item.type || 'text'"
                  :placeholder="
                    item.placeholder ? item.placeholder : `请输入${item.label}`
                  "
                  @change="
                    value => {
                      onChange(value, item.onChange);
                    }
                  "
                  v-focus
                />
              </template>
              <template v-if="item && item.inputType === 'inputUnit'">
                <el-input
                  v-model="preForm[item.prop]"
                  :placeholder="
                    item.placeholder ? item.placeholder : `请输入${item.label}`
                  "
                  :disabled="disabled || item.disabled"
                >
                  <template slot="append">{{ item.unit }}</template>
                </el-input>
              </template>
              <template v-if="item && item.inputType === 'inputRang'">
                <el-row>
                  <el-col :span="10">
                    <el-form-item prop="min">
                      <el-input
                        v-model="preForm[item.prop].min"
                        :disabled="item.disabled || disabled"
                        :placeholder="
                          item.placeholder
                            ? item.placeholder[0]
                            : `请输入${item.label}最小值`
                        "
                        @input="change($event)"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="4" :style="{ textAlign: 'center' }">
                    至
                  </el-col>
                  <el-col :span="10">
                    <el-form-item prop="min">
                      <el-input
                        v-model="preForm[item.prop].max"
                        :disabled="item.disabled || disabled"
                        :placeholder="
                          item.placeholder
                            ? item.placeholder[1]
                            : `请输入${item.label}最大值`
                        "
                        @input="change($event)"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
              </template>
              <template v-if="item && item.inputType === 'textarea'">
                <el-input
                  v-model="preForm[item.prop]"
                  type="textarea"
                  :placeholder="
                    item.placeholder ? item.placeholder : `请输入${item.label}`
                  "
                  :disabled="item.disabled || disabled"
                  :autosize="{
                    minRows: item.minRows || 3
                  }"
                  :show-word-limit="!!item.maxlength"
                  :maxlength="item.maxlength"
                  @input="change($event)"
                >
                </el-input>
              </template>
              <!-- 数字输入框 -->
              <template v-if="item && item.inputType === 'inputNumber'">
                <div class="flexRow">
                  <el-input-number
                    v-model="preForm[item.prop]"
                    controls-position="right"
                    :min="1"
                    :disabled="item.disabled || disabled"
                    :placeholder="
                      item.placeholder
                        ? item.placeholder
                        : `请输入${item.label}`
                    "
                  ></el-input-number>
                  <div style="margin-left: 10px" v-if="item.relevanceLabel">
                    {{ item.relevanceLabel }}
                  </div>
                </div>
              </template>
              <!-- 密码输入框 -->
              <template v-if="item && item.inputType === 'inputPassWord'">
                <el-input
                  v-model="form[item.prop]"
                  show-password
                  :disabled="disabled || item.disabled"
                  :placeholder="
                    item.placeholder ? item.placeholder : `请输入${item.label}`
                  "
                  @input="change($event)"
                />
              </template>
              <!-- 选择框 -->
              <template v-if="item && item.inputType === 'select'">
                <el-select
                  @change="val => handleSelectChange(val, item.prop)"
                  v-model="preForm[item.prop]"
                  :placeholder="
                    item.placeholder ? item.placeholder : `请选择${item.label}`
                  "
                  :disabled="item.disabled || disabled"
                  :multiple="item.multiple || false"
                  value-key="name"
                >
                  <el-option
                    v-for="(option, oIndex) in item.options"
                    :label="option.name"
                    :value="item.obj ? option : option.id"
                    :key="`select-${oIndex}`"
                  />
                </el-select>
              </template>
              <!-- 选择框 -->
              <template v-if="item && item.inputType === 'switch'">
                <el-switch
                  v-model="preForm[item.prop]"
                  :active-color="item.activeColor || '#2870FF'"
                  :inactive-color="item.inactiveColor || '#e0e0e0'"
                >
                </el-switch>
              </template>
              <template v-if="item && item.inputType === 'slider'">
                <el-slider
                  v-model="preForm[item.prop]"
                  :show-input="item.showInput || false"
                >
                </el-slider>
              </template>
              <template v-if="item && item.inputType === 'dataPicker'">
                <el-date-picker
                  v-model="preForm[item.prop]"
                  type="date"
                  :placeholder="
                    item.placeholder ? item.placeholder : `请选择${item.label}`
                  "
                  :disabled="item.disabled || disabled"
                  :format="
                    item.format || 'yyyy 年 MM 月 dd 日  HH 时 mm 分 ss 秒'
                  "
                  :value-format="item.format || 'yyyy-MM-dd HH:mm:ss'"
                >
                </el-date-picker>
              </template>
              <template v-if="item && item.inputType === 'datetimePicker'">
                <el-date-picker
                  v-model="preForm[item.prop]"
                  type="datetime"
                  :placeholder="
                    item.placeholder ? item.placeholder : `请选择${item.label}`
                  "
                  :value-format="item.format || 'yyyy-MM-dd HH:mm:ss'"
                >
                </el-date-picker>
              </template>
              <template v-if="item && item.inputType === 'daterange'">
                <el-date-picker
                  v-model="preForm[item.prop]"
                  :type="item.type || 'daterange'"
                  range-separator="至"
                  :start-placeholder="`请选择开始日期`"
                  :end-placeholder="`请选择结束日期`"
                  :disabled="
                    item.disabled !== undefined || item.disabled !== null
                      ? item.disabled
                      : disabled
                  "
                  :format="
                    item.format || 'yyyy 年 MM 月 dd 日  HH 时 mm 分 ss 秒'
                  "
                  :value-format="item.formatValue || 'yyyy-MM-dd HH:mm:ss'"
                >
                </el-date-picker>
              </template>
              <template v-if="item && item.inputType === 'timePicker'">
                <el-time-picker
                  :is-range="item.range || false"
                  :arrow-control="false"
                  v-model="preForm[item.prop]"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围"
                  :disabled="
                    item.disabled !== undefined || item.disabled !== null
                      ? item.disabled
                      : disabled
                  "
                  :format="item.format || 'HH:mm'"
                  :value-format="item.formatValue || 'HH:mm'"
                />
              </template>
              <template v-if="item && item.inputType === 'radio'">
                <el-radio-group
                  class="radioGroup"
                  v-model="preForm[item.prop]"
                  :disabled="
                    item.disabled !== undefined || item.disabled !== null
                      ? item.disabled
                      : disabled
                  "
                >
                  <el-radio
                    v-for="ch in item.options"
                    :label="ch.value || ch.id"
                    :key="ch.value || ch.id"
                  >
                    {{ ch.text || ch.name }}
                  </el-radio>
                </el-radio-group>
              </template>
              <template v-if="item && item.inputType === 'checkbox'">
                <el-checkbox-group
                  class="checkBoxGroup"
                  v-model="preForm[item.prop]"
                >
                  <el-checkbox
                    v-for="ch in item.options"
                    :key="ch.value || ch.id"
                    :label="ch.text || ch.name"
                    :disabled="
                      item.disabled !== undefined || item.disabled !== null
                        ? item.disabled
                        : false
                    "
                  >
                  </el-checkbox>
                </el-checkbox-group>
              </template>
              <template v-if="item && item.inputType === 'editor'">
                <quill-editor
                  ref="myQuillEditor"
                  v-model="preForm[item.prop]"
                  class="myQuillEditor"
                  :options="editorOption"
                  @focus="onEditorFocus($event)"
                  @blur="onEditorBlur($event)"
                  @change="onEditorChange($event)"
                />
              </template>
              <template v-if="item && item.inputType === 'selectTree'">
                <treeselect
                  :style="{ maxWidth: item.width ? item.width : '330px' }"
                  :multiple="item.multiple || false"
                  :options="item.options"
                  :disable-branch-nodes="item.disableBranch || false"
                  :normalizer="
                    node => {
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
                    item.placeholder ? item.placeholder : `请选择${item.label}`
                  "
                  :valueFormat="item.value || id"
                  v-model="preForm[item.prop]"
                />
              </template>
              <template v-if="item && item.inputType === 'custom'">
                <slot :name="item.prop"></slot>
              </template>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="handle-footer" v-if="isEdit && haveFoot">
      <el-button class="reset-btn" @click="$_resetForm"> 取消 </el-button>
      <el-button
        class="submit-btn"
        type="primary"
        :disabled="$_loading"
        @click="submitForm"
      >
        确定
      </el-button>
    </div>
  </div>
</template>

<script>
import baseInfo from "./base";
import treeselect from "@riophae/vue-treeselect";
export default {
  data() {
    return {
      unChange: true,
      preForm: JSON.parse(JSON.stringify(this.form)),
      preFormItems: [],
      preRules: {},
      tempPreForm: {}
    };
  },
  components: {
    baseInfo,
    treeselect
  },
  props: {
    form: {
      type: Object,
      default() {
        return {};
      }
    },
    formItems: {
      type: Array,
      default() {
        return [];
      }
    },
    isEdit: {
      type: Boolean,
      default() {
        return false;
      }
    },
    rules: {
      type: Object,
      default() {
        return {};
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    submit: Function,
    labelWidth: {
      type: [Number, String],
      default: "120px"
    },
    haveFoot: {
      type: Boolean,
      default: false
    },
    midway: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    form: {
      deep: true,
      handler: function(nowVal, oldVal) {
        const changeForm = this.midway
          ? { ...this.preForm, ...nowVal }
          : nowVal;
        this.preForm = JSON.parse(JSON.stringify(changeForm));
      }
    },
    layout(val) {
      this.$set(this.layout, val);
    },
    formItems: {
      deep: true,
      handler: function(nowVal, oldVal) {
        if (nowVal !== this.preFormItems) {
          this.formItems = nowVal;
          this.preFormItems = nowVal;
        }
        if (nowVal.length !== this.preFormItems.length) {
          this.setRules(nowVal);
        }
      }
    },
    preForm: {
      deep: true,
      immediate: true,
      handler: function(nowVal, oldVal) {
        this.preForm = nowVal;
        this.$emit("change", nowVal);
      }
    }
  },
  computed: {},
  methods: {
    submitForm() {
      this.$refs.preForm.validate(valid => {
        if (valid) {
          var $this = this;
          this.$emit("submit", this.preForm);
        } else {
          this.$notify.error({
            title: "失败",
            message: "请填写完整必填数据!!!",
            position: "bottom-right"
          });
          return false;
        }
      });
    },
    cancelForm() {
      this.$refs.preForm.resetFields();
    },
    resetForm() {
      this.$refs.preForm.resetFields();
    },
    onChange(val, fun) {
      if (fun) {
        if (typeof fun == "function") {
          fun(val);
        } else {
          return;
        }
      }
    },
    change(e) {
      this.$forceUpdate();
    },
    async getValue(name = false, canValid = true) {
      // debugger
      if (canValid) {
        let validValue = await this.$refs["preForm"].validate().then(valid => {
          if (valid) {
            return this.preForm;
          } else {
            this.$notify.error({
              title: "失败",
              message: "请填写完整必填数据!!!",
              position: "bottom-right"
            });
            return false;
          }
        });
        return validValue;
      } else {
        if (name) {
          return this.preForm[name];
        }
        return this.preForm;
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
    setRules(formItems) {
      let preRules = {};
      formItems.map(item => {
        if (this.rules[item.prop]) {
          preRules[item.prop] = this.rules[item.prop];
        } else if (item.required && !item.hide) {
          const message = item.inputType === "select" ? "请选择" : "请输入";
          const trigger = item.inputType === "select" ? "change" : "blur";
          preRules[item.prop] = {
            required: true,
            message: `${message}${item.label}`,
            trigger
          };
        }
      });
      this.preRules = preRules;
    },
    handleSelectChange(val, props) {
      console.log(val, props);
      this.preForm[props] = val;
      this.$emit("select", this.preForm);
    }
  },
  mounted() {
    // var $this = this;
  },
  created() {
    if (!this.disabled) {
      this.setRules(this.formItems);
    }
  }
};
</script>

<style lang="less" scoped>
#adminFormItem {
  // .comp-wrapper-header{
  //   padding: 0;
  // }
  .el-form-item {
    min-height: 30px !important; /*no*/
    height: auto;
    margin-bottom: 12px; /*no*/
    align-items: center;
    &.noBottom {
      margin-bottom: 0;
    }
    &.is-error {
      margin-bottom: 20px; /*no*/
    }
    label {
      font-size: 12px; /*no*/
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 30px; /*no*/
      // color:rgba(230,236,255,1);
    }
    input {
      // min-width: 200px;/*no*/
      font-size: 12px; /*no*/
      // font-family:PingFangSC-Regular,PingFang SC;
      font-weight: 400;
      // color:rgba(230,236,255,1);
      // background:#fff;
      border-radius: 4px; /*no*/
      // border:1px solid rgba(98,117,191,1);
      color: #555;
    }
    textarea {
      font-size: 12px; /*no*/
      font-weight: 400;
      min-width: 200px; /*no*/
      // max-width: 350px;/*no*/
    }
    .filter-item-input {
      width: 250px; /*no*/
    }
    .el-form-item__content {
      min-height: 30px; /*no*/
      height: auto;
      line-height: 30px; /*no*/
    }
    .el-cascader {
      width: 100%;
      line-height: 0 !important;
    }
    .el-input {
      width: 100% !important;
      input {
        height: 30px !important; /*no*/
      }
      &.is-disabled {
        input {
          color: #606266;
        }
      }
    }
    .el-range-editor {
      min-width: 200px; /*no*/
      max-width: 350px; /*no*/
      input {
        min-width: auto;
      }
      .el-range-separator {
        width: auto;
      }
    }
  }
  .el-row {
    .el-col {
      &:last-child {
        .el-form-item {
          margin-bottom: 0;
        }
      }
    }
  }
  .el-input-number:not(.el-slider__input) {
    width: 100%;
    display: block;
    line-height: 30px; /*no*/
    height: 30px; /*no*/
    > span {
      height: 15px; /*no*/
      display: flex;
      align-items: center;
      justify-content: center;
      &.el-input-number__increase {
        top: 2px; /*no*/
      }
      &.nput-number__decrease {
        bottom: 0px; /*no*/
      }
    }
    .el-input {
      input {
        text-align: left;
      }
    }
  }
  .el-slider {
    .el-slider__runway {
      width: calc(100% - 10px); /*no*/
      margin: 12px 0; /*no*/
      margin-left: 10px; /*no*/
      .el-slider__button-wrapper {
        height: 30px; /*no*/
        width: 30px; /*no*/
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .radioGroup {
    width: 100%;
    text-align: left;
    label {
      margin-right: 30px;
      margin-left: 0;
    }
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
.handle-footer {
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: 0px -3px 4px 0px rgba(222, 222, 222, 0.5);
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  z-index: 1;
  button {
    width: 88px;
    height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
  .reset-btn {
    border: 1px solid rgba(37, 115, 241, 1);
    margin-right: 20px;
  }
  .submit-btn {
    background: rgba(37, 115, 241, 1);
  }
}
</style>
