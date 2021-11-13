<template>
  <a-card style="width: 100%;padding: 20px">
    <div class="dfc">
      <div style="width:800px">
        <div style="height:400px;width:1000px">
          <div class="dateTimes">
            <date-time v-if="isShow" v-bind="propsDataCode" class="times"></date-time>
          </div>
        </div>
      </div>
    </div>

    <source-code :sourceCode="sourceCodeRef" title="显示代码" :monacoStyle="monacoStyle"></source-code>
    <propsTable :data="dataList" :description="description">
    </propsTable>
  </a-card>
</template>

<script lang="ts">
const description = {
  name: 'well-container容器组件',
  desc: `<h2>1.自动监听浏览器窗口变化,动态计算出高宽比,无视页面放大缩小</h2>
         <h2>2.适用于各种屏幕,常用作项目最外层基础容器</h2>
         <h2>3.突破浏览器中font-size最小12px限制</h2>
  `
}
const dataList = [
  {
    key: '1',
    propsName: 'startVal',
    type: 'number',
    data: '开始数',
  },
  {
    key: '2',
    propsName: 'endVal',
    type: 'number',
    data: '结束数',
  },
  {
    key: '3',
    propsName: 'duration',
    type: 'number',
    data: '动画持续时间',
  },
  {
    key: '4',
    propsName: 'prefix',
    type: 'string',
    data: '前置字符',
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
import {defineComponent, ref,watchEffect} from 'vue'
import propsTable from '../../components/propsTable.vue'
import {SmileOutlined} from '@ant-design/icons-vue';
import sourceCode from "../../components/collapseCode.vue"

export default defineComponent({
  name: 'times',
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
    const isShow = ref(true)
    const propsDataCode = ref(propsParams)
    const sourceCodeRef = ref(sourceCode)
    let timer: number;

    // 监听属性变化
    watchEffect(() => {
      if (timer) {
        clearTimeout(timer)
      }
      const {propsParams} = props
      propsDataCode.value = propsParams
      sourceCodeRef.value = sourceCode
      timer = setTimeout(() => {
        isShow.value = false
        setTimeout(() => {
          isShow.value = true
        }, 0)
      }, 1500)
    })

    return {
      isShow,
      propsDataCode,
      dataList,
      description,
      SmileOutlined,
      sourceCodeRef,
      monacoStyle: {
        paddingRight: ' 10px',
        minHeight: '150px',
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

.dateTimes {
  width: 800px;
  height: 200px;
}
</style>


<!--    "postcss": "^7.0.35" -->
<!--



-->
