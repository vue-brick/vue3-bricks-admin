<template>
  <a-card style="width: 100%;padding: 20px">
    <a-descriptions title="简介:">
      <a-descriptions-item label="作者">威尔电器前端团队</a-descriptions-item>
      <a-descriptions-item label="负责人">裴亚辉</a-descriptions-item>
      <a-descriptions-item label="phone">17690747737</a-descriptions-item>
      <a-descriptions-item label="所用到技术栈">
        Vue3 + TypeScript + rollup + tailwindcss + echarts
      </a-descriptions-item>
    </a-descriptions>
    <a-steps size="small" :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
    </a-steps>
    <div class="steps-content" v-if="current === 0">
      <MonacoEditorInstall type="shell" :code="steps[current].content" class="MonacoEditor"/>
    </div>
    <div class="steps-content" v-if="current === 1">
      <MonacoEditorInstall type="javascript" :code="steps[current].content" class="MonacoEditor"/>
    </div>
    <div class="steps-content" v-if="current === 2">
      <MonacoEditorInstall type="html" :code="steps[current].content" class="MonacoEditor"/>
    </div>
    <div class="steps-action text-center">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">下一步</a-button>
      <a-button
          v-if="current === steps.length - 1"
          type="primary"
          @click="$message.success('Processing complete!')"
      >
        下一步
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">上一步</a-button>
    </div>
  </a-card>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import MonacoEditorInstall from "../../components/MonacoEditorInstall"

export default defineComponent({
  components: {
    MonacoEditorInstall
  },
  setup() {

    const current = ref<number>(0);
    const next = () => {
      current.value++;
    };
    const prev = () => {
      current.value--;
    };
    return {

      current,
      steps: [
        {
          title: '1.下载安装包',
          content: 'npm install well-bricks',
        },
        {
          title: '2.项目中main.ts中导入组件库',
          content: `
import legoBricks from "lego-bricks
import 'lego-bricks/dist/lego-bricks.umd.css'
const app = createApp(App)
app.use(legoBricks)
          `,
        },
        {
          title: '3.使用',
          content: `
<l-text text="hello text" tag="button">children</l-text>
`,
        },
      ],
      next,
      prev,
    };
  },
});
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;

}

.steps-action {
  margin-top: 24px;
}

.MonacoEditor {
  padding-right: 10px;
  min-height: 200px;
  width: 100%;
  /*padding: 10px;*/
}
</style>
