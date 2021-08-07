<template>
  <div class="postInteraction bg-info">
    <div class="postInteractionBar">
      <OnFire />
      <Comment @open-close-comment-block="openCloseComments" />
      <Cold />
    </div>
  </div>
</template>

<script>
import OnFire from "@/components/icons/OnFire.vue";
import Cold from "@/components/icons/Cold.vue";
import Comment from "@/components/icons/Comment.vue";

export default {
  name: "PostIntercation",
  components: {
    OnFire,
    Cold,
    Comment,
  },
  methods: {
    openCloseComments() {
      this.$emit("open-close-comment-block");
    },
  },
};
</script>

<style scoped lang="scss">
.postInteraction {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  &Bar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 400px;
  }
}
</style>
