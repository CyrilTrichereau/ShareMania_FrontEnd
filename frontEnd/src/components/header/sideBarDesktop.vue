<template>
  <div class="bg-primary text-light d-none d-lg-flex sideBar">
    <!-- SHAREMANIA -->
    <router-link to="/" class="btn btn-primary sideBarTrademark">
      <img
        src="/images/groupomaniaLogoWhite100pxTinyfied.png"
        alt="ShareMania Logo"
        class="sideBarTrademarkLogo"
      />
      <p class="h2 text-light sideBarTrademarkText">ShareMania</p>
    </router-link>

    <!-- PROFILE BLOCK -->
    <div class="sideBarProfile">
      <router-link
        to="/my-profile"
        class="sideBarProfilePictureBackground"
        v-if="$store.state.profile.myProfile.alias"
        @click.native="$store.dispatch('changeProfileModifyOrShowForce', false)"
      >
        <img
          :src="$store.state.profile.myProfile.urlPicture"
          :alt="'Photo de profil de ' + $store.state.profile.myProfile.alias"
          class="sideBarProfilePicture"
        />
      </router-link>
      <router-link to="/login" class="sideBarProfileUser" v-else>
        <font-awesome-icon
          icon="user"
          class="text-light sideBarProfileUserIcon"
        />
        <p class="text-light sideBarProfileContentModify">Connexion</p>
        <p class="text-light sideBarProfileContentModify">Inscription</p>
      </router-link>

      <div
        class="sideBarProfileContent"
        v-if="$store.state.profile.myProfile.alias"
      >
        <router-link
          to="/my-profile"
          class="text-light h4 sideBarProfileContentName"
          @click.native="
            $store.dispatch('changeProfileModifyOrShowForce', false)
          "
        >
          {{ $store.state.profile.myProfile.alias }}
        </router-link>
        <router-link
          to="/my-profile"
          class="text-light sideBarProfileContentModify"
          @click.native="
            $store.dispatch('changeProfileModifyOrShowForce', true)
          "
        >
          Modifier mon profil
        </router-link>
        <router-link
          to="/login"
          @click.native="logOutProfile"
          class="text-light sideBarProfileContentLogOut"
        >
          Déconnexion
        </router-link>
      </div>
    </div>

    <!-- HOME LINK -->
    <router-link to="/" class="btn btn-primary sideBarMenu">
      <font-awesome-icon icon="home" class="sideBarMenuIcon text-light" />
      <p class="text-light h4 sideBarMenuText">
        Accueil
      </p>
    </router-link>

    <!-- NEW POST -->
    <router-link to="/new-post" class="btn btn-primary sideBarMenu">
      <font-awesome-icon
        icon="plus-circle"
        class="sideBarMenuIcon text-light"
      />
      <p class="text-light h4 sideBarMenuText">
        Nouveau post
      </p>
    </router-link>

    <!-- FEED -->
    <router-link to="/" class="btn btn-primary sideBarMenu">
      <font-awesome-icon icon="newspaper" class="sideBarMenuIcon text-light " />
      <p class="text-light h4 sideBarMenuText">
        Fil d'actualités
      </p>
    </router-link>

    <!-- GIPHY -->
    <router-link to="/giphy" class="btn btn-primary sideBarMenu">
      <img
        src="/images/giphyLogo250pxTinyfied.png"
        alt="Redirection vers les posts Giphy"
        class="sideBarMenuLogo"
      />
      <p class="text-light h4 sideBarMenuText">
        Giphy
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SideBarDesktop",
  methods: {
    logOutProfile() {
      localStorage.removeItem("token");
      this.$router.go();
    },
  },
};
</script>

<style scoped lang="scss">
.sideBar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 100%;
  z-index: 99;
  position: fixed;
  top: 0;
  padding: 1rem 1rem;

  &Trademark {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    &Logo {
      width: 3rem;
    }
    &Text {
      margin: 0;
    }
  }
  &Profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin: 1rem 0;
    padding: 0.5rem 0;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.185);
    &User {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &Icon {
        width: 40px;
        height: 40px;
        margin: 0.7rem 0;
      }
    }

    &Picture {
      width: 160px;
      height: 160px;
      border-radius: 500px;
      object-fit: cover;
      object-position: center;
    }
    &Content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
      height: 100%;
      &Name {
        margin: 0;
      }
      &Modify {
        margin: 0;
      }
      &LogOut {
        margin: 0;
      }
    }
  }
  &Menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    margin: 1rem 0;
    &Icon {
      font-size: 2rem;
      width: 54px;
    }
    &Logo {
      width: 54px;
      border-radius: 10px;
    }
    &Text {
      margin: 0;
    }
  }
}
</style>
