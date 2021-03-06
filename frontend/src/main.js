import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false;

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000/api/';
Vue.http.interceptors.push( (request, next) => {
  if (localStorage.UserId && localStorage.token) {
    request.headers.set('Authorization', 'Bearer ' + localStorage.token +' UserId ' + localStorage.UserId);
    request.headers.set('Accept', 'application/json');
    // request.headers.set('UserId', localStorage.UserId)
    next();
  }
})

new Vue({
  router,
  store,
  // VueResource,
  render: h => h(App)
}).$mount('#app')
