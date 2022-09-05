<template>
  <div id="echarts-bar" />
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'EchartsBar',
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      const myChart = echarts.init(document.getElementById('echarts-bar'))
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>

<style>
#echarts-bar {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
