<template>
  <div class="ExpenseSummary">
    <div class="page-header">
      <div class="content-container">
        <p class="page-header__title">Viewing <span>{{expenseCount}}</span> {{ CountExpenseWord() }},Total <span>{{formattedExpansesTotal()}}</span></p>
        <div class="page-header__actions">
          <router-link class="button" to="/create">Add Expense</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from 'numeral';
export default {
  data:() => {
    return {
      expenseCount:0,
      expenseTotal:0
    }
  },

  methods:{
    formattedExpansesTotal:() => {
      return numeral(this.expenseTotal/100).format("$0,0.00");
    },
    CountExpenseWord:() => {
      return this.expenseCount < 1 ? "expense":"expenses";
    }
  },
}
</script>

<style src = "./ExpensesSummary.css"></style>
