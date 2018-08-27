<template>
    <div class="staff">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/staff'}">工号管理</el-breadcrumb-item>
     </el-breadcrumb>
     <el-card class="staff-card">
      <div slot="header" class="clearfix">
        <span>员工列表</span>
      </div>
      <!-- 搜索部分 -->
      <div class="staff_search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item >
            <el-input v-model="formInline.user" placeholder="请输入员工姓名／工号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 员工列表 -->
      <div class="staff_list">
        <div class="add_staff">
          <el-button class="new_build" type="button" @click="dialogVisible = true">新建</el-button>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="员工姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="工号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="code"
            label="手机号码">
          </el-table-column>
          <el-table-column
            prop="attr"
            label="注册时间">
          </el-table-column>
          <el-table-column
            prop="category"
            label="启用登录"
            width="180">
            <template>
              <el-switch
              v-model="value3"
              active-text="开"
              inactive-text="关">
              </el-switch>
            </template>
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
          <el-form-item label="名字:">
            <el-input placeholder="请输入" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="工号:">
            <el-input placeholder="请输入" v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="手机:">
            <el-input placeholder="请输入" v-model="form.category"></el-input>
          </el-form-item>
          <el-form-item label="性别:">
            <el-input placeholder="请选择" v-model="form.version"></el-input>
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
        value3: true,
        dialogVisible: false,
        formInline: {
          user: '',
          region: ''
        },
         tableData: [{}],
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
   .staff {
    .staff_search {
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
    .staff_list {
       position: relative;
       .el-table th>.cell{
        // width:1298px;
        height:42px;
        background:rgba(236,242,249,1);
        // border:1px solid rgba(223,228,234,1);
        line-height: 42px;
       }
      .add_staff {
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
  