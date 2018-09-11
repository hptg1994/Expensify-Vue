<template>
  <div class="content-container">
    <div class="input-group">

      <div class="input-group__item">
        <input
          type="text"
          class="text-input"
          placeholder="Search expenses"
          v-model="serching"
        />
      </div>

      <div class="input-group__item">
        <select class="select" v-model="selectSortWay">
          <option v-for="(option,index) in options" :key="index">{{ option }}</option>
        </select>
      </div>


      <div class="input-group__item">
        <div class="input-date">
          <datepicker v-model="startDate" name="startDate" placeholder="Start Date"></datepicker>
        </div>
      </div>

      <div class="input-group__item">
        <div class="input-date">
          <datepicker v-model="endDate" name="endDate" placeholder="End Date"></datepicker>
        </div>
      </div>
      
      <!--  <DateRangePicker
         startDate={this.props.filters.startDate}
         endDate={this.props.filters.endDate}
         onDatesChange={this.onDatesChange}
         focusedInput={this.state.calendarFocused}
         onFocusChange={this.onFocusChange}
         showClearDates={true}
         numberOfMonths={1}
         isOutsideRange={() => false}
       /> -->
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  export default {
    data: () => {
      return {
        serching: "",
        selectSortWay: "Date",
        options: ["Date", "Amount"],
        startDate: null,
        endDate: null
      }
    },
    components:{
      Datepicker
    }
  }
</script>

<style src="./ExpenseListFilters.css">
</style>

