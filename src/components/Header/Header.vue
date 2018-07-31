<template>
  <header class="header">
    <div class="content-container">
      <div class="header__content">
        <router-link to="/" class="header__title">
          <h1>Expensify</h1>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style>
.header {
  background: #364051;
}

.header__content {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;
}

.header__title {
  color: white;
  text-decoration: none;
}

.header__title h1 {
  margin: 0;
}
</style>

