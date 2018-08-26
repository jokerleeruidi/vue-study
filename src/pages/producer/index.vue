<template>
    <div class="producer">
      <!-- 面包屑 -->
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/producer'}">生产商管理</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 卡片 -->
      <el-card class="box-card">
        <div class="text_item">
          生产商列表
        </div>
        <!-- 搜索部分 -->
        <div class="add_search">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item >
              <el-input  class="search" v-model="formInline.name" placeholder="请输入公司名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSearch">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 对话框 -->
        <el-dialog
          title="新增生产商"
          :visible.sync="dialogVisible">
          <el-form class="dialog_form" ref="form" :model="form" label-width="80px">
            <el-form-item label="公司名称：">
              <el-input placeholder="请输入" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="公司编号：">
              <el-input placeholder="请输入" v-model="form.code"></el-input>
            </el-form-item>
            <el-form-item label="联系人：">
              <el-input placeholder="请输入" v-model="form.contart"></el-input>
            </el-form-item>
            <el-form-item label="联系方式：">
              <el-input placeholder="请输入" v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="传真：">
              <el-input placeholder="请输入字母" v-model="form.fax"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱：">
              <el-input placeholder="请输入" v-model="form. email"></el-input>
            </el-form-item>
            <el-form-item label="网址：">
              <el-input placeholder="请输入" v-model="form. web"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="ture_btn"  type="primary" @click="dialogVisible = false">确 定</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <!-- 生产商列表 -->
        <div class="producer_list">
          <div class="new_btn">
          <el-button  type="button" @click="dialogVisible = true">新建</el-button>
          </div>
          <el-table
            :data="tableData"
           >
            <el-table-column
              prop="id"
              label="序号">
            </el-table-column>
            <el-table-column
              prop="name"
              label="公司名称">
            </el-table-column>
            <el-table-column
              prop="code"
              label="编号">
            </el-table-column>
            <el-table-column
              prop="contart"
              label="联系人">
            </el-table-column>
            <el-table-column
              prop= "phone"
              label="联系方式">
            </el-table-column>
            <el-table-column
              prop="fax"
              label="传真">
            </el-table-column>
            <el-table-column
              prop="email"
              label="电子邮箱">
            </el-table-column>
            <el-table-column
              prop=" web"
              label="网址">
            </el-table-column>
            <el-table-column
              prop=" status"
              label="状态">
            </el-table-column>
            <el-table-column
              label="操作">
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          code: '',
          contart: '',
          phone: '',
          fax: '',
          email: '',
          web: '',
        },
        dialogVisible: false,
        formInline: {
          name: '',
        },
        tableData: [{
            id: "",
            name: "",
            code: "",
            contart: "",
            phone: "",
            fax: "",
            email: "",
            web: "",
            status: "",

          }]
      }
    },
    methods: {
      onSearch() {
        console.log('submit!');
      },
      // handleClose(done) {
      //   this.$confirm()
      //     // .then(_ => {
      //       done();
      //     // })
      //     // .catch(_ => {});
      // }
    }
  }
</script>
<style lang="scss">
.producer{
  .box-card {
    width: 1100px;
    height: 750px;
    .text_item {
      padding:10px;
      width:73px;
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      color:rgba(74,85,93,1);
      line-height:20px;
    }
    .demo-form-inline {
      float: right;
    }
    // .new_producer {
    //   float: right;
    // }
    .add_search {
      width:1100px;
      height:50px;
      background:rgba(248,248,248,1);
      .search.el-input .el-input__inner {
        text-align: center;
        margin-top: 12px;
        width:275px;
        height:26px;
        background:rgba(255,255,255,1);
        border-radius:2px;
        border:1px solid rgba(223,228,234,1);
      }
      .el-button {
        margin-top: 12px;
        width:92px;
        height:26px;
        background:rgba(53,172,94,1);
        border-radius:2px;
        line-height: 0;
      }
    }
  .producer_list {
    position: relative;
    .el-button {
      color: #FFFFFF;
      right: 10px;
      background:rgba(93,156,236,1);
      border-radius:2px;
      position: absolute;
      width:93px;
      height:26px;
      line-height: 0;
    }
    .new_btn {
      margin-top: 10px;
      height:26px;
    }
  }
  .el-dialog {
    min-width: 650px;
    .el-dialog__title {
    font-size: 14px;
  }
    .el-input .el-input__inner {
      width:418px;
      height:26px;
      background:rgba(255,255,255,1);
      border-radius:2px;
      border:1px solid rgba(223,228,234,1);
    }
    .ture_btn {
      margin-right: 85px;
      float: right;
      width:93px;
      height:26px;
      background:rgba(39,173,84,1);
      border-radius:2px;
      line-height: 0px;
    }
    .el-form-item {
      margin-left: 60px;
      margin-bottom: 0;
    }
  }
  }
}
</style>
