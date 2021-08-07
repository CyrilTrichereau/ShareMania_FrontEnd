<template>
  <button class="backColor" :class="{ 'text-light bg-secondary': commentsAreOpen, 'text-primary': !commentsAreOpen }" @click="openCloseCommentBlock">
    <font-awesome-icon icon="comment-alt" class="backColorIcon" />
  </button>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      commentsAreOpen: false,
    };
  },
  methods: {
    openCloseCommentBlock() {
      this.$emit("open-close-comment-block");
      this.commentsAreOpen = !this.commentsAreOpen;
    },
  },
};
</script>

<style scoped lang="scss">
.backColor {
  padding: 1.5rem;
  border-radius: 25px 25px 0 0;
  margin: 0;
  border: none;
  background: none;
  &Icon {
    font-size: 2rem;
  }
}
</style>
