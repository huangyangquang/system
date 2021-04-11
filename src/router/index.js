import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/Knowledg',
    name: 'Knowledg',
    component: () => import('../views/Knowledg.vue')
  },
  {
    path: '/Comment',
    name: 'Comment',
    component: () => import('../views/Comment.vue')
  },
  {
    path: '/QuestionGroup',
    name: 'QuestionGroup',
    component: () => import('../views/QuestionGroup.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
