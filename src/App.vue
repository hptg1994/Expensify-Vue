<template>
  <div id="app">
    <Header></Header>
    <router-view> </router-view>
  </div>
</template>
<script>
import Header from "./components/Header/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>
<style src = "./App.css"></style>
