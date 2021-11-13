import {createRouter, createWebHistory} from 'vue-router'
// 页面
const Home = () => import('@/views/home.vue')
const indexPage = () => import('@/views/indexPage.vue')
//舞台
const LText = () => import('@/stage/LText/index.vue')
const FlyBox = () => import('@/stage/FlyBox/index.vue')
const Install = () => import('@/stage/Install/index.vue')
const EchartContainer = () => import('@/stage/EchartContainer/index.vue')
const WellContainer = () => import('@/stage/WellContainer/index.vue')
const Monaco = () => import('@/stage/Monaco/index.vue')
const Time = () => import('@/stage/Time/index.vue')
const Numbers = () => import('@/stage/CountNumber/index.vue')
const scrollList = () => import('@/stage/scrollList/index.vue')


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'indexPage',
            component: indexPage,
        },
        {
            path: '/components',
            name: 'Home',
            component: Home,
            // 路由就是侧边栏,请注意顺序,会影响属性编辑器和源码编辑器的内容显示
            children: [
                {
                    path: '/install',
                    name: '安装与使用',
                    component: Install,
                },
                {
                    path: '/lText',
                    name: 'LText',
                    component: LText,
                },

                {
                    path: '/flyBox',
                    name: '飞线动画容器',
                    component: FlyBox,
                },
                {
                    path: '/echartContainer',
                    name: 'Echart容器',
                    component: EchartContainer,
                },
                {
                    path: '/wellContainer',
                    name: '自适应屏幕容器',
                    component: WellContainer,
                },
                {
                    path: '/monacoEditor',
                    name: '编辑器组件',
                    component: Monaco,
                },
                {
                    path: '/time',
                    name: '实时时间',
                    component: Time,
                },
                {
                    path: '/numbers',
                    name: '跳动数字',
                    component: Numbers,
                },
                {
                    path: '/scrollList',
                    name: '滚动数字',
                    component: scrollList,
                }
            ]
        },

    ]
})

export default router
