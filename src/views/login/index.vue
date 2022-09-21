<template>
  <div class="login-wrapper">
    <div class="login-form">
      <div></div>
      <h2 class="login-title">积云会员管理系统</h2>
      <el-form :rules="rules" ref="form" :model="loginForm" label-width="60px">
        <el-form-item label="账号" prop="username">
          <el-input v-model.trim="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {login} from '../../api/user'
  export default {
    data() {
      return {
        loginForm: {
          username: "",
          password: ""
        },
        rules: {
          username: [
            { required: true, message: '账号不能为空', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      handleLoginSubmit() {
        this.$refs['form'].validate(valid=>{
          if(!valid) return
          this.handleLogin()
        })
      },
      async handleLogin(){
        try{
          const response=await login(this.loginForm)
          console.log('response=>',  response);
          console.log("token=>",response.token);
        }catch(e){
          console.log(e.message);
        }
      }
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