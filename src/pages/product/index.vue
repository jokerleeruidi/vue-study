<template>
    <div class="product">
      <!-- 导航栏 -->
     <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/product'}">产品管理</el-breadcrumb-item>
     </el-breadcrumb>
     <el-card class="product-card">
      <div slot="header" class="clearfix">
        <span>产品列表</span>
      </div>
      <!-- 搜索部分 -->
      <div class="product_search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item >
            <el-input v-model="formInline.user" placeholder="请输入产品名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 产品列表 -->
      <div class="product_list">
        <div class="add_product">
          <el-button class="new_build" type="button" @click="dialogVisible = true">新建</el-button>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="产品名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="code"
            label="产品编号">
          </el-table-column>
          <el-table-column
            prop="attr"
            label="规格属性">
          </el-table-column>
          <el-table-column
            prop="category"
            label="产品类别(广播字"
            width="180">
          </el-table-column>
          <el-table-column
            prop="version"
            label="型号/版本(广播字）"
            width="180">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
          </el-table-column>
          <el-table-column
            label="操作">
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
      <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
      <el-dialog
        title="新增产品"
        :visible.sync="dialogVisible">
        <el-form class="put_form" ref="form" :model="form" label-width="120px">
          <el-form-item label="产品名称：">
            <el-input placeholder="安润普" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="产品编号：">
            <el-input placeholder="请输入" v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="产品类别(广播字)：">
            <el-input placeholder="安润普" v-model="form.category"></el-input>
          </el-form-item>
          <el-form-item label="型号/版本(广播字)：">
            <el-input placeholder="安润普" v-model="form.version"></el-input>
          </el-form-item>
          <el-form-item label="规格属性：">
            <el-input class="build" placeholder="+新建" v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
          <el-button class="ture" type="primary" @click="dialogVisible = false">确 定</el-button>
      </el-dialog>
    </el-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        formInline: {
          user: '',
          region: ''
        },
         tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClose(done) {
        // this.$confirm('确认关闭？')
        //   .then(_ => {
            done();
          // })
          // .catch(_ => {});
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style lang="scss">
  .product {
    .product_search {
      // width:1100px;
      height:50px;
      background:rgba(248,248,248,1);
      .demo-form-inline {
      float: right;
      }
      .el-input .el-input__inner {
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
    .product_list {
       position: relative;
      .add_product {
        margin-top: 10px;
        height:26px;
      }
      .new_build {
        color: #FFFFFF;
        right: 10px;
        background:rgba(93,156,236,1);
        border-radius:2px;
        position: absolute;
        width:93px;
        height:26px;
        line-height: 0;
      }
    }
    .ture {
      float: right;
      margin-right: 67px;
      width:93px;
      height:26px;
      background:rgba(39,173,84,1);
      border-radius:2px;
      line-height: 0;
    }
    .el-dialog__title {
      width:59px;
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(125,135,142,1);
      line-height:20px;
    }
    .put_form {
     .el-form-item {
       margin-left: 40px;
      // background-color: red;
     }
     .el-input .el-input__inner {
      //  line-height: 100px;
       width:418px;
       height:26px;
       background:rgba(248,248,248,1);
       border-radius:2px;
       border:1px solid rgba(223,228,234,1);
     }
    }
  }
</style>

