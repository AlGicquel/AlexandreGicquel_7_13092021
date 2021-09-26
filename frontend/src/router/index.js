import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Posts from '../components/Posts.vue'
import UserProfile from '../components/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
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
