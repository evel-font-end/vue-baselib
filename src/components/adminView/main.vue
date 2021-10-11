<template>
  <div id="adminContent" class="h1">
    <div
      class="cont-left"
      :style="{ width: openMenu ? '55px' : '230px' }"
    >
      <div :class="`indexMenu ${tageActive === 'indexPage' ? 'active' : ''}`" @click="goIndex">
        <i class="indexIcon">
          <!-- <img src="~common/images/indexIcon.png" alt="" /> -->
        </i>
        <span>首页</span>
      </div>
      <adminSideMenu
        :openMenu="openMenu"
        :default-active="tageActive"
        :menuData="menuData"
        @on-select="openMenuSelect"
      ></adminSideMenu>
      <div class="sideBg"></div>
    </div>

    <header id="topHeader">
      <span class="main-header-title" @click="goIndex">
        <!-- <span class="system_logo"></span> -->
        智慧校园照明管理系统
      </span>
      <flex inline align="center" justify="flex-end">
        <span class="h-handler flexRow flexCenter dropdown-link">
          <span class="avatar">
            <!-- <img src="~common/images/default_user.png" alt=""> -->
          </span>
          管理员
          <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
        </span>
        <!-- <el-dropdown @command="handleCommand">
          <template v-slot:dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="modify">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown> -->
        <div class="h-handler exit">
          <el-button type="text" class="quit-button" @click="_outUserLogin">
            <i class="iconfont icon-tuichu"></i>
            退出</el-button
          >
        </div>
      </flex>
    </header>
    <div
      class="cont-right pos-a"
      :style="{ left: openMenu ? '55px' : '265px' }"
    >
      <div class="breadcumb-wrap">
        <div class="flexCenter icon-bg"><i class="iconfont icon-dingwei" /></div>
        <div class="breadcumb-item">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="item in breadcrumb"
              :to="item.path"
              :key="item.name"
            >
              {{ item.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="makeInfoString">照亮知识前进的路</div>
      <!-- <tabs
        @close-type="closeType"
        :menuTagsData="menuTagsData"
        @delTage="delTage"
        @on-select="_tageActive"
        :defaultTage="tageActive"
      ></tabs> -->
      <!-- <div class="pageTitle">
        <span
          :style="{color:(currentRouteName==item.name?'#065BDC':'#606060')}"
          v-for="(item, index) in currentTitleList"
          :key="index"
        >
          <span>{{item.title}}</span>
          <span style="padding:0 5px" v-if="index!=currentTitleList.length-1">/</span>
        </span>
      </div> -->
      <div
        class="back"
        :style="{
          display:
            this.$route.matched[this.$route.matched.length - 1].name === 'edit'
              ? 'block'
              : 'none',
        }"
      >
        <el-button type="primary" class="quit-button" @click="goBack">
          <i class="el-icon-back"></i>
          返回
        </el-button>
      </div>
      <!-- <router-view></router-view> -->
      <keep-alive :include="keepAliveName" :max="8">
        <router-view
          ref="keepAlive229"
        >
        </router-view>
      </keep-alive>
      <!-- <router-view v-slot="{ Component }">
        <transition name="router-fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view> -->
    </div>
    <!-- 修改密码弹框 -->
    <el-dialog
      title="修改密码"
      v-model="modifyShow"
      width="30%"
      @open="onOpen"
      @close="canceledit"
    >
      <div v-if="modifyShow">
        <FormItem
          ref="modifyPassWord"
          :formItems="pw.formItems"
          :rules="pw.formRules"
          :disabled="pw.inputDisabled"
          :isEdit="pw.isEdit"
          :form="pw.form"
          :midway="pw.midway"
          @change="handleChangeFormItem"
          @submit="checkPass"
          :labelWidth="'120px'"
        ></FormItem>
      </div>
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button @click="modifyShow = false">取 消</el-button>
          <el-button type="primary" @click="confirmModify">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <div class="loading-bg" v-if="$_loading"></div>
    <div class="loading noselect pos-f" v-if="$_loading">
      <i
        class="iconfont icon-jiazailoading-A mr-5 anim-rotate anim-loop el-anim"
      ></i>
      <span class="f-13">正在加载，请稍后...</span>
    </div>
  </div>
</template>

<script>
import Flex from "@/components/flex/Flex.vue";
// import Tabs from "components/tabs/tabs.vue";
import adminSideMenu from "@/components/adminSideMenu/adminSideMenu.vue";
// import scrollView from "@/components/sideMenu/scrollView.vue";
import Config from "@/config";
import FormItem from "@/components/adminFormItem/index";
// import dialogCont from "components/dialog/index";
import { mapGetters, mapMutations, mapActions } from "vuex";
// import { getPublicKey, updatePassword } from "api/user";
// import { encrypt, decrypt } from "util/jsencrypt";
export default {
  name: "adminContent",
  data() {
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("原密码不能为空"));
      }
      this.pw.form["oldPassword"] = value;
      callback();
    };
    var validatePass2 = (rule, value, callback) => {
      this.pw.form["newPassword"] = value;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.pw.form.confirmPassword !== "") {
          this.$refs.modifyPassWord.$refs.preForm.validateField(
            "confirmPassword"
          );
        }
        callback();
      }
    };
    var checkNewPass = (rule, value, callback) => {
      this.pw.form["confirmPassword"] = value;
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.pw.form.newPassword) {
        console.log(value, this.pw.form);
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      breadcrumb: [],
      orderTotal: 0,
      pw: {
        formItems: [
          {
            label: "用户账户",
            value: "",
            required: false,
            span: 24,
          },
          {
            label: "原密码",
            prop: "oldPassword",
            inputType: "inputPassWord",
            required: true,
            span: 24,
          },
          {
            label: "新密码",
            prop: "newPassword",
            inputType: "inputPassWord",
            required: true,
            span: 24,
          },
          {
            label: "确认密码",
            prop: "confirmPassword",
            inputType: "inputPassWord",
            required: true,
            span: 24,
          },
        ],
        formRules: {
          oldPassword: [
            { required: true, validator: validatePass, trigger: "blur" },
          ],
          newPassword: [
            { required: true, validator: validatePass2, trigger: "blur" },
          ],
          confirmPassword: [
            { required: true, validator: checkNewPass, trigger: "blur" },
          ],
        },
        form: {
          username: "",
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        },
        inputDisabled: false,
        isEdit: false,
        midway: true,
      },
      modifyShow: false,
      dialog: {
        note: false, // 便签
        content: "", // 便签内容
      },
      menuActiveClass: false, // 当前被选中菜单
      menuBdWidth: "0px", // 右侧宽度
      openMenu: false, // logo
      zoom: false, // 是否全屏
      openUserCenter: false, // 个人头像下的菜单栏
      currentRouteName: "", // 当前路由name
      menuParentList: [],
      optionValue: undefined,
      options: [],
      // currentTitleList:[]//当前路由标题列表
    };
  },
  created() {
    this.getDataAllList();
  },
  mounted() {
    this.$nextTick(async () => {});
  },
  watch: {
    $route: {
      handler(val, oldval) {
        this.breadcrumb = this.getBreadcrumb(val.matched);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapMutations([
      "set_menuTags",
      "set_delMenuTage",
      "set_openPage",
      "set_menuTagsList",
      "set_closeAllTab",
      "set_keepAliveRouter",
    ]),
    ...mapActions({
      userLoginOut: "user/userLoginOut",
    }),
    getBreadcrumb(matchedRoutes) {
      let matched = [];
      if (matchedRoutes.length) {
        matched = matchedRoutes.filter(
          (item) =>
            item.meta && item.meta.title && item.meta.breadcrumb !== false
        );
      }
      return matched;
    },
    // 获取通知数据
    getDataAllList() {
      let data = {
        data: {
          orderStatus: "0",
        },
        pageNo: 1, // 查询的分页页码
        pageSize: 10, // 查询的分页页大小, 默认10
        sorting: "",
      };
      // getMyWorkOrderForPage(data).then((res) => {
      //   if (res.code === "200") {
      //     const { data, total } = res.data;
      //     this.orderTotal = total;
      //   }
      // });
    },
    // 页面刷新
    _refreshPage() {
      window.location.reload();
      this.$router.push({
        name: "indexPage",
      });
    },
    // 点击左侧菜单添加tage
    openMenuSelect(list) {
      this.set_openPage(list.name);
      this.set_menuTags(list);
      this.$router.push({
        name: list.name,
      });
    },
    // 关闭当前tage
    /* delTage(name) {
      this.set_delMenuTage(name);
      this.$router.push({
        name: this.openPage,
      });
    }, */
    // 当前选中的tage
    // _tageActive(toName) {
    //   this.set_openPage(toName);
    // },
    // // 个人头像下的菜单栏
    _openUserCenter(flag) {
      this.openUserCenter = flag;
    },
    // 打开侧栏
    _openMenu() {
      this.openMenu = !this.openMenu;
    },
    // 窗口缩放
    _zoom() {
      this.zoom = !this.zoom;
    },
    // 取消修改
    canceledit() {
      this.modifyShow = false;
    },
    // 打开修改密码弹框
    onOpen() {
      this.pw.form["username"] = this.userName;
      this.pw.formItems[0]["value"] = this.userName;
    },
    handleNotify(command) {
      if (command == "order") {
        console.log(11);
        this.$router.push({
          name: "myTask",
        });
      }
    },
    handleCommand(command) {
      console.log(command);
      if (command == "modify") {
        this.modifyShow = true;
      }
    },
    handleChangeFormItem(val) {
      // 确认密码
      // if (val.newPassword && val.confirmPassword) {
      //   val.newPassword == val.confirmPassword
      //     ? (this.pw.same = true)
      //     : (this.pw.same = false);
      // }
    },
    // 确认修改
    async confirmModify() {
      this.$refs["modifyPassWord"].submitForm();
    },
    async _getPublicKey() {
      let res = await getPublicKey({});
      console.log(res);
      if (res.code == "200") {
        return res.data;
      }
    },
    _updatePassword(params) {
      updatePassword(params).then((res) => {
        if (res.code == "200") {
          this.$notify({
            title: "成功",
            message: "密码已修改，请重新登录",
            position: "bottom-right",
            type: "success",
          });
          this._outUserLogin();
        }
      });
    },
    // 最后确认后调接口修改
    /* async checkPass(formData) {
      let publicKey = await this._getPublicKey();
      console.log(formData);
      let params = {
        confirmPassword: encrypt(formData.confirmPassword, publicKey),
        newPassword: encrypt(formData.confirmPassword, publicKey),
        oldPassword: encrypt(formData.oldPassword, publicKey),
        privateKey: publicKey,
      };
      this._updatePassword(params);
    }, */
    // 退出登录
    _outUserLogin() {
      this.userLoginOut()
        .then(() => {
          // Cookies.remove("username");
          // Cookies.remove("password");
          // Cookies.remove("rememberMe");
        })
        .catch((err) => {
          this.$notify.error({
            title: "失败",
            message: err,
            position: "bottom-right",
          });
        });
    },
    // tab当前关闭菜单方式
    /* closeType(type) {
      if (!this.menuTags.length) return;
      switch (type) {
        case "all": // 关闭全部
          this.set_openPage("indexPage");
          // 首页没有打开过缓存则在首页进行关闭操作
          if (this.keepAliveName.some((i) => i == "indexPage")) {
            this.set_menuTagsList([]);
            this.set_keepAliveRouter("indexPage");
          } else {
            this.set_closeAllTab(true);
            // 清空操作放在首页进行 (没有缓存下首页打开有需要时间,会有卡顿情况)
            this.set_menuTagsList([]);
            // this.set_keepAliveRouter('indexPage');
          }

          break;
        case "other": // 关闭其他
          if (
            this.menuTags.length === 1 &&
            this.menuTags[0].name === this.openPage
          ) {
            return;
          }
          for (let i = 0; i < this.menuTags.length; i++) {
            if (this.menuTags[i].name === this.openPage) {
              let a = this.menuTags.slice(i, i + 1);
              this.set_menuTagsList(a);
              return;
            }
          }
          break;
      }

      this.$router.push({
        name: this.openPage,
      });
    }, */
    goBack() {
      this.$router.go(-1);
    },
    goIndex() {
      this.$router.push({
        name: Config.homeName,
      });
    },
    changeMenuParent(item) {
      const children = item.children;
      this.set_menuTagsList([]);
      this.menuData = children;
      this.filtrKey = item.name;
      this.$router.push({
        name: `${children[0].children[0].name}`,
      });
    },
  },
  computed: {
    ...mapGetters([
      "menuList",
      "menuTags",
      "openPage",
      "keepAliveName",
      "common",
    ]),
    // menuParentList () {
    //   const parentList = this.menuList.filter(ls => ls.name.indexOf('admin') > -1);
    //   console.log('parentList', parentList);
    //   return parentList;
    // },
    // filtrKey () {
    //   console.log(this.$route)
    //   const filtrKey = 'admin';
    //   return filtrKey;
    // },
    // 左侧菜单列表
    menuData() {
      console.log("this.menuList", this.menuList);
      return this.menuList;
    },
    // 当前打开的tags路由列表
   /*  menuTagsData() {
      return this.menuTags;
    }, */
    // 当前选中的tage
    tageActive() {
      if (this.openPage === Config.homeName) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.$router.push(
          Config.homeName,
          () => {},
          () => {}
        );
      }
      console.log('this.openPage', this.openPage);
      return this.openPage;
    },
    userName() {
      return this.$store.state.user.username;
    },
    // 菜单标题
    // currentTitleList () {
    //   let currentTitleList = []; // 当前路由标题列表
    //   this.currentRouteName = this.$route.name;
    //   this.$route.matched.map(item => {
    //     currentTitleList.push({
    //       name: item.name,
    //       title: item.meta.title
    //     });
    //   });
    //   return currentTitleList;
    // },
    contentPaddingBottom() {
      const { name: routeName, query } = this.$route;
      if (
        ["landTradeConfig"].includes(routeName) &&
        ["add", "edit"].includes(query.configType)
      ) {
        return "90px";
      }
      return "0";
    },
  },
  components: {
    adminSideMenu,
    Flex,
    FormItem,
  },
};
</script>

<style lang="less">
@import "./main.less";
#adminContent {
  .indexMenu {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;/*no*/
    .indexIcon {
      display: inline-block;
      width: 34px;/*no*/
      height: 34px;/*no*/
      background: linear-gradient(135deg, #418bf7, #31c0eb 98%);
      border-radius: 6px;/*no*/
      box-shadow: 0px 2px 4px 0px rgba(169, 191, 255, 0.5);/*no*/
      padding: 4px;
      margin-right: 10px;/*no*/
      img {
        max-width: 100%;
      }
    }
    span {
      font-size: 16px;/*no*/
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #353535;
      line-height: 22px;/*no*/
    }
    &.active{
      span{
        color:#3F5CC5;
      }
    }
  }
  .appCodeSelects {
    width: 120px; /*no*/
  }
  // position: relative;
  .pageTitle {
    margin: 10px 0px 0px 20px; /*no*/
    padding-bottom: 10px; /*no*/
    border-bottom: 1px solid #dddddd; /*no*/
    font-size: 16px; /*no*/
  }
  .back {
    margin: 10px 0px 10px 20px; /*no*/
  }
  .mainContent {
  }

  .noteBox {
    border: 0;
    width: 100%;
  }

  .transformRotate {
  }
  .icon-tuichu {
    width: 20px; /*no*/
  }

  .dialog-bg {
    z-index: 1000;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .notification {
    position: relative;
    width: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-dropdown-link {
    }
    .circleItem {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 15px;
      // height: 20px;
      height: 15px;
      padding: 5px;
      border-radius: 100px;
      background: #f87a25;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 7%;
      z-index: 99;
    }
    .iconfont {
      color: #fff;
      font-size: 22px;
      cursor: pointer;
    }
  }
  .cont-right {
    .breadcumb-wrap {
      position: absolute;
      top: -42px;/*no*/
      left: 0;
      z-index: 99;
      display: flex;
      align-items: center;
    }
    .makeInfoString{
      position: absolute;
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #e3f0ff;
      line-height: 22px;
      right: 20px;/*no*/
      top: -30px;
    }
    .icon-bg {
      width: 32px;/*no*/
      height: 32px;/*no*/
      background: rgba(0, 46, 104, 0.5);
      border-radius: 8px;
      margin-right: 10px;
      i{
        color: #fff;
        font-size: 16px;/*no*/
      }
    }
    .el-breadcrumb {
      .el-breadcrumb__item {
        .el-breadcrumb__separator {
          color: #fff;
          font-weight: 600;
        }
        .el-breadcrumb__inner {
          color: #fff;
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
        }
        .el-breadcrumb__inner a,
        .el-breadcrumb__inner.is-link {
          color: #fff;
          font-weight: 600;
        }
      }
    }
  }
}
#adminContent.h1 {
  height: 100%;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-badge__content {
  background-color: #f87a25;
}
</style>
