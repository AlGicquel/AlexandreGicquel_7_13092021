import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Posts from '../components/Posts.vue'
import UserProfile from '../components/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/user',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
