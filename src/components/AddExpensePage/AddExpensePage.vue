<template>
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm></ExpenseForm>
    </div>
  </div>
</template>

<script>
import ExpenseForm  from "./ExpenseForm";
export default {
  components:{
    ExpenseForm
  }
}
</script>
