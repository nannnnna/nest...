<template>
  <div class="comments-container">
    <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment" />
  </div>
</template>

<script>
import CommentCard from './CommentCard.vue';

export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CommentCard,
  },
};
</script>




