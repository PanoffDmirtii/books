<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__title">BOOKS</div>
    </div>
    <div>
      <div class="header__nav">
        <router-link to="/list">LIST OF BOOKS</router-link>
        <router-link to="/add">ADD NEW BOOK</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header__title {
  display: flex;
  justify-content: center;
  font-size: 28px;
  padding: 5px 5px 10px;
  border-bottom: 1px solid #ccc;
}

.header__nav {
  padding: 10px 5px 5px;
  font-size: 22px;
}

a {
  margin-right: 15px;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid black;
}
</style>