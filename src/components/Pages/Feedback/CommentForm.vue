<template>
  <form @submit.prevent="addComment" class="comment-form">
    <input type="text" v-model="newComment.name" placeholder="Имя" required class="comment-input">
    <input type="text" v-model="newComment.surname" placeholder="Фамилия" required class="comment-input">
    <textarea v-model="newComment.comment" placeholder="Комментарий" required class="comment-textarea"></textarea>
    <button type="submit" class="comment-submit">Отправить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newComment: {
        name: '',
        surname: '',
        comment: ''
      }
    };
  },
  methods: {
    addComment() {
      this.$emit('add-comment', {
        ...this.newComment,
        id: Date.now(),
        date: new Date().toLocaleString()
      });

      this.newComment.name = '';
      this.newComment.surname = '';
      this.newComment.comment = '';
    }
  }
};
</script>

