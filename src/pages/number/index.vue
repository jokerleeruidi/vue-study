<template>
  <div class="number">
    <!-- 面包屑 -->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/number'}">编码管理</el-breadcrumb-item>
    </el-breadcrumb>
      <el-card class="number-card" >
        <div class="text_item">
          批次号列表
        </div>
        <div class="number_search">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="集成商／生产商：">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
  </div>
</template> -->
<script>
  export default {
    data() {
      return {
       form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
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
.number {
 .number-card{
   width:1100px;
   height:788px;
   background:rgba(255,255,255,1);
   border:1px solid rgba(223,228,234,1);
  //  .text_item {
  //   padding:10px;
  //   width:73px;
  //   height:20px;
  //   font-size:14px;
  //   font-family:PingFangSC-Regular;
  //   color:rgba(74,85,93,1);
  //   line-height:20px;
  //  }
 }
}
</style>

