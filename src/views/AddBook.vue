<template>
  <div class="wrapper">
    <form @submit.prevent="onSubmit">
      <div class="add-book">
        <h2>Add New Book</h2>
        <div class="add-book__title">
          <input type="text" placeholder="Title" v-model="book.title" maxlength="20" />
        </div>
        <div class="add-book__author">
          <input type="text" placeholder="Author" v-model="book.author" maxlength="20" />
        </div>
        <div class="add-book__logo">
          <input type="file" accept="image/*" placeholder="Logo" @change="onChange" ref="logoRef" />
        </div>
        <div class="add-book__button">
          <button type="submit" class="btn btn_success">
            <font-awesome-icon icon="plus-circle" />Add New Book
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { toBase64 } from "../utils";
import { addNewBookFromLocalStorage } from "../state";
export default {
  name: "add",
  data() {
    return {
      book: {
        title: "",
        author: "",
        logo: null,
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.book.title && this.book.author && this.book.logo) {
        const book = {
          id: Date.now(),
          title: this.book.title,
          author: this.book.author,
          logo: this.book.logo,
          dtmCreate: Date.now(),
          dtmUpdate: Date.now(),
        };
        addNewBookFromLocalStorage(book);
        this.$notify({
          type: "success",
          group: "notif",
          title: "Success",
          text: "Book was created",
        });
        this.clearForm();
      } else {
        this.$notify({
          type: "warn",
          group: "notif",
          title: "Warning",
          text: "Fill all fields",
        });
      }
    },
    async onChange(event) {
      this.book.logo = await toBase64(event.target.files[0]);
    },
    clearForm() {
      for (let key in this.book) {
        this.book[key] = "";
      }
      this.$refs.logoRef.value = "";
    },
  },
};
</script>

<style >
</style>