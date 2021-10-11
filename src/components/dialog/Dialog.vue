<template>
  <div>
    <el-dialog
      :close-on-click-modal="closeOnClickModal"
      :append-to-body="appendToBody"
      v-model="obj.visible"
      :width="obj.width"
      :title="obj.title"
      :center="obj.titleCenter"
      @close="onClose"
      @open="onOpen"
      :custom-class="`dialogCompent ${customClass}`"
    >
      <slot />
      <template #footer>
        <div class="footerMain" v-if="obj.bottomShow">
          <slot name="footer" />
          <div class="flexRow flexCenter footerBtnList">
            <el-button v-if="obj.cancelShow" title="关闭" @click="onCancel">
              取消
            </el-button>
            <el-button
              v-if="obj.confirmShow"
              type="primary"
              title="确定"
              @click="onConfirm"
            >
              保存
            </el-button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { watch, reactive, computed, toRefs } from "vue";

interface Props {
  visible: boolean,
  appendToBody: boolean,
  titleCenter: boolean,
  width?: string,
  title?: string,
  bottomShow?: boolean,
  confirmShow?: boolean,
  cancelShow?: boolean,
  footerAlign?: 'left' | 'center' | 'right',
  closeOnClickModal?: boolean,
  customClass?: string
}
export default {
  components: {
  },
  props: {
    /** 弹窗显示 */
    visible: {
      type: Boolean,
      default: false,
    },
    /** Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true */
    appendToBody: {
      type: Boolean,
      default: false,
    },
    /** 标题是否居中显示 */
    titleCenter: {
      type: Boolean,
      default: true,
    },
    /** 弹窗宽度 */
    width: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "提示",
    },
    /** 底部整块按钮是否显示 */
    bottomShow: {
      type: Boolean,
      default: true,
    },
    /** 确定按钮是否显示 */
    confirmShow: {
      type: Boolean,
      default: true,
    },
    /** 取消钮是否显示 */
    cancelShow: {
      type: Boolean,
      default: true,
    },
    /** slot footer 对齐方式 */
    footerAlign: {
      type: String,
      default: "center",
    },
    /** 是否可以通过点击 modal 关闭 Dialog */
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  emits: ['on-confirm', 'on-cancel', 'on-open', 'update:visible'],
  setup(props: any, context: any) {
    const { footerAlign, width, title, titleCenter, bottomShow, visible, customClass, confirmShow, cancelShow } = toRefs(props)
    let obj = reactive({
      footerAlign,
      width,
      title,
      titleCenter,
      bottomShow,
      visible,
      customClass,
      cancelShow,
      confirmShow
    })
    const dialogData = reactive({ dialogVisible: false })
    watch(
      () => dialogData.dialogVisible,
      (data, prevData) => {
        emitUpdateVisible(data);
      }
    )
    const footerAlignJustify = computed(() => {
      if (!footerAlign) return "center";
      const ALIGN: any = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
      };
      return ALIGN[(footerAlign || 'center') as any];
    });
    watch(visible, (newValue) => {
      dialogData.dialogVisible = !!newValue;
    })
    /** 点击确定回调函数 */
    const onConfirm = () => {
      context.emit('on-confirm');
    };
    /** 点击取消回调函数 */
    const onCancel = () => {
      dialogData.dialogVisible = false;
      context.emit("on-cancel");
    };
    /** 窗口关闭回调函数 */
    const onClose = () => {
      context.emit('on-cancel');
    };
    /** 窗口打开回调函数 */
    const onOpen = () => {
      context.emit('on-open');
    };
    const emitUpdateVisible = (val: any) => {
      context.emit('update:visible', val);
    };
    return {
      obj,
      ...dialogData,
      footerAlignJustify,
      onConfirm,
      onCancel,
      onClose,
      onOpen,
      emitUpdateVisible
    }
  }
};
</script>
<style lang="less">
.dialogCompent{
  .el-dialog__header{
    padding:17px 0 17px 88px;/*no*/
    background: url('./images/img1.png') #325cd5 no-repeat left bottom;
    background-size: contain;
    text-align: left;
    .el-dialog__title{
      font-size: 16px;/*no*/
      font-family: PingFang SC, PingFang SC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #ffffff;
    }
    .el-dialog__headerbtn i{
      color: #fff;
      font-size: 16px;/*no*/
    }
  }
  .el-dialog__body{
    padding: 20px !important;/*no*/
  }
  .footerMain{
    padding: 14px 0 20px 0;/*no*/
  }
  .el-dialog__footer{
    padding: 0;
    border-top: 1px solid #DFDFDF;/*no*/
    .footerBtnList {
      .el-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;/*no*/
        height: 36px;/*no*/
        background: #ffffff;
        border: 1px solid #3f5cc5;/*no*/
        border-radius: 2px;/*no*/
        font-size: 14px;/*no*/
        font-family: PingFangSC-Semibold;
        text-align: left;
        color: #3f5cc5;
        margin-right: 15px;/*no*/
        &.el-button--primary{
          color: #fff;
          background: #3f5cc5;
        }
      }
    }
  }
}
</style>
