<template>
  <div :class="['card', book.className]">
    <img class="card__logo" :src="book.logo" />
    <div class="card__title">Title: {{book.title}}</div>
    <div class="card__author">Author: {{book.author}}</div>
    <div class="card__date">Date Create: {{new Date(book.dtmCreate).toLocaleDateString('ru-RU')}}</div>
    <div class="card__footer">
      <button class="btn btn_primary" v-on:click="$emit('on-update', book.id)">
        <font-awesome-icon icon="edit" />
      </button>
      <button class="btn btn_danger" v-on:click="$emit('on-delete', book.id)">
        <font-awesome-icon icon="trash-alt" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
  },
};
</script>

<style scoped>
.card {
  width: 200px;
  border: 2px solid #bf2828cf;
  padding: 5px;
  box-shadow: 1px 1px 7px 0px #00000085;
  margin: 5px 10px;
  border-radius: 2px;
  font-size: 18px;
}

.card__logo {
  width: 100%;
}

.card__title {
  margin-top: 5px;
}

.card__author {
  margin-top: 5px;
}

.card__date {
  margin-top: 5px;
}

.card__footer {
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
}
</style>