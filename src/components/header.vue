<template>
  <div class="dfc">
    <div class="dfc titles">
      <img src="../assets/wellLogo.jpeg" alt="#" class="img">
      <h1>
        威尔电器组件库
      </h1>
    </div>
    <div class="floatRight">
      <a-dropdown-button @click="handleButtonClick">
        关于组件库
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">
              主页
            </a-menu-item>
            <a-menu-item key="2">
              作者:裴亚辉
            </a-menu-item>
            <a-menu-item key="3">
              其他
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown-button>
    </div>
  </div>


</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useRouter} from 'vue-router';

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()
    const handleButtonClick = (e: Event) => {
      console.log('click left button', e);
    };
    const handleMenuClick = (e: { key: string }) => {
      if (e.key === '1') {
        router.push('/');
      }
    };
    return {
      handleButtonClick,
      handleMenuClick,
    };
  },

});
</script>

<style scoped>
.dfc {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.titles{
  flex: 1;
}

.floatRight {
  margin-right: 30px;
}
</style>


<!--    "postcss": "^7.0.35" -->
