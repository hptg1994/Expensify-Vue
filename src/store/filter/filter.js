import moment from "moment"
import { stat } from "fs";

const state = {
  text:'',
  sortBy:"date",
  startDate:moment().startOf("month"),
  endDate:moment().endOf('month')
}

const getters = {
  getState: state => {return state}
}

const mutations = {
  "setTextFilter":(state,payload) => {
    state.text = payload;
  },
  "sortBy":(state,payload) => {
    state.sortBy = payload;
  },

  "setStartDate":(state,payload) => {
    state.startDate = payload;
  },

  "setEndDate":(state,payload) => {
    state.endDate = payload;
  }
}

const actions = {
  "setTextFilterAction":({commit},payload) => {
    commit("setTextFilter",payload);
  },
  "sortByAction":({commit},payload) => {
    commit("sortBy",payload);
  },
  "setStartDateAction":({commit},payload) => {
    commit("setStartDate",payload)
  },
  "setEndDateAction":({commit},payload) => {
    commit("setEndDate",payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}