<template>
  <div>
    <NavigationMenu />
    <h1>List of Books</h1>
    <div class="divider"></div>
    <SearchAndSortForm :searchQuery.sync="searchQuery" :selectedSort.sync="selectedSort" />
    <BookListContainer :books="filteredBooks" />
  </div>
</template>

<script>
import axios from 'axios';
import NavigationMenu from '../../NavigationMenu.vue';
import SearchAndSortForm from './SearchAndSortForm.vue';
import BookListContainer from './BookListContainer.vue';

export default {
  name: 'ListBooks',
  components: {
    NavigationMenu,
    SearchAndSortForm,
    BookListContainer
  },
  data() {
    return {
      books: [],
      selectedSort: 'title',
      searchQuery: '' // значение по умолчанию для сортировки
    };
  },
  computed: {
    // Фильтрация списка книг в соответствии с поисковым запросом
    filteredBooks() {
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
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
      console.error('There was an error fetching the books:', error);
    }
  }
};
</script>
