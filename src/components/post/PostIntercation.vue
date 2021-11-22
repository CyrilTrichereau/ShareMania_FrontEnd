<template>
  <div class="postInteraction bg-info">
    <div class="postInteractionBar">
      <OnFire @click="transmitMakeItOnFire" :isActive="isActiveOnFire" />
      <Comment @open-close-comment-block="openCloseComments" />
      <Cold @click="transmitMakeItCold" :isActive="isActiveCold" />
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
  props: {
    isLike: {
      type: Number,
      require: true,
    },
  },
  computed: {
    isActiveOnFire() {
      if (this.isLike === 1) {
        return true;
      } else {
        return false;
      }
    },
    isActiveCold() {
      if (this.isLike === -1) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    openCloseComments() {
      this.$emit("open-close-comment-block");
    },
    transmitMakeItOnFire() {
      this.$emit("make-it-on-fire");
    },
    transmitMakeItCold() {
      this.$emit("make-it-cold");
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
