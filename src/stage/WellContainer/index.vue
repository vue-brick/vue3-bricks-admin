<template>
  <a-card style="width: 100%;padding: 20px">
    <div class="dfc">
      <div style="width:800px">
        <div style="height:400px;width:1000px">
          <iframe src="http://202.105.129.162:22783/tv" frameborder="0" width="800px" height="300px"></iframe>

        </div>
        <a-alert
            message="稍等片刻,给组件一些时间加载~"
            description="该容器为屏幕自适应容器,可以适应各种屏幕,常用作大屏项目的基础容器"
            type="warning"
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
  desc: `<h2>1.自动监听浏览器窗口变化,动态计算出高宽比,无视页面放大缩小</h2>
         <h2>2.适用于各种屏幕,常用作项目最外层基础容器</h2>
         <h2>3.突破浏览器中font-size最小12px限制</h2>
  `
}
const dataList = [
  {
    key: '1',
    propsName: 'options',
    type: 'string',
    data: '传入width和height',
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
<!--

         <div class="dateTimes">
            <date-time :styleObj="{color:'purple',fontSize:'24px'}" class="times"></date-time>
          </div>


-->
