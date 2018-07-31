<template>
  <div class="content-container">
        <div class="input-group">
          <div class="input-group__item">
            <input
              type="text"
              class="text-input"
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div class="input-group__item">
            <select
              class="select"
              value={this.props.filters.sortBy}>
              <option :value="date">Date</option>
              <option :value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
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
      </div>
</template>

<script>
  export default {
    data:() => {
      
    }
  }
</script>
