<template>
  <div id="app"> 
    <Header></Header>
    <router-view> </router-view>
  </div>
</template>
<script>
import Header from './components/Header/Header'
export default {
  name: 'app',
  components:{
    Header
  },
  data () {
    return {
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  color: #333;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
  line-height: 1.6;
}

button {
  cursor: pointer;
}

.button {
  background: #1c88bf;
  border: none;
  color: white;
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1;
  padding:1.2rem;
  text-decoration: none;
}

.button--link {
  background: none;
}

.button--secondary {
  background: #888;
}

.content-container {
  margin: 0 auto;
  padding: 0 1.6rem;
  max-width: 80rem;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
}

.form input{
  margin-bottom: 1.6rem;
}

.list-header {
  background: #f7f7f7;
  border: 1px solid darken(#f7f7f7, 7%);
  color: #666;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
}

.list-body {
  margin-bottom: 1.6rem;
}

.list-item {
  border: 1px solid darken(#f7f7f7, 7%);
  border-top: none;
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  text-decoration: none;
  transition: background .3s ease;
}

.list-item:hover{
  background: #f7f7f7;
}

.list-item--message {
  align-items: center;
  color: #666;
  justify-content: center;
  padding: 1.6rem;  
}

.list-item--message:hover {
  background: none;
}

.list-item__title {
  margin: 0;
  word-break: break-all;
}

.list-item__sub-title {
  color: #666;
  font-size: 1.4rem;
}

.list-item__data {
  margin: 1.2rem 0 0 0;
}

.input-group {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.6rem;
  justify-content: center;
  align-items: center;
}

.input-group__item {
  margin-bottom: 1.2rem;
}

.text-input,.select{
  border: 1px solid #cacccd;
  height: 50px;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1.2rem;
}

.textarea {
  border: 1px solid #cacccd;
  height: 50px;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1.2rem;
  height: 10rem;
}

</style>
