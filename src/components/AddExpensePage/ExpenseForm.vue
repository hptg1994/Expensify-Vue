<template>
  <form>
    <input type="text" v-model="expense.description" class="text-input" placeholder="Description">
    <input type="text" v-model="expense.amount" class="text-input" placeholder="Amount">
    <textarea name="note" id="note" cols="30" rows="10" v-model = "expense.note" class="textarea"></textarea>
    <div>
      <button type="submit" class="button" @click.prevent = "addExpenseAction(this.expense)">Save Expense</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
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
  computed:{
    ...mapActions([
      "addExpenseAction"
    ]),
    // submitted:() => {
    //   this.addExpenseAction(this.expense)
    // }
  }
};

</script>

<style>

</style>



