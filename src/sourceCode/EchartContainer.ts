export default `
<template>
    <div style="width:300px;height:200px">
      <vue-echarts :options="echartOptaions"></vue-echarts>
    </div>
</template>

<script lang="ts">
import {defineComponent, watch, ref} from 'vue'
export default defineComponent({
  name: 'echartContainer',
  setup(props) {
    const echartOptaions = ref({})
    echartOptaions.value = {
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      series: [
        {
          name: '面积模式',
          type: 'pie',
          radius: [20, 40],
          center: ['50%', '50%'],
          roseType: 'area',
          data: [
            {value: 40, name: 'rose 1'},
            {value: 38, name: 'rose 2'},
            {value: 32, name: 'rose 3'},
            {value: 30, name: 'rose 4'},
          ]
        }
      ]
    };
    return {
      echartOptaions
    }
  }
})
</script>

<style>


</style>


<!--    "postcss": "^7.0.35" -->


`
