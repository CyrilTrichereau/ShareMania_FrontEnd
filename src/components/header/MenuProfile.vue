<template>
  <div class="menuProfile">
    <div class="menuProfileWrapper" @click="openCloseAndCheckIsNewPost">
      <font-awesome-icon
        v-if="$store.state.profile.myProfile == 'none'"
        icon="user-astronaut"
        class="menuProfileWrapperIcon"
      />

      <img
        v-else
        :src="$store.state.profile.myProfile.urlPicture"
        :alt="'Photo de profil de ' + $store.state.profile.myProfile.alias"
        class="menuProfileWrapperPicture"
      />
    </div>
    <div
      class="menuProfileBackground"
      v-show="$store.state.isOpen.headerMenu === 'menuProfile'"
      @click="openCloseAndCheckIsNewPost"
    >
      <nav class="card container bg-light menuProfileList">
        <div
          class="menuProfileListCrossIcon"
          @click.stop="$store.dispatch('openOrCloseMenuHeader', 'none')"
        >
          <CrossIcon :colorThemePrimary="false" />
        </div>
        <!-- Profile Block -->
        <div
          class="menuProfileListProfileBlock"
          @click.stop="$store.dispatch('openOrCloseMenuHeader', 'none')"
        >
          <router-link
            to="/my-profile"
            class="text-primary btn btn-light menuProfileListProfileBlockLink"
            @click="$store.dispatch('changeProfileModifyOrShowForce', false)"
          >
            <img
              :src="$store.state.profile.myProfile.urlPicture"
              :alt="
                'Photo de profil de ' + $store.state.profile.myProfile.alias
              "
              class="menuProfileListProfileBlockLinkPicture"
            />
            <p class="h2 text-dark menuProfileListProfileBlockLinkName">
              {{ $store.state.profile.myProfile.alias }}
            </p>
          </router-link>
        </div>

        <!-- Profile link -->
        <ul
          class="text-dark btn btn-light menuProfileListItem"
          @click.stop="openOrCloseMenusAndModifyProfile(false)"
        >
          <router-link
            to="/my-profile"
            class="text-primary menuProfileListItemLinks"
            @click="$store.dispatch('changeProfileModifyOrShowForce', false)"
          >
            <font-awesome-icon
              icon="user"
              class="menuProfileListItemLinksIcon"
            />
            <p class="menuProfileListItemLinksText">Mon profil</p>
          </router-link>
        </ul>

        <!-- Modify profile link -->
        <ul
          class="text-dark btn btn-light menuProfileListItem"
          @click.stop="openOrCloseMenusAndModifyProfile(true)"
        >
          <router-link
            to="/my-profile"
            class="text-primary menuProfileListItemLinks"
            @click="$store.dispatch('changeProfileModifyOrShowForce', true)"
          >
            <font-awesome-icon
              icon="address-card"
              class="menuProfileListItemLinksIcon"
            />
            <p class="menuProfileListItemLinksText">Modifier mon profil</p>
          </router-link>
        </ul>

        <!-- log Out link -->
        <ul class="btn btn-light menuProfileListItem" @click="logOutProfile">
          <router-link to="/login" class="menuProfileListItemLinks">
            <font-awesome-icon
              icon="sign-out-alt"
              class="text-secondary menuProfileListItemLinksIcon"
            />
            <p class="text-secondary menuProfileListItemLinksText">
              Déconnexion
            </p>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import CrossIcon from "@/components/icons/CrossIcon.vue";

export default {
  name: "MenuProfile",
  components: {
    CrossIcon,
  },
  methods: {
    openOrCloseMenusAndModifyProfile(boolean) {
      this.$store.dispatch("openOrCloseMenuHeader", "none");
      this.$store.dispatch("changeProfileModifyOrShowForce", boolean);
    },
    logOutProfile() {
      this.$store.dispatch("openOrCloseMenuHeader", "none");
      localStorage.removeItem("token");
      this.$router.go();
    },
    openCloseAndCheckIsNewPost() {
      if (this.$route.name === "newPost") {
        if (this.$store.state.isOpen.headerMenu === "menuProfile") {
          this.$store.dispatch("openOrCloseMenuHeaderForce", "newPost");
        } else {
          this.$store.dispatch("openOrCloseMenuHeaderForce", "menuProfile");
        }
      } else {
        this.$store.dispatch("openOrCloseMenuHeader", "menuProfile");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.menuProfile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  &Background {
    z-index: 2;
    width: 100%;
    top: 62px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 1000px;
    background: rgba(255, 255, 255, 0.9);
  }
  &Wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 40px;
    height: 40px;
    border: none;
    background: none;
    cursor: pointer;

    &Icon {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;
    }

    &Picture {
      width: 100%;
      height: 100%;
      border-radius: 500px;
      object-fit: cover;
      object-position: center;
      margin: 0;
      padding: 0;
    }
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
    &CrossIcon {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 4%;
      right: 5%;
    }
    &ProfileBlock {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      &Link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &Picture {
          width: 10rem;
          height: 10rem;
          border-radius: 500px;
          object-fit: cover;
          object-position: center;
          margin: 0;
          padding: 0;
        }
        &Name {
          padding-top: 1rem;
          margin: 0;
        }
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
