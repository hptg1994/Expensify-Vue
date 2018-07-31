const state = [],

const getters = {
  allExpense:state => {
    return state;
  }
}

const mutations = {
  // add expense
  "addExpense":(state,payload) => {
    const expense = {
      description = "",
      note = "",
      aamount = "",
      createAt = 0,
    }
    state.push(expense);
  },

  // remove expense
  "removeExpense":(state,payload) => {
    state.filter((item) => item.id !== payload)
  },

  "editExpense":(state,payload) => {
    state.map((expense) => {
      if(expense.id === payload.id){
        return {...expense,payload}
      }else{
        return expense;
      }
    })
  },
}

const actions = {
  addExpenseAction:({commit},payload) => {
    commit("addExpense",payload);
  },
  removeExpenseAction:({commit},payload) => {
    commit("removeExpense",payload);
  },
  editExpense:(state,payload) => {
    commit("editExpense",payload);
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

