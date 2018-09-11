<template>
  <div>
    <div class="page-header">
      <div class="content-container">
        <h1 class="page-header__title">Add Expense</h1>
      </div>
    </div>  
    <div class="content-container">
      <ExpenseForm />
    </div>
  </div>
</template>

<script>
import ExpenseForm  from "./ExpenseForm";
export default {
  components:{
    ExpenseForm
  },
}
</script>

<style src = "./AddExpensePage.css" scoped>

</style>

