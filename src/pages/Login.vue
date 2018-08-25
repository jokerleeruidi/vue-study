<template>
  <!-- 最大的div -->
  <div class="login">
    <!-- 左上角的图片 -->
    <div class="left_img">
      <img class="first_img" src="../assets/img/logocopy@2x.png" alt="">
    </div>
    <!-- 中间登录部分 -->
    <div class="login_form">
      <!-- 登录的图片 -->
      <div class="center_img">
        <!-- <img class="form_img" src="../assets/img/Group 2@2x.png" alt=""> -->
        <span class="form_script">安润普智能硬件检测平台</span>
          <!-- 文字描述部分 -->
          <!-- <div class="form_script">
            安润普智能硬件检测平台
          </div> -->
      </div>
      <!-- 登录输入框部分 -->
      <!-- <div class="loginUser">登录账户 -->
        <el-form ref="form" :model="form">
          <el-form-item>
            登录账户
          </el-form-item>
          <el-form-item >
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="onLogin">登录</el-button>
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
       name: "",
       password: "",
     }
    }
  },
  methods: {
      onLogin() {
        console.log('submit!');
      }
    }
  }
</script>
<style lang="scss">
  .login {
    min-width: 1100px;
    height: 900px;
    background-color: rgb(50, 79, 112);
  }
  .first_img {
    width: 138px;
    height: 24px;
    margin:  30px 0 0 30px;
    float: left;
  }
  .login_form {
    margin: 0 auto;
    width:500px;
    height:560px;
    background:rgba(255,255,255,1);
    box-shadow:0px 7px 13px 0px rgba(55,57,76,1);
    border-radius:8px;
    .center_img {
      background: url(../assets/img/Group.png);
      height:200px;
      text-align: center;
      line-height: 200px;
      .form_script {
        color: #fff;
        font-size: 26px;
      }
    }
    .el-input {
      width:368px;
      height:40px;
      background:rgba(255,255,255,1);
      border-radius:4px;
      border:1px solid rgba(217,217,217,1);
    }
    .el-button {
      width:368px;
      height:40px;
      background:rgba(45,78,117,1);
      border-radius:4px;
    }
    .el-form {
      margin-left: 70px;
    }
    .el-form-item__content {
      font-size: 16px;
    }
  }
  
  
</style>

