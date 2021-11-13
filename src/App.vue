<template>
  <div class="app-container">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  name: 'App',
})
</script>

<style scoped>


.app-container {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: mNumbers;
  src: url("../public/font/DISPLAY FREE TFB.ttf");
}

</style>


