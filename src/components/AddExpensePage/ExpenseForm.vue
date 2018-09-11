<template>
  <form class="form">
    <input type="text" v-model="expense.description" class="text-input" placeholder="Description">
    <input type="number" v-model="expense.amount" class="text-input" placeholder="Amount">
    <div class="expenseForm-datapicker">
      <datepicker v-model="expense.date" name="date" placeholder="Date"></datepicker>
    </div>
    <textarea name="note" id="note" cols="30" rows="10" v-model = "expense.note" class="textarea" placeholder="Add a note for your expense (optional)"></textarea>
    <div>
      <button type="submit" class="button" @click.prevent = "addExpense(expense)">Save Expense</button>
    </div>
  </form>
</template>
<script>
import { mapActions } from "vuex";
import Datepicker from 'vuejs-datepicker';
export default {
  data:() => ({
    expense:{
      description:"",
        amount:0,
        date:null,
        note:""
      }
    }
  ),
  methods:{
    addExpense(content){
      this.$store.commit("addExpense",content)
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



