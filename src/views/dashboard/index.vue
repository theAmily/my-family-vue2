<template>
  <div class="dashboard-container">
    <el-row class="base-consume">
      <div class="line">
        <div class="title">基础金额统计</div>
        <EchartsLine />
      </div>
    </el-row>

    <el-row>
      <el-col span="12">
        <EchartsBar />
      </el-col>
      <el-col span="12">
        <EchartsPai />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EchartsBar from './components/echarts-bar.vue'
import EchartsLine from './components/echarts-line.vue'
import EchartsPai from './components/echarts-pai.vue'

export default {
  name: 'Dashboard',
  components: {
    EchartsBar,
    EchartsLine,
    EchartsPai
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  height: calc(100vh - 50px);
  background-color: #eee;
  .base-consume {
    .line {
      height: 100%;
      background-color: #fff;
    }
  }
  .el-row{
    height: 50%;
    .el-col {
      height: 100%;
    }
  }
  .title {
    padding: 1rem;
    padding-left: 2.5rem;
    font-weight: bold;
    font-size: 20px;
    color: #333;
    border-bottom: 1px solid #eee;
  }
}
</style>
