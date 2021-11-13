<template>
  <a-card style="width: 100%;padding: 20px">
    <div class="dfc">
      <div style="width:400px;height:400px">
        <vue-echarts v-bind="propsDataCode"></vue-echarts>
      </div>
    </div>
    <source-code :sourceCode="sourceCodeRef" title="显示代码" :monacoStyle="monacoStyle"></source-code>
    <propsTable :data="dataList" :description="description">
    </propsTable>

  </a-card>
</template>

<script lang="ts">
const description = {
  name: 'echart容器组件',
  desc: `<h2>1.自动监听dom,props更新图表</h2>
         <h2>2.自动跟随和自适应父容器大小 </h2>
         <h2>3.只需把echart官网实例的options传递进来,即可显示,快速开发图表 </h2>
  `
}
const dataList = [
  {
    key: '1',
    propsName: 'options',
    type: 'string',
    data: 'echart的options',
  },
];
const options = {
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
import {defineComponent, ref, watchEffect} from 'vue'
import propsTable from '../../components/propsTable.vue'
import {SmileOutlined} from '@ant-design/icons-vue';
import sourceCode from "../../components/collapseCode.vue"

export default defineComponent({
  name: 'FlyBoxContainer',
  components: {propsTable, SmileOutlined, sourceCode},
  props: {
    propsParams: {
      type: Object,
      required: true,
      default: options
    },
    sourceCode: {
      type: String,
      required: true,
    }

  },
  setup(props) {
    const {propsParams, sourceCode} = props

    const propsDataCode = ref(propsParams)
    const sourceCodeRef = ref(sourceCode)

    let timer: number;
    const updateData = (newData: any) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        propsDataCode.value = newData
      }, 1000)

    }
    watchEffect(() => {
      const {propsParams} = props
      updateData(propsParams)
    })

    return {
      propsDataCode,
      dataList,
      description,
      sourceCodeRef,
      monacoStyle: {
        paddingRight: ' 10px',
        minHeight: '500px',
        width: '100%',
      }
    }
  }
})
</script>

<style scoped>
.dfc {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>


<!--    "postcss": "^7.0.35" -->
