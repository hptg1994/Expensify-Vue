import database from "../../firebase/firebase";
import uuidv1 from 'uuid/v1'

const state = {
  expenses:[]
}
const getters = {
  allExpense: state => {
    return state.expense;
  }
}

const mutations = {
  // add expense
  "addExpense": (state, expenseData) => {
    const uuid = uuidv1();
    const {
      description = "",
        note = "",
        amount = "",
    } = expenseData;
    const expense = {
      uuid,
      description,
      note,
      amount,
    }
    console.log(expense);
    state.expenses.push(expense);
    /* return database.ref("users/${uid}/expenses").push(expense).then((ref) => {

    }) */
  },

  // remove expense
  "removeExpense": (state, payload) => {
    state.filter((item) => item.uuid !== payload)
  },

  "editExpense": (state, payload) => {
    state.map((expense) => {
      if (expense.uuid === payload.id) {
        return { 
          ...expense,
          payload
        }
      } else {
        return expense;
      }
    })
  },
}

const actions = {
  addExpense: ({
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
