import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category'
import Login from './theme/Login'
import NotFound from './theme/NotFound'

/*
const Category = () => System.import('./theme/Category.vue')
const Login = () => System.import('./theme/Login.vue')
const NotFound = () => System.import('./theme/NotFound.vue')
*/

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({y: 0}),
  routes: [
    {path: '/login', component: Login},
    {path: '/category/:id', component: Category, name: 'category'},
    {path: '/', redirect: '/category/front-end'},
    {path: '*', component: NotFound}
  ]
})

export default router
