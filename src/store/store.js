import vuex from "vuex"
import Vue from "../../node_modules/vue";
import expense from "./expense/expense";

Vue.use(vuex);

export const store = new vuex.Store({
  modules:{
    expense
  }
});