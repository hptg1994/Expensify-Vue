<template>
  <div class="content-container">
    <div class="list-header">
      <div class="show-for-mobile">Expenses</div>
      <div class="show-for-desktop">Expense</div>
      <div class="show-for-desktop">Amount</div>
    </div>
    <div class="list-body">
      {
        props.expenses.length === 0 ? (
          <div class="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />;
            })
          )
      }
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
