<template>
  <div id="login">
    <div class="flexCloumn flexCenter content pos-a">
      <div class="platform-logo">
        <h4>智慧校园照明管理系统</h4>
      </div>
      <div class="login-contaienr">
        <div class="login-left">
          <div class="l-t"></div>
          <p>照亮知识前进的路</p>
          <div class="l-b"></div>
          <!-- <img src="./images/l_t.png" alt="" /> -->
          <!-- <img src="./images/l_b.png" alt="" /> -->
        </div>
        <div class="cont-login">
          <p><span>登录</span></p>
          <form class="login-form">
            <label>账号</label>
            <div class="item">
              <el-input
                placeholder="请输入账号"
                autocomplete="new-password"
                prefix-icon="iconfont icon-xingzhuang1"
                v-model="form.username"
                clearable
              ></el-input>
            </div>
            <label>密码</label>
            <div class="item">
              <el-input
                type="password"
                name="password"
                placeholder="密码"
                autocomplete="new-password"
                prefix-icon="iconfont icon-mimasuo"
                v-model="form.password"
                @keyup.enter.native="loginTo"
                clearable
              ></el-input>
            </div>
            <!-- <el-checkbox v-model="form.rememberMe">记住密码</el-checkbox> -->
            <el-button
              :disabled="butDisabled"
              @click="loginTo"
              :class="{ butDisabled: butDisabled }"
              :loading="butDisabled"
              class="form-but"
            >
              <span v-if="butDisabled">登录中...</span>
              <span v-else>登&nbsp;&nbsp;录</span>
            </el-button>
          </form>
        </div>
      </div>
    </div>
    <!-- loading -->
    <div class="loading-bg" v-if="butDisabled"></div>
    <div class="loading noselect pos-f" v-if="butDisabled">
      <i
        class="iconfont icon-jiazailoading-A mr-5 anim-rotate anim-loop el-anim"
      ></i>
      <span class="f-13">登录中，请稍后...</span>
    </div>
    <div class="ft f-12 cont-w tx-center mt-20 mb-50" v-if="false">
      Copyright ©1999-2019 ChinaUnicom All Rights
      Reserved.中国联合网络通信有限公司广东省分公司
    </div>
  </div>
</template>

<script>
import store from "@/store";
import Cookies from "js-cookie";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { getLocal } from "util/tool";
import { encrypt } from "util/jsencrypt";
import Config, { baseURL } from "@/config";
import { getProjectByUser } from "api/user";
export default {
  name: "login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showBg2: false,
      butDisabled: false, // 登录按钮状态
    };
  },
  computed: {
    // ...mapGetters(["common"]),
  },
  methods: {
    ...mapActions({
      userLoginTo: "user/userLoginTo",
      getUserRoleRouter: "getUserRoleRouter",
    }),
    ...mapMutations({
      setUserInfo: "user/setUserInfo",
      set_dynamicMenuList: "set_dynamicMenuList",
    }),
    // 登录
    loginTo() {
      if (this.form && this.form.username && this.form.password) {
        this.butDisabled = true;
        console.log('this.form1', this.form);

        const parames = {
          ...this.form,
          captcha: '1234',
          password: encrypt(this.form.password)
        };
        if (parames.password.length < 20) {
          this.$message.error('登陆失败，请稍后重试...');
          return;
        }
        this.userLoginTo({ ...parames })
          .then((resData) => {
                console.log('resData1', resData);
                // 获取rolecode传进去
                this.getUserRoleRouter(resData.username).then((res) => {
                  this.setUserInfo({
                    username: resData.realName,
                    user: resData.modifyUser,
                  });
                  this.$router.push({
                    path: "/",
                  });
                });
            // getProjectByUser().then((res) => {
            //   if (res.code === "200") {
            //     let { data } = res;
            //     data[0] && data[0].code
            //       ? (data = data)
            //       : data.push({ relationName: "", code: "" });
            //     store.commit("set_appCodes", {
            //       appCodes: data,
            //       appCode: data[0].code,
            //     });
            //     console.log('resData', resData);
            //     // 获取rolecode传进去
            //     this.getUserRoleRouter(resData.username).then((res) => {
            //       this.setUserInfo({
            //         username: resData.realName,
            //         user: resData.modifyUser,
            //       });
            //       this.$router.push({
            //         path: "/",
            //       });
            //     });
            //   }
            // });
          })
          .catch((err) => {
            this.butDisabled = false;
          });
      } else {
        this.$message.error("请填写您的登录账号 / 密码");
        this.butDisabled = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
// 重置
.login-form {
  .item {
  }

  .form-but,
  .form-but:hover,
  .form-but:active,
  .form-but&.is-disabled {
    margin-top: 30px;
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    text-align: center;
    color: #ffffff;
    background: #365ccf;
    box-shadow: 0px 3px 6px 0px rgba(54, 92, 207, 0.3);
  }

  .butDisabled,
  .butDisabled:hover {
    background-color: #365CCF;
  }
}

/* 谷歌浏览器记住密码 默认样式修改 begin */
/* input:focus:-webkit-autofill,
input:-webkit-autofill {
  -webkit-text-fill-color: #fff !important;
  -webkit-box-shadow: 0 0 0px 1000px rgba(23, 97, 171, 0) inset !important;
  transition: background-color 500000s ease-in-out 50000s;
} */

/* .lineComponent {
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  // animation: lineing 1s linear infinite;
  &.line1 {
    width: 32%;
    // height: 19px;
    overflow: hidden;
    top: 32%;
    transform: translateX(-112%);
    // animation: lineing1 1s linear infinite;
  }
  &.line2 {
    width: 32%;
    overflow: hidden;
    top: 32%;
    left: 54%;
    transform: rotateY(180deg);
    // animation: lineing1 1s linear infinite;
  }
  &.line3 {
    height: 50%;
    width: 10%;
    overflow: hidden;
    top: 30%;
    transform: translateX(-153%);
    // animation: lineing2 1s linear infinite;
  }
  &.line5 {
    height: 40%;
    width: 12%;
    overflow: hidden;
    top: 38%;
    transform: rotateX(180deg) translateX(-290%);
    // animation: lineing3 1s linear infinite;
  }
  &.line4 {
    height: 50%;
    width: 10%;
    overflow: hidden;
    top: 30%;
    left: 55%;
    transform: rotateY(180deg);
    // animation: lineing2 1s linear infinite;
  }
  &.line7 {
    height: 40%;
    width: 12%;
    overflow: hidden;
    top: 37%;
    left: 72%;
    transform: rotate(180deg);
    // animation: lineing3 1s linear infinite;
  }
} */
/* @keyframes lineing1 {
  0% {
    width: 0%;
  }
  100% {
    width: 32%;
  }
}
@keyframes lineing2 {
  0% {
    width: 0%;
  }
  100% {
    width: 10%;
  }
}
@keyframes lineing2 {
  0% {
    width: 0%;
  }
  100% {
    width: 12%;
  }
} */
/* 谷歌浏览器记住密码 默认样式修改 end */
</style>

<style lang="less" scoped>
@import "./login.less";
</style>
