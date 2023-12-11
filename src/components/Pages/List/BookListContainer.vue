<template>
  <div class="book-container">
    <BookCard v-for="book in books" :key="book.title" :book="book" />
  </div>
</template>

<script>
import BookCard from './BookCard.vue';

export default {
  components: {
    BookCard
  },
  props: {
    books: Array
  }
};
</script>
