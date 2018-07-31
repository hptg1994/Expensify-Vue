<template>
  <div class="ExpenseSummary">
    <div class="page-header">
      <div class="content-container">
        <h1 class="page-header__title">Viewing <span>{{expenseCount}}</span> {{ expenseWord }} totalling <span>{{formattedExpansesTotal}}</span></h1>
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
      expenseWord:"",
      expenseCount:0,
      expenseTotal:0
    }
  },

  methods:{
    formattedExpansesTotal:() => {
      numeral(this.expenseTotal/100).format("$0,0.00");
    }
  },

  watch:{
    expenseWord:function(){
      return this.expenseCount === 1 ? "expense":"expenses";
    },
  }  

}
</script>
