import Vue from '../../node_modules/vue/dist/vue.min.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

//导入组件
import Home from '../components/Home.vue';
import Member from '../components/Member.vue';
import Shopcar from '../components/Shopcar.vue';
import Search from '../components/Search.vue'

import NewsList from '../components/news/NewsList.vue'
import Shopping from '../components/shop/Shopping.vue'
import Comment from '../components/comments/Comment.vue'
import Content from '../components/content/Content.vue'
import ProductDetails from '../components/shop/ProductDetails.vue'
let router = new VueRouter({
    routes: [
        { path: '/', redirect: '/Home' },
        { path: '/Home', component: Home },
        { path: '/Member', component: Member },
        { path: '/Shopcar', component: Shopcar },
        { path: '/Search', component: Search },
        { path: '/Home/NewsList', component: NewsList },
        { path: '/Home/Shopping', component: Shopping },
        { path: '/Home/Comment', component: Comment },
        { path: '/Home/Content', component: Content },
        { path: '/Shopping/ProductDetails/:id', component: ProductDetails }
    ],
    linkActiveClass: 'mui-active'
})
//导出路由
export default router