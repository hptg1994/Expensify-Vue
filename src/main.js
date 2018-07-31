import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import  VueRouter from "vue-router"
import { routes } from "./router/AppRouter"

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
