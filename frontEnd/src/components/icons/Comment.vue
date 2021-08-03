<template>
  <button :class="openCloseCommentIconStyle" @click="openCloseCommentBlock">
    <font-awesome-icon icon="comment-alt" class="backColorIcon" />
  </button>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      commentsAreOpen: false,
      openCommentIconStyle: "text-light bg-secondary backColor",
      closedCommentIconStyle: "text-primary backColor",
    };
  },
  methods: {
    openCloseCommentBlock() {
      this.$emit("open-close-comment-block");
      if (this.commentsAreOpen === false) {
        this.commentsAreOpen = true;
      } else {
        this.commentsAreOpen = false;
      }
    },
  },
  computed: {
    openCloseCommentIconStyle() {
      if (this.commentsAreOpen === true) {
        return this.openCommentIconStyle;
      } else {
        return this.closedCommentIconStyle;
      }
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
