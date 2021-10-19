//1 引入相关方法
import { createRouter, createWebHashHistory } from 'vue-router'
//懒加载方式加载页面
const Home = () => import('./../pages/home/Home.vue')
const Course = () => import('./../pages/course/Course.vue')
const Friends = () => import('./../pages/friends/Friends.vue')
const Study = () => import('./../pages/study/Study.vue')
const My = () => import('./../pages/my/My.vue')
// 2 创建路由对象
const routes = [
    /*通常第一个配置重定向 */
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/course', component: Course },
    { path: '/friends', component: Friends },
    { path: '/study', component: Study },
    { path: '/my', component: My }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes /*键值同名可缩写 */
});
//3 导出路由对象
export default router;