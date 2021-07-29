<template>
  <div class="bg-primary text-light fixed-top d-lg-none headerMobile">
    <div class="headerMobileBlock">
      <div class="headerMobileBlockTrademark">
        <img
          src="../../../public/images/groupomaniaLogoWhite100pxTinyfied.png"
          alt="ShareMania Logo"
          class="headerMobileBlockTrademarkLogo"
        />
        <p class="h5 text-light headerMobileBlockTrademarkText">ShareMania</p>
      </div>
      <div class="headerMobileBlockIconsBar">
        <font-awesome-icon
          icon="plus-circle"
          class="addPostIcon headerIcon text-light "
        />
        <MenuBurger class="menuIcon headerIcon text-light" />
        <font-awesome-icon
          icon="user"
          class="userIcon headerIcon text-light "
        />
        <img
          src="../../../public/images/testStatic/femaleProfile3.jpg"
          alt="Nom du profil"
          class="profilePicture"
        />
      </div>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  &Block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    width: 100%;
    padding: 0.5rem;
    gap: 1rem;
    &Trademark {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 45%;
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
      justify-content: space-around;
      align-items: center;
      width: 55%;
    }
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
