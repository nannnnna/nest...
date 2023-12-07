<template>
  <div>
    <NavigationMenu />
    <h1>Feedback Form</h1>
    <div class="divider"></div>

    <!-- Форма для комментариев -->
    <form @submit.prevent="addComment">
      <input type="text" v-model="newComment.name" placeholder="Имя" required>
      <input type="text" v-model="newComment.surname" placeholder="Фамилия" required>
      <textarea v-model="newComment.comment" placeholder="Комментарий" required></textarea>
      <button type="submit">Отправить</button>
    </form>

    <!-- Отображение комментариев -->
    <div class="comments-container">
      <div v-for="comment in comments" :key="comment.id" class="comment-card">
        <p><strong>{{ comment.name }} {{ comment.surname }}</strong></p>
        <p class="comment-text">{{ comment.comment }}</p>
        <p class="comment-date">{{ comment.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from './NavigationMenu.vue';

export default {
  name: 'FeedbackForm',
  components: {
    NavigationMenu
  },
  data() {
    return {
      newComment: {
        name: '',
        surname: '',
        comment: ''
      },
      comments: []
    };
  },
  methods: {
    addComment() {
      const newComment = {
        ...this.newComment,
        id: Date.now(),
        date: new Date().toLocaleString() // Сохранение текущей даты и времени
      };
      this.comments.push(newComment);
      localStorage.setItem('comments', JSON.stringify(this.comments));

      this.newComment.name = '';
      this.newComment.surname = '';
      this.newComment.comment = '';
    }
  },
  mounted() {
    if (localStorage.getItem('comments')) {
      this.comments = JSON.parse(localStorage.getItem('comments'));
    }
  }
};
</script>
  