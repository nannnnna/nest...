<template>
  <div class="book-card">
    <img :src="book.image" :alt="`Изображение ${book.title}`">
    <div>
      <h4>{{ book.title }}</h4>
      <p>{{ book.price }}</p>
      <a :href="book.bookUrl" class="btn btn-primary btn-buy">More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: Object
  }
};
</script>


