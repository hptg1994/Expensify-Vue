<template>
  <div class="content-container">
    <div class="list-header">
      <div class="show-for-mobile">Expenses</div>
      <div class="show-for-desktop">Expense</div>
      <div class="show-for-desktop">Amount</div>
    </div>
    <div class="list-body">
      <div class="list-item list-item--message" v-if="this.expenses.length === 0">
        <span>No expenses</span>
      </div>

      <div v-else v-for="(expense,index) in expenses" :key="index">
        <ExpenseListItem key={expense.id} {...expense}/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data: () => {
      return {
        expenses: [],
      }
    },
    methods: {},
    computed: {
      ...mapGetters([
        "allExpense",
      ])
    }
  }
</script>
