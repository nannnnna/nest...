<template>
    <div>
      <NavigationMenu />
      <h1>List of Books</h1>
      <div class="divider"></div>
      <select v-model="selectedSort" @change="sortBooks">
        <option value="title">Сортировка по алфавиту названий</option>
        <option value="price_asc">Сортировка по возрастанию цены</option>
        <option value="price_desc">Сортировка по убыванию цены</option>
      </select>
      <div class="book-container">
        <div v-for="book in books" :key="book.title" class="book-card">
          <img src="/images/img.png" alt="Изображение книги">
          <div>
            <h4>{{ book.title }}</h4>
            <p>{{ book.price }}</p>
            <a :href="book.bookUrl" class="btn btn-primary btn-buy">More</a>
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
      books: [],
      selectedSort: 'title' // значение по умолчанию для сортировки
    };
  },
  methods: {
    sortBooks() {
      if (this.selectedSort === 'title') {
        this.books.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        this.books.sort((a, b) => {
          // Извлечение числового значения из строки цены
          const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));

          // Сортировка по возрастанию или убыванию цены
          return this.selectedSort === 'price_asc' ? priceA - priceB : priceB - priceA;
        });
      }
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3001/books/scrape');
      this.books = response.data;
      this.sortBooks(); // Сортировать книги сразу после получения
    } catch (error) {
      console.error("There was an error fetching the books:", error);
    }
  }
};
</script>



  