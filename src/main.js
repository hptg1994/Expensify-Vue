import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./router/AppRouter"
import { firebase } from './firebase/firebase';
import { store } from "./store/store"
Vue.use(VueRouter);
// Vue.use(BootstrapVue);

const router = new VueRouter({
  routes
})

let hasRendered = false;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})  

/* const renderApp = () => {
  if(!hasRendered){
    new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })  
  }
  hasRendered = true;
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
}); */