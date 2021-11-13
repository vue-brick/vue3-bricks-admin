<template>
  <a-card style="width: 100%;padding:0px">
    <div class="dfc-column">
      <div class="scroll-list">
        <list :data="propsData.dataList" :restProps="propsData"

        ></list>
      </div>
      <source-code :sourceCode="sourceCodeRef" title=" 显示代码"></source-code>
    </div>
    <propsTable :data="dataList" :description="description">

    </propsTable>
    <a-alert
        message="提示!"
        description="flyBox的width和height根据父组件决定的"
        type="warning"
        show-icon
    />
  </a-card>
</template>

<script lang="ts">
const description = {
  desc: `<h1>滚动列表</h1>`,
  name: `大屏滚动列表`
}
const dataList = [
  {
    key: '1',
    propsName: 'dataList',
    type: 'object',
    data: '数据列表',
  },
  {
    key: '2',
    propsName: 'headerData',
    type: 'array',
    data: '标题数据',
  }, {
    key: '3',
    propsName: 'headerStyle',
    type: 'array',
    data: '标题样式',
  }, {
    key: '4',
    propsName: 'headerBg',
    type: 'string',
    data: '标题背景色',
  }, {
    key: '5',
    propsName: 'headerHeight',
    type: 'number',
    data: '标题的高度',
  }, {
    key: '6',
    propsName: 'headerIndex',
    type: 'boolean',
    data: '是否展示序号',
  },
  {
    key: '7',
    propsName: 'headerIndexContent',
    type: 'boolean',
    data: '序号展示内容',
  },
  {
    key: '8',
    propsName: 'headerIndexStyle',
    type: 'css Object({width: "50px"})',
    data: '序号的样式',
  },
  {
    key: '9',
    propsName: 'headerIndex',
    type: 'boolean',
    data: '是否展示序号',
  },
  {
    key: '10',
    propsName: 'rowNum',
    type: 'number',
    data: '需要显示多少行数据',
  },
  {
    key: '11',
    propsName: 'rowStyle',
    type: 'array',
    data: '行样式',
  },
  {
    key: '12',
    propsName: 'rowIndexStyle',
    type: 'css Object({width: "50px"})',
    data: '行中序号列样式',
  },
  {
    key: '13',
    propsName: 'rowBg',
    type: 'array',
    data: '行背景色',
  },
  {
    key: '14',
    propsName: 'aligns',
    type: 'array',
    data: '行居中方式',
  },
  {
    key: '15',
    propsName: 'headerFontSize',
    type: 'number',
    data: '标题的字体大小',
  },
  {
    key: '16',
    propsName: 'rowFontSize',
    type: 'number',
    data: '行中的字体大小',
  },
  {
    key: '17',
    propsName: 'headerColor',
    type: 'string',
    data: '标题的的颜色',
  },
  {
    key: '18',
    propsName: 'rowColor',
    type: 'string',
    data: '行的颜色',
  },
  {
    key: '19',
    propsName: 'moveNum',
    type: 'number',
    data: '动画移动个数',
  },
  {
    key: '20',
    propsName: 'duration',
    type: 'number',
    data: '动画时长(s)',
  },
  {
    key: '21',
    propsName: 'headerIndexData',
    type: 'array',
    data: '第一列(序号列)的数据内容',
  },


];
import {defineComponent, ref, watchEffect} from 'vue'
import propsTable from '../../components/propsTable.vue'
import {SmileOutlined} from '@ant-design/icons-vue';
import sourceCode from "../../components/collapseCode.vue"

import List from "./list.vue"

export default defineComponent({
  name: 'BaseScrollListPro',
  components: {propsTable, SmileOutlined, sourceCode, List},
  props: {
    propsParams: {
      type: Object,
      required: true,
    },
    sourceCode: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const {propsParams, sourceCode} = props
    const propsDataCode = ref(propsParams)
    const sourceCodeRef = ref(sourceCode || "123123")

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
      propsData: propsDataCode,
      dataList,
      description,
      sourceCodeRef,
    }
  }
})
</script>

<style scoped>

.container-fly {
  width: 800px;
  height: 200px;
}

.dfc-column {
  height: 900px;
  width: 100%;

}

.scroll-list {
  width: 100%;
  height: 800px;
}

</style>


<!--    "postcss": "^7.0.35" -->
