<template>
  <div class="login-wrapper">
    <div class="login-form">
      <h2 class="login-title">积云会员管理系统</h2>
    <el-form ref="form" :model="form" label-width="50px">
  <el-form-item label="账号">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
    <el-form-item label="密码">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">登录</el-button>
  </el-form-item>
</el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.login-wrapper {
  height: 100%;
  background: url("http://vue.mengxuegu.com/img/login.b665435f.jpg") no-repeat;
  width: 100%;
  overflow: hidden;
}
.login-form {
  width: 350px;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 160px auto;
  border-radius: 20px;
  padding: 28px;
}
.login-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
}
.el-form {
  margin-top: 20px;
}
</style>

