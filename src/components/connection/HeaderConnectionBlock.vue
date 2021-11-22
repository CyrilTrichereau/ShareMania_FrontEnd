<template>
  <div class="headerConnectionBlock">
    <div class="headerConnectionBlockShareMania bg-primary">
      <img
        src="@/../public/images/groupomaniaLogoWhite100pxTinyfied.png"
        alt="ShareMania Logo"
        class="headerConnectionBlockShareManiaLogo"
      />
      <p class="h1 text-light headerConnectionBlockShareManiaText">
        ShareMania
      </p>
    </div>

    <div class="headerConnectionBlockPresentation">
      <h1 class="h5 text-primary headerConnectionBlockPresentationTitle">
        Bienvenue sur le réseau social interne de Groupomania.
      </h1>
      <p class="headerConnectionBlockPresentationText">
        Une connexion est requise pour pouvoir accéder au contenu. <br />
        ShareMania est réservé aux salariés du groupe.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderConnectionBlock",
};
</script>

<style scoped lang="scss">
.headerConnectionBlock {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;

  &ShareMania {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.3rem;
    padding: 1.5rem 0;
    &Logo {
      width: 2.7rem;
      margin: 0 0.5rem;
    }
    &Text {
      margin: 0;
    }
  }
  &Presentation {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1.5rem 0;
    width: 90%;
    &Title {
      font-weight: 700;
    }
    &Text {
      width: 89%;
      margin: 0;
    }
  }
}
</style>
