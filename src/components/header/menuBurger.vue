<template>
  <div class="menu">
    <div class="menuBurgerIconWrapper" @click="openCloseAndCheckIsNewPost">
      <MenuBurgerIcon />
    </div>
    <div
      class="menuBackground"
      v-show="$store.state.isOpen.headerMenu === 'menuBurger'"
      @click="openCloseAndCheckIsNewPost"
    >
      <nav class="card container bg-light menuList">
        <!-- SHAREMANIA LOGO -->
        <div
          class="menuListSharemaniaBackground"
          @click.stop="$store.dispatch('openOrCloseMenuHeader', 'none')"
        >
          <router-link
            to="/"
            class="text-primary btn btn-light menuListSharemania"
          >
            <img
              src="/images/groupomaniaLogoBlue100pxTinyfied.png"
              alt="ShareMania Logo"
              class="menuListSharemaniaLogo"
            />
            <p class="h3 text-primary menuListSharemaniaText">ShareMania</p>
          </router-link>
        </div>

        <!-- HOME LINK -->
        <ul
          class="text-dark btn btn-light menuListItem"
          @click.stop="$store.dispatch('openOrCloseMenuHeader', 'none')"
        >
          <router-link to="/" class="text-primary menuListItemLinks">
            <font-awesome-icon icon="home" class="menuListItemLinksIcon" />
            <p class="menuListItemLinksText">
              Accueil
            </p>
          </router-link>
        </ul>

        <!-- NEW POST LINK -->
        <ul class="text-dark btn btn-light menuListItem">
          <router-link
            to="/new-post"
            class="text-primary menuListItemLinks"
            @click.native.stop="
              $store.dispatch('openOrCloseMenuHeaderForce', 'newPost')
            "
          >
            <font-awesome-icon
              icon="plus-circle"
              class="menuListItemLinksIcon"
            />
            <p class="menuListItemLinksText">
              Nouvelle Publication
            </p>
          </router-link>
        </ul>

        <!-- HOME-FEED LINK -->
        <ul
          class="text-dark btn btn-light menuListItem"
          @click.stop="$store.dispatch('openOrCloseMenuHeader', 'none')"
        >
          <router-link to="/" class="text-primary menuListItemLinks">
            <font-awesome-icon icon="newspaper" class="menuListItemLinksIcon" />
            <p class="menuListItemLinksText">
              Fil d'actualités
            </p>
          </router-link>
        </ul>

        <!-- Giphy LINK -->
        <ul
          class="text-dark btn btn-light menuListItem"
          @click.stop="$store.dispatch('openOrCloseMenuHeader', 'none')"
        >
          <router-link to="/giphy" class="text-primary menuListItemLinks">
            <img
              src="/images/giphyLogo250pxTinyfied.png"
              alt="Redirection vers les posts Giphy"
              class="menuListItemLinksLogo"
            />
            <p class="menuListItemLinksText">
              Giphy
            </p>
          </router-link>
        </ul>

        <!-- My PROFILE LINK -->
        <ul
          class="text-dark btn btn-light menuListItem"
          @click.stop="$store.dispatch('openOrCloseMenuHeader', 'none')"
        >
          <router-link to="/my-profile" class="text-primary menuListItemLinks">
            <font-awesome-icon icon="user" class="menuListItemLinksIcon" />
            <p class="menuListItemLinksText">
              Mon profil
            </p>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import MenuBurgerIcon from "@/components/icons/MenuBurgerIcon.vue";

export default {
  name: "MenuBurger",
  components: {
    MenuBurgerIcon,
  },
  methods: {
    openCloseAndCheckIsNewPost() {
      if (this.$route.name === "newPost") {
        if (this.$store.state.isOpen.headerMenu === "menuBurger") {
          this.$store.dispatch("openOrCloseMenuHeaderForce", "newPost");
        } else {
          this.$store.dispatch("openOrCloseMenuHeaderForce", "menuBurger");
        }
      } else {
        this.$store.dispatch("openOrCloseMenuHeader", "menuBurger");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &Background {
    z-index: 2;
    width: 92%;
    top: 62px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 1000px;
    background: rgba(255, 255, 255, 0.9);
  }
  &List {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 2;
    width: 92%;
    padding: 1rem 3% 6rem 4%;
    margin-top: 1rem;
    &Sharemania {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      &Logo {
        width: 60px;
      }
      &Text {
        margin: 0;
      }
    }
    &Item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 92%;
      padding: 0;
      margin: 0 0 0 1rem;
      text-align: left;

      &Links {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        margin: 0;
        &Text {
          margin: 0;
          font-size: 1.6rem;
        }
        &Logo {
          width: 35px;
          border-radius: 5px;
        }
        &Icon {
          width: 35px;
          font-size: 1.9rem;
        }
      }
    }
  }
}
</style>
