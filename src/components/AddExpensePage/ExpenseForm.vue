<template>
  <form class="form">
    <input type="text" v-model="expense.description" class="text-input" placeholder="Description">
    <input type="number" v-model="expense.amount" class="text-input" placeholder="Amount">
    <div class="expenseForm-datapicker">
      <datepicker v-model="endDate" name="endDate" placeholder="Date"></datepicker>
    </div>
    <textarea name="note" id="note" cols="30" rows="10" v-model = "expense.note" class="textarea" placeholder="Add a note for your expense (optional)"></textarea>
    <div>
      <button type="submit" class="button" @click.prevent = "addExpenseAction(this.expense)">Save Expense</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import Datepicker from 'vuejs-datepicker';
export default {
  data:() => {
    return {
      expense:{
        description:"",
        amount:0,
        note:""
      }
    }
  },
  components:{
    Datepicker
  }
  /* computed:{
    ...mapActions([
      "addExpenseAction"
    ]), */
    // submitted:() => {
    //   this.addExpenseAction(this.expense)
    // }
}

</script>

<style src="./ExpenseForm.css">

</style>



