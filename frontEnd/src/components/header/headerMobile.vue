<template>
  <div class="bg-primary text-light fixed-top d-lg-none headerMobile">
    <div class="headerMobileBlock">
      <router-link to="/" class="btn btn-primary headerMobileBlockTrademark">
        <img
          src="@/../public/images/groupomaniaLogoWhite100pxTinyfied.png"
          alt="ShareMania Logo"
          class="headerMobileBlockTrademarkLogo"
        />
        <p class="h5 text-light headerMobileBlockTrademarkText">ShareMania</p>
      </router-link>
      <div class="headerMobileBlockMenuBar">
        <router-link to="/new-post" class="btn btn-primary headerMobileBlockMenuBarWrapper">
          <font-awesome-icon
            icon="plus-circle"
            class="text-light headerMobileBlockMenuBarWrapperIcon headerMobileBlockMenuBarWrapperIconAddPost"
          />
        </router-link>
        <div class="headerMobileBlockMenuBarWrapper">
          <MenuBurger
            class="headerMobileBlockMenuBarWrapperIcon headerMobileBlockMenuBarWrapperIconMenu"
          />
        </div>
        <router-link to="/login" class="btn btn-primary headerMobileBlockMenuBarWrapper d-none">
          <font-awesome-icon
            icon="user"
            class="text-light headerMobileBlockMenuBarWrapperIcon headerMobileBlockMenuBarWrapperIconUser"
          />
        </router-link>
        <router-link to="/my-profile" class="btn btn-primary headerMobileBlockMenuBarWrapper">
          <img
            src="@/../public/images/testStatic/femaleProfile3.jpg"
            alt="Nom du profil"
            class="headerMobileBlockMenuBarWrapperProfilePicture"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBurger from "@/components/header/MenuBurger.vue";

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
    &MenuBar {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 55%;
      &Wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        &Icon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 1.8rem;
          &User {
          }
          &AddPost {
          }
          &Menu {
          }
        }
        &ProfilePicture {
          width: 100%;
          height: 100%;
          border-radius: 500px;
          object-fit: cover;
          object-position: center;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>
