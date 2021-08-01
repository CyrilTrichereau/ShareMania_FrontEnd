<template>
      <div class="fromGroupomania">
        <p class="text-dark h6 fromGroupomaniaText">
          Une marque du groupe
        </p>
        <img
          src="@/../public/images/groupomaniaLogo320pxTinyfied.png"
          alt="Groupomania Logo"
          class="fromGroupomaniaLogo"
        />
    </div>
</template>

<script>
export default {
  name: "FooterConnectionBlock",
};
</script>

<style scoped lang="scss">
    .fromGroupomania {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 1rem 0;
      &Text {
        margin: 1rem 0 0rem 0;
        font-size: 0.9rem;
      }
      &Logo {
        width: 170px;
      }
    }
</style>
