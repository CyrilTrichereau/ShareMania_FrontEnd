<template>
  <div id="menu">
    <font-awesome-icon
      @click="changingStateIsOpen"
      icon="bars"
      class="menuBurger"
    />
    <div class="menuBackground" v-if="isOpen">
      <nav class="card container bg-light menuList">
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
        <li class="text-dark menuListLinks" @click="changingStateIsOpen">
          <router-link
            to="/"
            class="text-primary btn btn-light menuListLinksItem"
            >Accueil</router-link
          >
        </li>
        <li class="text-dark menuListLinks" @click="changingStateIsOpen">
          <router-link
            to="/new-post"
            class="text-primary btn btn-light menuListLinksItem"
          >
            Nouvelle Publication
          </router-link>
        </li>
        <li class="text-dark menuListLinks" @click="changingStateIsOpen">
          <router-link
            to="/"
            class="text-primary btn btn-light menuListLinksItem"
          >
            Fil d'actualités
          </router-link>
        </li>
        <li class="text-dark menuListLinks" @click="changingStateIsOpen">
          <router-link
            to="/9gag"
            class="text-primary btn btn-light menuListLinksItem"
            >9GAG</router-link
          >
        </li>
        <li class="text-dark menuListLinks" @click="changingStateIsOpen">
          <router-link
            to="/"
            class="text-primary btn btn-light menuListLinksItem"
            >Reddit</router-link
          >
        </li>
        <li class="text-dark menuListLinks" @click="changingStateIsOpen">
          <router-link
            to="/my-profile"
            class="text-primary btn btn-light menuListLinksItem"
            >Mon profil</router-link
          >
        </li>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBurger",
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
  position: relative;
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
  &Burger {
    color: white;
  }
  &List {
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
    &Links {
      padding: 0;
      margin: 0 0 0 2rem;
      text-align: left;

      &Item {
        padding: 0;
        margin: 0;
        font-size: 1.4rem;
      }
    }
  }
}
</style>
