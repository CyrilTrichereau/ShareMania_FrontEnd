<template>
  <div class="menu">
    <div
      class="btn btn-primary menuBurgerIconWrapper"
      @click="changingStateIsOpen"
    >
      <MenuBurgerIcon />
    </div>
    <div class="menuBackground" v-if="isOpen">
      <nav class="card container bg-light menuList">
        <!-- SHAREMANIA LOGO -->
        <div class="menuListSharemaniaBackground" @click="changingStateIsOpen">
          <router-link
            to="/"
            class="text-primary btn btn-light menuListSharemania"
          >
            <img
              src="@/../public/images/groupomaniaLogoBlue100pxTinyfied.png"
              alt="ShareMania Logo"
              class="menuListSharemaniaLogo"
            />
            <p class="h3 text-primary menuListSharemaniaText">ShareMania</p>
          </router-link>
        </div>

        <!-- HOME LINK -->
        <ul
          class="text-dark btn btn-light menuListItem"
          @click="changingStateIsOpen"
        >
          <router-link to="/" class="text-primary menuListItemLinks">
            <font-awesome-icon icon="home" class="menuListItemLinksIcon" />
            <p class="menuListItemLinksText">
              Accueil
            </p>
          </router-link>
        </ul>

        <!-- NEW POST LINK -->
        <ul
          class="text-dark btn btn-light menuListItem"
          @click="changingStateIsOpen"
        >
          <router-link to="/new-post" class="text-primary menuListItemLinks">
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
          @click="changingStateIsOpen"
        >
          <router-link to="/" class="text-primary menuListItemLinks">
            <font-awesome-icon icon="newspaper" class="menuListItemLinksIcon" />
            <p class="menuListItemLinksText">
              Fil d'actualités
            </p>
          </router-link>
        </ul>

        <!-- 9GAG LINK -->
        <ul
          class="text-dark btn btn-light menuListItem"
          @click="changingStateIsOpen"
        >
          <router-link to="/9gag" class="text-primary menuListItemLinks">
            <img
              src="@/../public/images/logo9gagTinified.png"
              alt="Redirection vers les posts 9GAG"
              class="menuListItemLinksLogo"
            />
            <p class="menuListItemLinksText">
              9GAG
            </p>
          </router-link>
        </ul>

        <!-- REDDIT LINK -->
        <ul
          class="text-dark btn btn-light menuListItem"
          @click="changingStateIsOpen"
        >
          <router-link to="/" class="text-primary menuListItemLinks">
            <img
              src="@/../public/images/logoRedditTinified300px.png"
              alt="Redirection vers les posts Reddit"
              class="menuListItemLinksLogo"
            />
            <p class="menuListItemLinksText">
              Reddit
            </p>
          </router-link>
        </ul>

        <!-- My PROFILE LINK -->
        <ul
          class="text-dark btn btn-light menuListItem"
          @click="changingStateIsOpen"
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
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    changingStateIsOpen() {
      if (this.isOpen === false) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  height: 100%;
  &Background {
    z-index: 2;
    width: 92%;
    top: 62px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 1000px;
    background: white;
  }
  &BurgerIconWrapper{
    padding: 0.1rem;
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
