<template>
  <div class="dashboard-container">
    <el-row class="base-consume">
      <EchartsLine />
    </el-row>

    <el-row>
      <el-col span="12">
        <EchartsBar />
      </el-col>
      <el-col span="12">
        1
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EchartsBar from './components/echarts-bar.vue'
import EchartsLine from './components/echarts-line.vue'

export default {
  name: 'Dashboard',
  components: {
    EchartsBar,
    EchartsLine
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  height: 90vh;
  .el-row{
    height: 50%;
    .el-col {
      height: 100%;
    }
  }
}
</style>
