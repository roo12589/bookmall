<template>
  <div class="bg">
    <div class="login">
      <h2>二手书交易平台</h2>
      <el-form
        ref="loginInfo"
        :model="loginInfo"
        :rules="rules"
        class="login-form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginInfo.username"
            placeholder="请输入学号"
            name="username"
            ref="username"
            tabindex="1"
          ></el-input
        ></el-form-item>
        <el-tooltip
          v-model="capsTooltip"
          content="Caps lock is On"
          placement="right"
          manual
        >
          <el-form-item prop="password"
            ><el-input
              placeholder="请输入密码"
              v-model="loginInfo.password"
              name="password"
              ref="password"
              tabindex="2"
              show-password
            ></el-input></el-form-item
        ></el-tooltip>
        <el-button id="loginBtn" type="primary" @click="handleLogin()"
          >&nbsp;&nbsp;登录&nbsp;&nbsp;</el-button
        ><br />
        <div class="btnBox">
          <el-link type="info" @click="toRegister">立即注册</el-link
          ><el-link type="info" @click="toResetPwd">忘记密码</el-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { loginApi } from "../http/api";
export default {
  name: "Login",
  data() {
    const loginInfo = {
      username: "test123",
      password: "123123",
    };
    return {
      loginInfo,
      rules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "请输入用户名",
          },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
          },
        ],
      },
      //？
      capsTooltip: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  methods: {
    toRegister() {
      router.push({ path: "/register" });
    },
    toResetPwd() {
      router.push({ path: "/resetPwd" });
    },
    //?
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    handleLogin() {
      let loginResult = loginApi();
      console.log(loginResult);
      /* this.$refs.loginInfo.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginInfo)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/dashboard",
                query: this.otherQuery,
              });
              this.loading = false;
              // ElMessage.success("登录成功");
              this.$message({ message: "登录成功", type: "success" });
              // 此处admin应替换为userInfo.role
              localStorage.setItem("ms_username", "admin");
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!! ==login");
          return false;
        }
      }); */
      localStorage.setItem("token", "admin");
      this.$router.push("/home");
      this.$message({ message: "登录成功", type: "success" });
      // 此处admin应替换为userInfo.role
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
  },
};
</script>

<style lang='scss' scoped>
.login {
  width: 350px;
  margin: 0 auto 0;
  padding: 15px 20px;
  border: 1px solid rgb(228, 216, 216);
  border-radius: 5px;
  position: relative;
  // top: 30%;
  h2 {
    color: #0ca1d9;
  }
  input {
    margin: 5px 0;
  }
  i {
    margin-top: 2.5px;
  }
  a {
    text-decoration: none;
    color: #0ca1d9;
  }
}
.bg {
  // position: absolute;
  // height: calc(100vh-100px);
  // width: calc(100vw-100px);
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  padding-top: 200px;
  box-sizing: border-box;
  background: url("https://z3.ax1x.com/2021/07/28/WT0nMj.jpg") no-repeat;
  background-size: 100vw 100vh;
}
// 修改原html才有效
// body{
//   margin: 0;
//   padding: 0;
// }
#loginBtn {
  width: 98%;
}
.btnBox {
  padding: 5px 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>