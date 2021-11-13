<template>
  <a-card style="width: 100%;padding: 20px">
    <div class="dfc-column">
      <div class="container-fly">
        <fly-box v-bind="propsData" class="fly-box">
          <div class="text-center">
            <b>里面是一个插槽
            </b>
          </div>
        </fly-box>
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
    <test-bricks></test-bricks>
 
  </a-card>
</template>

<script lang="ts">
const description = {
  desc: '飞线动画容器,用来做大屏项目显示',
  name: 'FlyBox'
}
const dataList = [
  {
    key: '1',
    propsName: 'boxColor',
    type: 'string',
    data: '轨迹盒子的颜色',
  },
  {
    key: '2',
    propsName: 'startColor',
    type: 'string',
    data: '飞线颜色',
  }, {
    key: '3',
    propsName: 'startLength',
    type: 'string',
    data: '飞线长度',
  }, {
    key: '4',
    propsName: 'duration',
    type: 'string',
    data: '飞一圈需要时间',
  }, {
    key: '5',
    propsName: 'boxWidth',
    type: 'string',
    data: '轨迹盒子的width',
  }, {
    key: '6',
    propsName: 'lineWidth',
    type: 'string',
    data: '飞线的width',
  },
];
import {defineComponent, ref, watchEffect} from 'vue'
import propsTable from '../../components/propsTable.vue'
import {SmileOutlined} from '@ant-design/icons-vue';
import sourceCode from "../../components/collapseCode.vue"
import { TestBricks } from "test-bricks-teach"
export default defineComponent({
  name: 'FlyBoxContainer',
  components: {propsTable, SmileOutlined, sourceCode,TestBricks},
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>


<!--    "postcss": "^7.0.35" -->
