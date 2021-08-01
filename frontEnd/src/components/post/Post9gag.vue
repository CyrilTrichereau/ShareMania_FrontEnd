<template>
  <div class="container card bg-dark post9gag">
    <div class="post9gagHeader">
      <img
        src="@/../public/images/9gagLogoAndText250pxTinified.png"
        alt="9gag logo"
        class="post9gagHeaderLogo9gag"
      />
      <font-awesome-icon
        icon="share"
        class="text-light post9gagHeaderIconShare"
      />
    </div>
    <img
      src="@/../public/images/testStatic/funFrogs.jpg"
      alt="Mettre le commentaire"
      class="post9gagPicture"
    />
    <p class="post9gagComment text-light bg-primary">
      Trop cool la grenouille !
    </p>
  </div>
</template>

<script>
export default {
  name: "Post9gag",
};
</script>

<style scoped lang="scss">
.post9gag {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 1rem 0;
  width: 92%;
  max-width: 900px;
  &Header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0.2rem 0;
    padding: 0.5rem 0;
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
  &Picture {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  &Comment {
    margin: 0rem;
    padding: 0.5rem 0;
    width: 100%;
  }
}
</style>
