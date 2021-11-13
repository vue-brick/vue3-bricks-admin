<template>
  <div style="width: 100%;padding: 10px">
    <a-collapse v-model:activeKey="activeKey" accordion>
      <a-collapse-panel key="1" :header="title">
        <MonacoEditorInstall  :style="monacoStyle" class="monaco" type="html" :code="sourceCode"/>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script lang="ts">

import {defineComponent, ref} from 'vue'

import MonacoEditorInstall from "./MonacoEditorInstall";

export default defineComponent({
  name: 'source-code',
  components: {MonacoEditorInstall},
  props: {
    title: {
      type: String,
      default:'代码'
    },
    sourceCode:{
      type: String,
      default:'sourceCode'
    },
    monacoStyle:{
      type:Object,
      default:{
        paddingRight:' 10px',
        minHeight: '130px',
        width: '100%',
      }
    }
  },
  setup() {
    const activeKey = ref([]);
    return {
      activeKey,
    }
  }
})
</script>

<style>


.monaco {
  padding-right: 100px;
  min-height: 130px;
  width: 100%;
}
</style>


<!--    "postcss": "^7.0.35" -->
