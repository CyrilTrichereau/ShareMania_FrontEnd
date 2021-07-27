<template>
  <div class="postInteraction">
      <img src="../../../public/images/9gagLogoAndText250pxTinified.png" alt="9gag logo" class="postInteractionLogo9gag">
    <font-awesome-icon
      icon="share"
      class="text-light postInteractionIcon postInteractionIconShare"
    />
  </div>
</template>

<script>
export default {
  name: "PostIntercation",
};
</script>

<style scoped lang="scss">
.postInteraction {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0.2rem 0;
  width: 100%;
  &Logo9gag {
      width: 4rem;
  }
  &IconShare {
      font-size: 1.6rem;
      position: absolute;
      right: 2%;

  }
}
</style>
