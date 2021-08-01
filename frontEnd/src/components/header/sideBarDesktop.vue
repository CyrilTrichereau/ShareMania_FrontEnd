<template>
  <div class="bg-primary text-light d-none d-lg-flex sideBar">
    <!-- SHAREMANIA -->
    <router-link to="/" class="btn btn-primary sideBarTrademark">
      <img
        src="@/../public/images/groupomaniaLogoWhite100pxTinyfied.png"
        alt="ShareMania Logo"
        class="sideBarTrademarkLogo"
      />
      <p class="h2 text-light sideBarTrademarkText">ShareMania</p>
    </router-link>

    <!-- PROFILE BLOCK -->
    <div class="sideBarProfile">
      <router-link to="/login">
        <font-awesome-icon
          icon="user"
          class="d-none text-light sideBarProfileUserIcon"
        />
      </router-link>

      <router-link to="/my-profile" class="sideBarProfilePictureBackground">
        <img
          src="@/../public/images/testStatic/femaleProfile3.jpg"
          alt="Nom du profil"
          class="sideBarProfilePicture"
        />
      </router-link>

      <div class="sideBarProfileContent">
        <router-link to="/my-profile" class="text-light h4 sideBarProfileContentName">
          Becassine62
        </router-link>
        <router-link
          to="/my-profile/modify"
          class="text-light sideBarProfileContentModify"
        >
          Modifier mon profil
        </router-link>
        <p class="text-light sideBarProfileContentLogOut">Déconnexion</p>
      </div>
    </div>

    <router-link to="/new-post" class="btn btn-primary sideBarMenu">
      <font-awesome-icon
        icon="plus-circle"
        class="sideBarMenuIcon text-light "
      />
      <p class="text-light h4 sideBarMenuText">
        Nouveau post
      </p>
    </router-link>

    <router-link to="/" class="btn btn-primary sideBarMenu">
      <font-awesome-icon icon="newspaper" class="sideBarMenuIcon text-light " />
      <p class="text-light h4 sideBarMenuText">
        Fil d'actualités
      </p>
    </router-link>

    <router-link to="/9gag" class="btn btn-primary sideBarMenu">
      <img
        src="@/../public/images/logo9gagWhite.png"
        alt="Redirection vers les posts 9GAG"
        class="sideBarMenuIcon"
      />
      <p class="text-light h4 sideBarMenuText">
        9GAG
      </p>
    </router-link>

    <router-link to="/" class="btn btn-primary sideBarMenu">
      <img
        src="@/../public/images/logoRedditTinified300px.png"
        alt="Redirection vers les posts Reddit"
        class="sideBarMenuIcon"
      />
      <p class="text-light h4 sideBarMenuText">
        Reddit
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SideBarDesktop",
  components: {},
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
  padding: 4rem 1rem;

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
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin: 2rem 0;
    padding: 1rem 0;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.185);
    &Picture {
      width: 100px;
      height: 100px;
      border-radius: 500px;
      object-fit: cover;
      object-position: center;
    }
    &Content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
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
      font-size: 3rem;
      width: 54px;
    }
    &Text {
      margin: 0;
    }
  }
}
</style>
