<template>
    <div class="new_producer">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/producer'}">生产商管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="box-card">
        <div class="text_item">
          生产商列表
        </div>
        <div class="add_search">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item >
              <el-input v-model="formInline.user" placeholder="请输入公司名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSearch">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-button type="button" @click="dialogVisible = true">新建</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        <div>
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
              label="公司名称"
              width="180">
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
        dialogVisible: false,
        formInline: {
          user: '',
          region: ''
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
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
<style lang="scss">
  .box-card {
    width: 1200px;
    .text_item {
      width:73px;
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      color:rgba(74,85,93,1);
      line-height:20px;
    }
    .add_search {
      width:1200px;
      height:50px;
      background:rgba(248,248,248,1);
    }
  }
</style>
