<template>
    <div>
      <NavigationMenu />
      <h1>List of Books</h1>
      <div class="divider"></div>
      <div class="book-container">
        <div v-for="book in books" :key="book.title" class="book-card">
          <img src="путь_к_изображению" alt="Изображение книги">
          <div>
            <h4>{{ book.title }}</h4>
            <p>{{ book.price }}</p>
            <a href="#" class="btn btn-primary btn-buy">More</a>
            <!-- Форма покупки и другие элементы -->
          </div>
        </div>
      </div>
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



  