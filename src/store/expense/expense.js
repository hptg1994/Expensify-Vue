import database from "../../firebase/firebase";

const getters = {
  allExpense: state => {
    return state;
  }
}

const mutations = {
  // add expense
  "addExpense": (state, expenseData) => {
    const uid = state.auth.uid
    const {
      description = "",
        note = "",
        aamount = "",
        createdAt = 0,
    } = expenseData;
    const expense = {
      description,
      note,
      amount,
      createdAt
    }
    
    /* return database.ref("users/${uid}/expenses").push(expense).then((ref) => {

    }) */
  },

  // remove expense
  "removeExpense": (state, payload) => {
    state.filter((item) => item.id !== payload)
  },

  "editExpense": (state, payload) => {
    state.map((expense) => {
      if (expense.id === payload.id) {
        return { ...expense,
          payload
        }
      } else {
        return expense;
      }
    })
  },
}

const actions = {
  addExpenseAction: ({
    commit
  }, payload) => {
    commit("addExpense", payload);
  },
  removeExpenseAction: ({
    commit
  }, payload) => {
    commit("removeExpense", payload);
  },
  editExpense: (state, payload) => {
    commit("editExpense", payload);
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
