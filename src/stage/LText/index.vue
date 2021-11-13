<template>
  <a-card style="width: 100%;padding: 5px">
    <div class="dfc">
      <div class="container-fly">
        <l-text :tag="propsData.tag" :text="propsData.text">
        </l-text>
      </div>

    </div>
    <source-code :sourceCode="sourceCodeRef" title=" 显示代码"></source-code>
    <propsTable :data="dataList" :description="description">

    </propsTable>
  </a-card>
</template>

<script lang="ts">
const description = {
  desc: '这是LText组件,用来做lego的lowCode组件',
  name: 'LText'
}
const dataList = [
  {
    key: '1',
    propsName: 'tag',
    type: 'string',
    data: 'h1|h2|h3|button等html标签',
  },
  {
    key: '2',
    propsName: 'text',
    type: 'string',
    data: 'children文本',
  },
];
import {defineComponent, ref, watchEffect} from 'vue'
import propsTable from '../../components/propsTable.vue'
import {SmileOutlined} from '@ant-design/icons-vue';
import {message} from 'ant-design-vue';
import sourceCode from "../../components/collapseCode.vue"

export default defineComponent({
  name: 'WLTexts',
  components: {propsTable, SmileOutlined, sourceCode},
  props: {
    propsParams: {
      type: Object,
      required: true,
    },
    sourceCode:{
      type: String,
      required: true,
    }
  },
  setup(props) {
    const {propsParams,sourceCode} = props
    const propsDataCode = ref(propsParams)
    const sourceCodeRef = ref(sourceCode)
    const correctTagList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'a-button']
    let timer: number
    // 判断正确的tag
    const judgeCorrectTag = (propsParams: any) => {
      if (correctTagList.includes(propsParams.tag)) {
        clearTimeout(timer)
        propsDataCode.value = propsParams
      } else {
        clearTimeout(timer)
        timer = setTimeout(() => {
          message.info('不正确的tag属性');
        }, 1000)
      }
    }


    // const updateData = (newData: any) => {
    //   clearTimeout(timer1)
    //   timer1 = setTimeout(() => {
    //     propsDataCode.value = newData
    //   }, 1000)
    // }
    watchEffect(() => {
      const {propsParams} = props
      judgeCorrectTag(propsParams)
    })
    return {
      sourceCodeRef,
      propsData: propsDataCode,
      dataList,
      description
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

.container-fly {
  width: 100px;
  height: 100px;
}
</style>


<!--    "postcss": "^7.0.35" -->
