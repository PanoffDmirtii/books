<template>
  <div id="app">
    <Header />
    <router-view />
    <notifications group="notif" position="bottom right"/>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  width: 1200px;
  margin: 0 auto;
}

.wrapper {
  padding: 20px;
}

.btn {
  color: #fff;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  font-weight: 400;
  cursor: pointer;
  margin: 5px 5px;
}

.btn_primary {
  background-color: #007bff;
  border: 1px solid #007bff;
}

.btn_danger {
  background-color: #bd0b0b;
  border: 1px solid #bd0b0b;
}

.btn_success {
  background-color: #14bd22;
  border: 1px solid #14bd22;
}

.list-books {
  text-align: center;
}

.books {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.add-book {
  padding: 0 5px;
  text-align: center;
}

.add-book__title {
  margin-bottom: 10px;
}

.add-book__author {
  margin-bottom: 10px;
}

input {
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  width: 30%;
}
</style>
