<template>
  <div id = "ExpenseDashboard"> 
    <ExpensesSummary></ExpensesSummary>
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

