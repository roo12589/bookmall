<template>
  <div class="bg">
    <div class="login">
      <h2>注册</h2>
      <el-form
        :model="registerInfo"
        :rules="rules"
        ref="registerInfo"
        label-width="100px"
        class="demo-ruleForm"
      ><el-form-item label="昵称：" prop="nickname"
          ><el-input
            placeholder="请输入昵称"
            v-model="registerInfo.nickname"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item label="用户名：" prop="username"
          ><el-input
            placeholder="请输入用户名"
            v-model="registerInfo.username"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="registerInfo.password"
            show-password
          ></el-input
        ></el-form-item>
        <el-form-item prop="passwordCheck" label="确认密码："
          ><el-input
            placeholder="请再次输入密码"
            v-model="registerInfo.passwordCheck"
            show-password
          ></el-input
        ></el-form-item>
        
        <el-form-item label="职业：" prop="profession"
          ><el-input
            placeholder="请输入职业"
            v-model="registerInfo.profession"
            
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="tel" label="手机号：">
          <el-input
            placeholder="请输入手机号码"
            v-model="registerInfo.tel"
            class="input-with-select"
          >
            <!-- 国家 -->
            <!-- <el-select
              class="country"
              v-model="registerInfo.country"
              slot="prepend"
              placeholder="请选择国家"
            >
              <el-option label="中国 +86" value="cn"></el-option>
              <el-option label="美国 +1" value="us"></el-option>
              <el-option label="法国 +33" value="fr"></el-option>
              <el-option label="俄罗斯 +7" value="rs"></el-option>
              <el-option label="日本 +81" value="jp"></el-option>
            </el-select> -->
            <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
          </el-input></el-form-item
        >
        <!-- <el-form-item label="自我介绍：" prop="introduce">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 6 }"
            placeholder="介绍一下自己吧？"
            v-model="registerInfo.introduce"
            maxlength="80"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item prop="birthday" label="生日：">
          <el-date-picker
            v-model="registerInfo.birthday"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="身份：" prop="role">
          <el-radio v-model="registerInfo.role" label="1" border size="medium"
            >普通用户</el-radio
          >
          <el-radio v-model="registerInfo.role" label="2" border size="medium"
            >管理员</el-radio
          ></el-form-item
        >
 --><el-form-item label="性别：" prop="sex">
  <el-radio v-model="registerInfo.sex" label="m" border size="medium"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-radio
          >
          <el-radio v-model="registerInfo.sex" label="f" border size="medium"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;女&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-radio
          ></el-form-item
        >
        <div id="btnBox">
          <el-button
            size="medium"
            type="primary"
            @click="handleRegister('registerInfo')"
            >注册</el-button
          >
          <el-button size="medium" @click="resetForm('registerInfo')"
            >重置</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
// import router from "../router";
// import { testApi } from "../http/api";
export default {
  name: "Login",
  data() {
    /* 
    验证两次密码是否一致
    */
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerInfo.passwordCheck !== "") {
          this.$refs.registerInfo.validateField("passwordCheck");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerInfo.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    /* 
    验证手机号码
    */
    var validatePhonenumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请填写手机号码"));
      } else {
        const reg = /^1[3|5|7|8|9][0-9]{9}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号码"));
        }
      }
    };
    return {
      registerInfo: {
        nickname: "",
        username: "",
        password: "",
        passwordCheck: "",
        sex: "m",
        tel: "",
        // country: "cn",
        profession: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 2,
            max: 12,
            message: "长度在 2 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { validator: validatePass, trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
        passwordCheck: [{ validator: validatePass2, trigger: "blur" }],
        tel: [
          {
            required: true,
            // message: "请输入正确的手机号码",
            validator: validatePhonenumber,
            trigger: "blur",
          },
        ],
        // role: [
        //   {
        //     type: "number",
        //     required: true,
        //     message: "请选择身份",
        //     trigger: "change",
        //   },
        // ],

      },
    };
  },
  /*   watch: {
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
  }, */
  methods: {
    handleRegister(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid,this.registerInfo);
        if (valid) {
          // 通过表单验证，执行下一步操作
          // console.log(valid);
          // alert("submit!!");
          this.$message.success("注册成功");
        } else {
          console.error("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang='scss' scoped>
.login {
  width: 450px;
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
  padding-top: 50px;
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
#btnBox {
  padding: 5px 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.country {
  width: 110px;
}
</style>