<template>
  <button
    class="backColor"
    :class="{
      'text-light bg-secondary': commentsAreOpen,
      'text-primary': !commentsAreOpen,
    }"
    @click="openCloseCommentBlock"
  >
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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  padding: 35px;
  margin: 0;
  border-radius: 25px 25px 0 0;
  border: none;
  background: none;
  &:hover {
    & > .backColorIcon {
      scale: 1.2;
      transform-origin: bottom;
    }
  }
  &Icon {
    font-size: 2rem;
    position: absolute;
    bottom: 10%;
  }
}
</style>
