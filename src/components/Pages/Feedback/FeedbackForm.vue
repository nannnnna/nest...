<template>
  <div>
    <NavigationMenu />
    <h1>Feedback Form</h1>
    <div class="divider"></div>

    <CommentForm @add-comment="addComment" />

    <CommentContainer :comments="comments" />
  </div>
</template>
<script>
import NavigationMenu from '../../NavigationMenu.vue';
import CommentContainer from './CommentContainer.vue';
import CommentForm from './CommentForm.vue';

export default {
  name: 'FeedbackForm',
  components: {
    NavigationMenu,
    CommentContainer,
    CommentForm,
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
    addComment(newComment) {
      this.comments.push(newComment);
      localStorage.setItem('comments', JSON.stringify(this.comments));
    }
  },
  mounted() {
    if (localStorage.getItem('comments')) {
      this.comments = JSON.parse(localStorage.getItem('comments'));
    }
  }
};
</script>
  