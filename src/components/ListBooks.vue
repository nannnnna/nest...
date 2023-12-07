<template>
    <div>
      <NavigationMenu />
      <h1>List of Books</h1>
      <div class="divider"></div>
      <ul>
        <li v-for="book in books" :key="book.title">
          <h3>{{ book.title }}</h3>
          <p>URL: <a :href="book.bookUrl">{{ book.bookUrl }}</a></p>
          <p>Price: {{ book.price }}</p>
          <p>Status: {{ book.status }}</p>
        </li>
      </ul>
    </div>
  </template>

<script>
import axios from 'axios';
import NavigationMenu from './NavigationMenu.vue';

export default {
  name: 'ListBooks',
  components: {
    NavigationMenu
  },
  data() {
    return {
      books: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3001/books/scrape');
      this.books = response.data;
    } catch (error) {
      console.error("There was an error fetching the books:", error);
    }
  }
};
</script>



  