<template>
  <div class="bg-primary text-light fixed-top d-lg-none headerMobile">
    <div class="headerMobileBlock">
      <router-link
        to="/"
        class="btn btn-primary headerMobileBlockTrademark"
        @click.native="$store.dispatch('openOrCloseMenuHeader', 'none')"
      >
        <img
          src="/images/groupomaniaLogoWhite100pxTinyfied.png"
          alt="ShareMania Logo"
          class="headerMobileBlockTrademarkLogo"
        />
        <p class="h5 text-light headerMobileBlockTrademarkText">ShareMania</p>
      </router-link>
      <div
        class="headerMobileBlockMenuBar"
        v-if="$store.state.profile.myProfile.alias"
      >
        <router-link
          to="/new-post"
          :class="{
            headerMobileBlockMenuBarWrapperOpen:
              $store.state.isOpen.headerMenu === 'newPost',
            headerMobileBlockMenuBarWrapperOpenNewPost:
              $store.state.isOpen.headerMenu === 'newPost',
            headerMobileBlockMenuBarWrapper:
              $store.state.isOpen.headerMenu === !'newPost',
          }"
          @click.native="
            $store.dispatch('openOrCloseMenuHeaderForce', 'newPost')
          "
        >
          <font-awesome-icon
            icon="plus-circle"
            class="text-light headerMobileBlockMenuBarWrapperIcon headerMobileBlockMenuBarWrapperIconAddPost"
          />
        </router-link>
        <div
          :class="{
            headerMobileBlockMenuBarWrapperOpen:
              $store.state.isOpen.headerMenu === 'menuBurger',
            headerMobileBlockMenuBarWrapperOpenMenuBurger:
              $store.state.isOpen.headerMenu === 'menuBurger',
            headerMobileBlockMenuBarWrapper:
              $store.state.isOpen.headerMenu !== 'menuBurger',
          }"
          @click="$store.dispatch('openOrCloseMenuHeader', 'menuBurger')"
        >
          <MenuBurger />
        </div>
        <div
          :class="{
            headerMobileBlockMenuBarWrapperOpen:
              $store.state.isOpen.headerMenu === 'menuProfile',
            headerMobileBlockMenuBarWrapperOpenMenuProfile:
              $store.state.isOpen.headerMenu === 'menuProfile',
            headerMobileBlockMenuBarWrapper:
              $store.state.isOpen.headerMenu === !'menuProfile',
          }"
        >
          <MenuProfile />
        </div>
      </div>

      <router-link to="/login" class="headerMobileBlockLogIn" v-else>
        <font-awesome-icon
          icon="user"
          class="text-light headerMobileBlockLogInIcon"
        />
        <div class="headerMobileBlockLogInContent">
          <p class="text-light headerMobileBlockLogInContentText">
            Inscription
          </p>
          <p class="text-light headerMobileBlockLogInContentText">Connexion</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import MenuBurger from "@/components/header/MenuBurger.vue";
import MenuProfile from "@/components/header/MenuProfile.vue";

export default {
  name: "HeaderMobile",
  components: {
    MenuBurger,
    MenuProfile,
  },
};
</script>

<style scoped lang="scss">
.headerMobile {
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  &Block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    width: 100%;
    padding: 0 2.5%;
    gap: 1rem;
    &Trademark {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      width: 45%;
      padding: 0;
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
      margin: 0;
      padding: 0;
      &Wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: none;
        width: 40px;
        height: 100%;
        margin: 0;
        padding: 0;
        &Open {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 54px;
          margin-top: 8px;
          padding: 0;
          border-radius: 15px 15px 0 0;
          background: #938f60;
          &MenuBurger {
            width: 50px;
          }
          &MenuProfile {
            width: 50px;
          }
          &NewPost {
            width: 50px;
          }
        }
        &Icon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 1.8rem;
        }
      }
    }

    &LogIn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      height: 100%;
      margin: 0 1rem;
      &Icon {
        font-size: 1.7rem;
      }
      &Content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0;
        &Text {
          margin: 0;
        }
      }
    }
  }
  &BottomDecoration {
    height: 0.5rem;
    width: 100%;
    border-radius: 25px 25px 0 0;
    margin: 0;
    padding: 0;
  }
}
</style>
