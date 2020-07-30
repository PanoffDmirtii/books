<template>
  <div class="not-book">
    <span>В лавке пусто...</span>
    <img src="@/assets/notBook.png" alt />
  </div>
</template>

<script>
export default {};
</script>

<style>
.not-book {
  border-radius: 5px;
  border: 2px solid #000000d1;
  width: 400px;
  font-size: 28px;
  font-weight: 700;
  margin: 0 auto;
  box-shadow: 1px 1px 7px 0px #00000085;
}

span {
  display: block;
  margin: 5px;
  text-align: center;
}

img {
  display: block;
  margin: 5px auto;
}
</style>