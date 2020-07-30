<template>
  <div class="wrapper">
    <div class="list-books">
      <h2>LIST OF BOOKS</h2>
    </div>
    <div class="books" v-if="books.length > 0">
      <Book
        v-for="book in books"
        :key="book.id"
        v-bind:book="book"
        @on-delete="deleteBook"
        @on-update="openUpdateBook"
      />
    </div>
    <NotBook v-else />
  </div>
</template>

<script>
import Book from "../components/Book";
import NotBook from "../components/NotBook";
import { getBooksFromLocalStorage, deleteBookFromLocalStorage } from "../state";
import router from "../router";
export default {
  name: "list",
  components: {
    Book,
    NotBook,
  },
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.books = getBooksFromLocalStorage();
  },
  methods: {
    deleteBook(bookId) {
      this.books = deleteBookFromLocalStorage(bookId);
       this.$notify({
          type: 'error',
          group: "notif",
          title: "Warning",
          text: "Book was deleted",
        });
    },
    openUpdateBook(id) {
      router.push({ path: `/update/${id}` });
    },
  },
};
</script>

<style scoped>
</style>