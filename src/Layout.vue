<template>
  <el-container>
    <!-- 头部 -->
  <el-header style="height:48px">
    <div class="header_left">
      <img class="left_img" src="@/assets/img/logocopy@2x.png" >
      <span>|</span>
      <span class="header_name">安润智能硬件检测平台</span>
    </div>
  </el-header>
  <el-container>
    <!-- 左边导航栏 -->
    <el-aside width="222px">
      <div class="aside">
        <el-menu
          router
          :default-active="fullPath"
          background-color="#0f283B"
          active-background-color="red"
          text-color="#9BA7B0"
          active-text-color="#E8F5FF"
          class="el-menu-vertical-demo">
          <el-menu-item v-for="item in options" :index="item.link" :key="item.link">
            <i :class="item.icon"></i>
            <span>{{item.label}}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <!-- 主题内容 -->
    <el-main> <router-view></router-view></el-main>
  </el-container>
</el-container>
</template>
<script>
 export default {
   data () {
     return {
        fullPath: '/',
        options: [
          {
            label: '首页',
            // icon: 'iconfont el-pos-icon-home',
            index: '0',
            link: '/home'
          },
          {
            label: '编号管理',
            // icon: 'iconfont el-pos-icon-setting',
            index: '1',
            link: '/number'
          },
          {
            label: '生产商管理',
            // icon: 'iconfont el-pos-icon-tongxunlu',
            index: '2',
            link: '/producer'
          },
          {
            label: '产品管理',
          //   icon: 'iconfont el-pos-icon-fenleihuaban',
            index: '3',
            link: '/product'
          },
          {
            label: '工号管理',
            // icon: 'iconfont el-pos-icon-card',
            index: '4',
            link: '/staff'
          }]
    }
   },
   mounted () {
     this.fullPath =this.$route.fullPath
   }
    // methods: {
    //   handleOpen(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
    // }
  }
</script>
<style lang="scss">
 .el-header {
    min-width:1100px;
    height:48px;
    background:rgba(6,24,38,1);
    color: #ffffff;
    .header_left {
      margin-top: 15px;
    }
    .left_img {
      vertical-align:middle;
      width:107px;
      height:20px;
    }
    .header_name {
      vertical-align:middle;
  }
 }
  .el-aside {
    width:222px;
    height:855px;
    background:rgba(15,40,59,1);
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .el-container {
    width: 100%;
    height: 100%;
    min-height: 900px;
  }
</style>


