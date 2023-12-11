<template>
  <div class="comment-card">
    <p class="comment-author">{{ comment.name }} {{ comment.surname }}</p>
    <p class="comment-text">{{ comment.comment }}</p>
    <p class="comment-date">{{ comment.date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>


