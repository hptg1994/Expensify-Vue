<template>
  <!-- <router-link class="list-item" to = "/edit/:id"> -->
  <div>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{formatDate()}</span>
    </div>
    <h3 className="list-item__data">{formatAmount()}</h3>
    </div>
  <!-- </router-link> -->
</template>


<script>
  import moment from "moment";
  import numeral from 'numeral';
  export default {
    methods:{
      formatDate:() => {
        return moment(createAt).format("MMMM Do,YYYY");
      },
      formatAmount:() => {
        return numeral(amount / 100).format('$0,0.00');
      }
    }
  }

</script>