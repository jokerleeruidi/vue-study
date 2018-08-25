<template>
  <!-- <div class="new_number"> -->
    <!-- 面包屑 -->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/number'}">编码管理</el-breadcrumb-item>
    </el-breadcrumb>
      <!-- <el-card class="box-card" height='100%'>
        <div class="text_item">
          批次号列表
        </div>
        <div class="number_search">
          <el-form class='new_form' ref="form" :model="form" label-width="120px">
            <el-form-item label="集成商／生产商：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
              <el-form-item>
                <el-input v-model="form.name"></el-input>
            </el-form-item>
              <el-form-item>
                <el-button type="primary">主要按钮</el-button>
            </el-form-item>
          </el-form>
        </div> -->
        <!-- <div>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div> -->
      <!-- </el-card>
  </div> -->
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
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
        }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style lang="scss">
//  .box-card {
//     // float: left;
//     width: 1100px;
//     height: 788px;
//     .text_item {
//       margin-left: 20px;
//       width:73px;
//       height:20px;
//       font-size:14px;
//       font-family:PingFangSC-Regular;
//       color:rgba(74,85,93,1);
//       line-height:20px;
//     }
//     .number_search {
//       width:1100px;
//       height:50px;
//       background:rgba(248,248,248,1);
//       // line-height: 60px;
//     }
//  }
</style>

