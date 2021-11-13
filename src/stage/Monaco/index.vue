<template>
  <a-card style="width: 100%;padding: 20px">
    <div class="dfc">
      <div style="width:800px">
        <a-alert
            message="代码编辑器组件"
            description="最右侧的属性编辑器中已呈现代码编辑器组件,封装monaco编辑器,快速安装无序配置"
            type="success"
            show-icon
        >
          <template #icon>
            <smile-outlined/>
          </template>
        </a-alert>
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
  desc: `<h2>1.基于monaco二次封装</h2>
         <h2>2.无序配置和安装,引入直接使用</h2>
  `
}
const dataList = [
  {
    key: '1',
    propsName: 'type',
    type: 'string',
    data: '编辑器类别   html | javascript | shell |.....',
  },
  {
    key: '1',
    propsName: 'code',
    type: 'code',
    data: '显示源码',
  },
  {
    key: '1',
    propsName: 'onChange',
    type: 'function',
    data: '(value:string)=>void',
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
import {defineComponent, watch, ref} from 'vue'
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


    // 监听属性变化
    watch(() => props, (newV) => {
      const {propsParams} = newV
      propsDataCode.value = propsParams
      sourceCodeRef.value = sourceCode
    }, {
      immediate: true,

    })

    return {
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

</style>


<!--    "postcss": "^7.0.35" -->
