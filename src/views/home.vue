<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"/>
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" @click="clickMenu" mode="inline">
        <div class="title">
          <h1 style="color: #ffffff">组件</h1>
        </div>
        <a-menu-item key="0">
          <desktop-outlined/>
          <span>安装与使用</span>
        </a-menu-item>
        <a-menu-item key="1">
          <appstore-add-outlined/>
          <span>LText</span>
        </a-menu-item>
        <a-menu-item key="2">
          <appstore-add-outlined/>
          <span>飞线动画容器</span>
        </a-menu-item>
        <a-menu-item key="3">
          <appstore-add-outlined/>
          <span>Echart容器</span>
        </a-menu-item>
        <a-menu-item key="4">
          <appstore-add-outlined/>
          <span>自适应屏幕容器</span>
        </a-menu-item>
        <a-menu-item key="5">
          <appstore-add-outlined/>
          <span>编辑器组件</span>
        </a-menu-item>
        <a-menu-item key="6">
          <appstore-add-outlined/>
          <span>实时时间</span>
        </a-menu-item>
        <a-menu-item key="7" >
          <appstore-add-outlined/>
          <span>跳动数字</span>
        </a-menu-item>
        <a-menu-item key="8" >
          <appstore-add-outlined/>
          <span>滚动列表</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding:0">
        <div class="headers">
          <headers></headers>
        </div>
      </a-layout-header>
      <!-- TODO 舞台-->
      <router-view :propsParams="demo.data" :sourceCode="demo.sourceCode"></router-view>
      <a-layout-footer style="text-align: center">
        <div class="icons-list dfc">
          <CheckCircleTwoTone twoToneColor="#52c41a"/>
          <div class="foot-title">
            <div class="bg">
              <div class="word glitch">
                <div class="flash is-off">
                  <span class="text">well组件库</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-layout-footer>
    </a-layout>
    <a-layout-sider width="400" style="background: #fff" class="settings-panel">
      <div>
        <!--        编辑器-->
        <Monaco :code="demo.JsonData" :onChange="onChangeCode"></Monaco>
      </div>
    </a-layout-sider>
  </a-layout>

</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  SmileTwoTone, HeartTwoTone, CheckCircleTwoTone,
  AppstoreAddOutlined
} from '@ant-design/icons-vue';
import {defineComponent, ref, reactive, watch} from 'vue';
import Headers from "../components/header.vue";
import Monaco from "../components/propsForMonaco1";
import defaultPropsData from "../defaultPropsData"
import {useRouter, useRoute} from "vue-router";
import {useRouterChange, useReturnMenKey} from '../hooks/useRouterChange'
import {message} from 'ant-design-vue';
import sourceCodeList from "../sourceCode"

export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    Headers,
    Monaco,
    AppstoreAddOutlined,
    FileOutlined,
    SmileTwoTone, HeartTwoTone, CheckCircleTwoTone
  },

  setup() {
    const router = useRouter()
    const route = useRoute()

    // 格式化缩进
    const toJson = (data: any) => {
      return JSON.stringify(data, null, 2)
    }
    console.log("router<><><>",route)
    //响应式数据
    const demo: {
      data: any;
      JsonData: string;
      sourceCode: string;
    } = reactive({
      data: {},
      JsonData: '',
      sourceCode: ''
    })
    const collapsed = ref<boolean>(false)
    const selectedKeys = ref<string[]>(['0'])
    const selectRef = ref(0)
    // 点击菜单时
    const clickMenu = (e: any) => {
      selectRef.value = e.key
      // /key
      const routerParam = useRouterChange(selectRef.value,router.options.routes[1].children)
      //跳转路由
      router.push(routerParam)
    }
    let timer: number
    // monaco代码改变的时候
    const onChangeCode = (value: string) => {
      clearTimeout(timer)
      try {
        demo.JsonData = value
        demo.data = JSON.parse(value)
      } catch (e) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          message.error('不正确的JSON格式,请检查代码格式,然后右键格式化代码~')
        }, 1000)
      }
    }
    watch(() => route.path, () => {
      const index = useReturnMenKey(route.path)
      demo.data = defaultPropsData[index]
      demo.JsonData = toJson(defaultPropsData[index])
      demo.sourceCode = sourceCodeList[index]

      selectedKeys.value = [index.toString()]
    }, {
      immediate: true,

    })

    return {

      collapsed,
      selectedKeys,
      clickMenu,
      demo,
      onChangeCode,
      SmileTwoTone, HeartTwoTone, CheckCircleTwoTone
    }
  }
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

.title {
  height: 50px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.title .white {
  color: #ffffff;
}


.settings-panel {
  float: right;
}

.dfc {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg {
  background: #050710;
  position: relative;
  margin: 40px 0;
  width: 100%;
  height: 60px;
  cursor: pointer;
  overflow: hidden;
}
.word {
  position: absolute;
  width: 100%;
  height: 60px;
  /* left:10%;
  margin-left:-100px; */
  top: 50%;
  margin-top: -30px;
  transition: 0.4s ease;
  animation: scalesmall 0.3s 1s ease-out both;
}
.glitch:before {
  position: absolute;
  z-index: 999999;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-animation: bg-move 2s linear infinite;
  animation: bg-move 2s linear infinite;
}
.flash {
  display: block;
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 60px;
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  cursor: default;
  will-change: transform;
}
.flash span {
  display: block;
  position: relative;
  font-size: 60px;
  line-height: 1;
  color: #fefeff;
  text-shadow: -5px 2px 6px #2451fa;
  font-weight: bold;
}
.flash.is-off {
  -webkit-animation: is-off 2s linear infinite !important;
  animation: is-off 2s linear infinite !important;
}

.glitch .flash {
  -webkit-transform: skewX(0deg) scaleY(1);
  transform: skewX(0deg) scaleY(1);
}
.glitch .flash span:before,
.glitch .flash span:after {
  display: block;
  content: '欢迎使用';
  position: absolute;
  top: 0;
  color: #fff;
  background: #050710;
  overflow: hidden;
  width: 100%;
  height: 60px;
  clip: rect(0, 300px, 0, 0);
  will-change: transform;
}
.glitch .flash span:before {
  left: -2px;
  text-shadow: 2px 0 #00f;
  animation: c2 1s infinite linear alternate-reverse;
}
.glitch .flash span:after {
  left: 3px;
  text-shadow: -2px 0 #f00;
  animation: c1 2s infinite linear alternate-reverse;
}

@keyframes is-off {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  56% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  58% {
    opacity: 1;
  }
  71% {
    -webkit-transform: scaleY(1) skewX(0deg);
    transform: scaleY(1) skewX(0deg);
  }
  72% {
    -webkit-transform: scaleY(3) skewX(-60deg);
    transform: scaleY(3) skewX(-60deg);
  }
  73% {
    -webkit-transform: scaleY(1) skewX(0deg);
    transform: scaleY(1) skewX(0deg);
  }
  80% {
    opacity: 1;
  }
  81% {
    opacity: 0;
  }
  84% {
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
  91% {
    -webkit-transform: scaleX(1) scaleY(1) skewX(0deg);
    transform: scaleX(1) scaleY(1) skewX(0deg);
    color: #fff;
  }
  92% {
    -webkit-transform: scaleX(1.5) scaleY(0.2) skewX(80deg);
    transform: scaleX(1.5) scaleY(0.2) skewX(80deg);
    color: #008000;
  }
  93% {
    -webkit-transform: scaleX(1) scaleY(1) skewX(0deg);
    transform: scaleX(1) scaleY(1) skewX(0deg);
    color: #fff;
  }
}

@keyframes c1 {
  0% {
    clip: rect(95px, 8888px, 66px, 0);
  }
  5% {
    clip: rect(86px, 8888px, 18px, 0);
  }
  10% {
    clip: rect(78px, 8888px, 89px, 0);
  }
  15% {
    clip: rect(90px, 8888px, 70px, 0);
  }
  20% {
    clip: rect(6px, 8888px, 65px, 0);
  }
  25% {
    clip: rect(57px, 8888px, 30px, 0);
  }
  30% {
    clip: rect(93px, 8888px, 56px, 0);
  }
  35% {
    clip: rect(38px, 8888px, 18px, 0);
  }
  40% {
    clip: rect(84px, 8888px, 69px, 0);
  }
  45% {
    clip: rect(35px, 8888px, 30px, 0);
  }
  50% {
    clip: rect(17px, 8888px, 34px, 0);
  }
  55% {
    clip: rect(51px, 8888px, 90px, 0);
  }
  60% {
    clip: rect(98px, 8888px, 47px, 0);
  }
  65% {
    clip: rect(66px, 8888px, 65px, 0);
  }
  70% {
    clip: rect(67px, 8888px, 54px, 0);
  }
  75% {
    clip: rect(35px, 8888px, 64px, 0);
  }
  80% {
    clip: rect(100px, 8888px, 32px, 0);
  }
  85% {
    clip: rect(96px, 8888px, 86px, 0);
  }
  90% {
    clip: rect(73px, 8888px, 12px, 0);
  }
  95% {
    clip: rect(42px, 8888px, 29px, 0);
  }
  100% {
    clip: rect(80px, 8888px, 27px, 0);
  }
}

@keyframes c2 {
  0% {
    clip: rect(96px, 8888px, 36px, 0);
  }
  5% {
    clip: rect(77px, 8888px, 6px, 0);
  }
  10% {
    clip: rect(9px, 8888px, 35px, 0);
  }
  15% {
    clip: rect(47px, 8888px, 64px, 0);
  }
  20% {
    clip: rect(86px, 8888px, 78px, 0);
  }
  25% {
    clip: rect(96px, 8888px, 50px, 0);
  }
  30% {
    clip: rect(42px, 8888px, 43px, 0);
  }
  35% {
    clip: rect(27px, 8888px, 59px, 0);
  }
  40% {
    clip: rect(65px, 8888px, 84px, 0);
  }
  45% {
    clip: rect(92px, 8888px, 6px, 0);
  }
  50% {
    clip: rect(70px, 8888px, 82px, 0);
  }
  55% {
    clip: rect(90px, 8888px, 86px, 0);
  }
  60% {
    clip: rect(41px, 8888px, 66px, 0);
  }
  65% {
    clip: rect(61px, 8888px, 77px, 0);
  }
  70% {
    clip: rect(77px, 8888px, 98px, 0);
  }
  75% {
    clip: rect(92px, 8888px, 30px, 0);
  }
  80% {
    clip: rect(80px, 8888px, 20px, 0);
  }
  85% {
    clip: rect(2px, 8888px, 15px, 0);
  }
  90% {
    clip: rect(76px, 8888px, 65px, 0);
  }
  95% {
    clip: rect(25px, 8888px, 61px, 0);
  }
  100% {
    clip: rect(28px, 8888px, 78px, 0);
  }
  23% {
    -webkit-transform: scaleX(0.8);
    transform: scaleX(0.8);
  }
}

@keyframes clock-bag {
  0% {
    -webkit-transform: translate(3px, 2px);
    transform: translate(3px, 2px);
  }
  2% {
    -webkit-transform: translate(1px, 2px);
    transform: translate(1px, 2px);
  }
  4% {
    -webkit-transform: translate(1px, 5px);
    transform: translate(1px, 5px);
  }
  6% {
    -webkit-transform: translate(5px, 5px);
    transform: translate(5px, 5px);
  }
  8% {
    -webkit-transform: translate(1px, 1px);
    transform: translate(1px, 1px);
  }
  10% {
    -webkit-transform: translate(3px, 4px);
    transform: translate(3px, 4px);
  }
  12% {
    -webkit-transform: translate(3px, 5px);
    transform: translate(3px, 5px);
  }
  14.000000000000002% {
    -webkit-transform: translate(4px, 4px);
    transform: translate(4px, 4px);
  }
  16% {
    -webkit-transform: translate(1px, 2px);
    transform: translate(1px, 2px);
  }
  18% {
    -webkit-transform: translate(5px, 2px);
    transform: translate(5px, 2px);
  }
  20% {
    -webkit-transform: translate(5px, 5px);
    transform: translate(5px, 5px);
  }
  22% {
    -webkit-transform: translate(3px, 2px);
    transform: translate(3px, 2px);
  }
  24% {
    -webkit-transform: translate(4px, 2px);
    transform: translate(4px, 2px);
  }
  26% {
    -webkit-transform: translate(5px, 5px);
    transform: translate(5px, 5px);
  }
  28% {
    -webkit-transform: translate(4px, 5px);
    transform: translate(4px, 5px);
  }
  30% {
    -webkit-transform: translate(2px, 3px);
    transform: translate(2px, 3px);
  }
  32% {
    -webkit-transform: translate(3px, 3px);
    transform: translate(3px, 3px);
  }
  34% {
    -webkit-transform: translate(2px, 5px);
    transform: translate(2px, 5px);
  }
  36% {
    -webkit-transform: translate(1px, 1px);
    transform: translate(1px, 1px);
  }
  38% {
    -webkit-transform: translate(5px, 3px);
    transform: translate(5px, 3px);
  }
  40% {
    -webkit-transform: translate(4px, 5px);
    transform: translate(4px, 5px);
  }
  42% {
    -webkit-transform: translate(4px, 1px);
    transform: translate(4px, 1px);
  }
  44% {
    -webkit-transform: translate(1px, 5px);
    transform: translate(1px, 5px);
  }
  46% {
    -webkit-transform: translate(4px, 2px);
    transform: translate(4px, 2px);
  }
  48% {
    -webkit-transform: translate(3px, 5px);
    transform: translate(3px, 5px);
  }
  50% {
    -webkit-transform: translate(3px, 3px);
    transform: translate(3px, 3px);
  }
  52% {
    -webkit-transform: translate(1px, 3px);
    transform: translate(1px, 3px);
  }
  54% {
    -webkit-transform: translate(5px, 1px);
    transform: translate(5px, 1px);
  }
  56% {
    -webkit-transform: translate(2px, 1px);
    transform: translate(2px, 1px);
  }
  58% {
    -webkit-transform: translate(4px, 2px);
    transform: translate(4px, 2px);
  }
  60% {
    -webkit-transform: translate(4px, 5px);
    transform: translate(4px, 5px);
  }
  62% {
    -webkit-transform: translate(5px, 3px);
    transform: translate(5px, 3px);
  }
  64% {
    -webkit-transform: translate(4px, 4px);
    transform: translate(4px, 4px);
  }
  66% {
    -webkit-transform: translate(2px, 1px);
    transform: translate(2px, 1px);
  }
  68% {
    -webkit-transform: translate(1px, 4px);
    transform: translate(1px, 4px);
  }
  70% {
    -webkit-transform: translate(1px, 3px);
    transform: translate(1px, 3px);
  }
  72% {
    -webkit-transform: translate(1px, 4px);
    transform: translate(1px, 4px);
  }
  74% {
    -webkit-transform: translate(1px, 5px);
    transform: translate(1px, 5px);
  }
  76% {
    -webkit-transform: translate(5px, 5px);
    transform: translate(5px, 5px);
  }
  78% {
    -webkit-transform: translate(5px, 5px);
    transform: translate(5px, 5px);
  }
  80% {
    -webkit-transform: translate(2px, 1px);
    transform: translate(2px, 1px);
  }
  82% {
    -webkit-transform: translate(1px, 3px);
    transform: translate(1px, 3px);
  }
  84% {
    -webkit-transform: translate(1px, 4px);
    transform: translate(1px, 4px);
  }
  86% {
    -webkit-transform: translate(5px, 5px);
    transform: translate(5px, 5px);
  }
  88% {
    -webkit-transform: translate(3px, 1px);
    transform: translate(3px, 1px);
  }
  90% {
    -webkit-transform: translate(5px, 5px);
    transform: translate(5px, 5px);
  }
  92% {
    -webkit-transform: translate(4px, 5px);
    transform: translate(4px, 5px);
  }
  94% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  96% {
    -webkit-transform: translate(1px, 2px);
    transform: translate(1px, 2px);
  }
  98% {
    -webkit-transform: translate(2px, 1px);
    transform: translate(2px, 1px);
  }
  100% {
    -webkit-transform: translate(2px, 1px);
    transform: translate(2px, 1px);
  }
  1% {
    -webkit-transform: scaleY(1) skewX(0deg);
    transform: scaleY(1) skewX(0deg);
  }
  1.5% {
    -webkit-transform: scaleY(3) skewX(-60deg);
    transform: scaleY(3) skewX(-60deg);
  }
  2% {
    -webkit-transform: scaleY(1) skewX(0deg);
    transform: scaleY(1) skewX(0deg);
  }
  51% {
    -webkit-transform: scaleX(1) scaleY(1) skewX(0deg);
    transform: scaleX(1) scaleY(1) skewX(0deg);
  }
  52% {
    -webkit-transform: scaleX(1.5) scaleY(0.2) skewX(80deg);
    transform: scaleX(1.5) scaleY(0.2) skewX(80deg);
  }
  53% {
    -webkit-transform: scaleX(1) scaleY(1) skewX(0deg);
    transform: scaleX(1) scaleY(1) skewX(0deg);
  }
}
.foot-title{
  width: 100%;
  height: 300px;
}

</style>
