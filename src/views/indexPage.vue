<template>
  <div class="indexContainer">
    <div class="text-center dfc">
      <img src="../assets/wellLogo.jpeg" alt="#" class="img">
      <h1>
        威尔电器组件库
      </h1>
    </div>
    <div class="text-center desc">
      <h2>随着威尔业务的不断积累,前端团队也造了不少的轮子,为了业务的规范工程化与快速开发,所以well组件库就诞生啦~</h2>
    </div>
    <index-feature></index-feature>
    <div class="text-center">
      <a-button type="primary" size="large" @click="start">
        开始使用→
      </a-button>
      <button class="btn">
        123123
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router';

export default defineComponent({
  name: 'Index',
  components: {},
  setup() {
    const router = useRouter();
    const start = () => {
      router.push("/lText");
    }

    return {
      start
    }
  }
})
</script>

<style scoped>
.indexContainer {
  margin-top: 40px;
}

.dfc {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img {
  margin-right: 10px;
}

.desc {
  margin-top: 50px;
  color: bisque;
}
</style>


<!--    "postcss": "^7.0.35" -->
