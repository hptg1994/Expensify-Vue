import vuex from "vuex"
import Vue from "vue";
import expense from "./expense/expense";
import VuexPersist from 'vuex-persist'

Vue.use(vuex);

const vuexPersist = new VuexPersist({
  key: 'expensify',
  storage: localStorage
})

export const store = new vuex.Store({
  plugins: [vuexPersist.plugin],
  modules:{
    expense
  }
});