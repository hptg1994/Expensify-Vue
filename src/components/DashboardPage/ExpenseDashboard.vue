<template>
  <div id = "ExpenseDashboard"> 
    <ExpensesSummary></ExpensesSummary>
    <expense-list-filters></expense-list-filters>
    <ExpenseList></ExpenseList>
  </div>
</template>

<script>
  import ExpensesSummary from "./ExpensesSummary";
  import ExpenseListFilters from "./ExpenseListFilters.vue"
  import ExpenseList from './ExpenseList.vue'
  export default {
    components:{
      ExpensesSummary,
      ExpenseListFilters,
      ExpenseList
    }
  }
</script>

<style scoped>

</style>

