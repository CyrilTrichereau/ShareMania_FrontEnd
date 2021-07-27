<template>
  <div class="bg-primary text-light fixed-top headerMobile">
    <div class="headerMobileTrademark">
      <img
        src="../../../public/images/groupomaniaLogoWhite100pxTinyfied.png"
        alt="ShareMania Logo"
        class="headerMobileTrademarkLogo"
      />
      <p class="h5 text-light headerMobileTrademarkText">ShareMania</p>
    </div>
    <div class="headerMobileIconsBar">
      <font-awesome-icon
        icon="plus-circle"
        class="addPostIcon headerIcon text-light "
      />
      <font-awesome-icon
        icon="newspaper"
        class="feedIcon headerIcon text-light "
      />
      <MenuBurger class="menuIcon headerIcon text-light" />
      <font-awesome-icon icon="user" class="userIcon headerIcon text-light " />
      <img
        src="../../../public/images/testStatic/femaleProfile3.jpg"
        alt="Nom du profil"
        class="profilePicture"
      />
    </div>
  </div>
</template>

<script>
import MenuBurger from "@/components/header/menuBurger.vue";

export default {
  name: "HeaderMobile",
  components: {
    MenuBurger,
  },
};
</script>

<style scoped lang="scss">
.headerMobile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  &Trademark {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    &Logo {
      width: 2rem;
    }
    &Text {
      margin: 0;
    }
  }
  &IconsBar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
}
.headerIcon {
  font-size: 1.4rem;
}
.profilePicture {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
  object-position: center;
}

.userIcon {
  display: none;
}
</style>
