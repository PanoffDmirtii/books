<template>
  <div class="wrapper">
    <div>
      <form @submit.prevent="onSubmit">
        <div class="add-book">
          <h2>Update Book</h2>
          <div class="add-book__title">
            <input type="text" placeholder="Title" v-model="book.title" />
          </div>
          <div class="add-book__author">
            <input type="text" placeholder="Author" v-model="book.author" />
          </div>
          <div class="add-book__logo">
            <input type="file" accept="image/*" placeholder="Logo" @change="onChange" ref="logoRef" />
          </div>
          <div class="add-book__button">
            <button type="submit" class="btn btn_primary">
              <font-awesome-icon icon="pen" />Update
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { updateBookFromLocalStorage, getBookfromLocalStorage } from "../state";
import { toBase64 } from "../utils";
import router from "../router";
export default {
  data() {
    return {
      book: {
        title: "",
        author: "",
        logo: null,
        dtmCreate: "",
        dtmUpdate: "",
      },
    };
  },
  mounted() {
    const { id } = router.history.current.params;
    const book = getBookfromLocalStorage(id);
    if (book) {
      this.book = book;
    } else {
      router.push("/list");
    }
  },
  methods: {
    onSubmit() {
      if (this.book.title && this.book.author && this.book.logo) {
        const book = {
          id: this.book.id,
          title: this.book.title,
          author: this.book.author,
          logo: this.book.logo,
          dtmCreate: this.book.dtmCreate,
          dtmUpdate: Date.now(),
        };
        updateBookFromLocalStorage(book);
        this.$notify({
          type: "success",
          group: "notif",
          title: "Success",
          text: "Book was updated",
        });
        this.clearForm();
      } else {
        this.$notify({
          type: "success",
          group: "notif",
          title: "Success",
          text: "Book was created",
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

<style>
</style>