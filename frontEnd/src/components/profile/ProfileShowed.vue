<template>
  <div class="profileShowed card container">
    <img
      src="../../../public/images/testStatic/femaleProfile4.jpg"
      alt="Nom du profil"
      class="profileShowedPicture"
    />

    <div class="profileShowedContent">
      <div class="profileShowedContentStatus">
        <font-awesome-icon
          icon="shield-alt"
          class="text-success profileShowedContentStatusIcon"
        />
        <p class="text-success h4 profileShowedContentStatusText">
          Modérateur
        </p>
      </div>
      <div class="bg-info profileShowedContentEmail">
        <p class="text-primary h4 profileShowedContentEmailTitle">
          Adresse email
        </p>
        <p class="profileShowedContentEmailText">
          sophia.popoulos@gmail.com
        </p>
      </div>
      <div class="bg-info profileShowedContentPassword">
        <p class="text-primary h4 profileShowedContentPasswordTitle">
          Mot de passe
        </p>
        <p class="profileShowedContentPasswordText">
          **********
        </p>
      </div>
      <div class="bg-info profileShowedContentAlias">
        <p class="text-primary h4 profileShowedContentAliasTitle">
          Pseudo
        </p>
        <p class="profileShowedContentAliasText">
          SophiaPopoulos64
        </p>
      </div>
      <div class="bg-info profileShowedContentService">
        <p class="text-primary h4 profileShowedContentServiceTitle">
          Service
        </p>
        <p class="profileShowedContentServiceText">
          Ressources Humaines
        </p>
      </div>

      <ModifyButton class="profileShowedContentModifyButton" />

      <EraseProfileButton class="profileShowedContentEraseProfileButton" />
    </div>
  </div>
</template>

<script>
import ModifyButton from "@/components/form/ModifyButton.vue";
import EraseProfileButton from "@/components/form/EraseProfileButton.vue";

export default {
  name: "ProfileShowed",
  components: {
    ModifyButton,
    EraseProfileButton,
  },
};
</script>

<style scoped lang="scss">
.profileShowed {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 160px;
  padding: 0;
  width: 92%;
  max-width: 600px;
  &Picture {
    position: relative;
    top: -140px;
    width: 280px;
    height: 280px;
    border-radius: 500px;
    object-fit: cover;
    object-position: center;
  }
  &Content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: -140px;
    width: 100%;

    &Status {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0;
      &Icon {
        font-size: 2rem;
      }
      &Text {
        margin: 0;
      }
    }
    &Email {
      margin: 1rem 0;
      width: 100%;
      &Title {
      }
      &Text {
      }
    }
    &Password {
      margin: 1rem 0;
      width: 100%;
      &Title {
      }
      &Text {
      }
    }
    &Alias {
      margin: 1rem 0;
      width: 100%;
      &Title {
      }
      &Text {
      }
    }
    &Service {
      margin: 1rem 0;
      width: 100%;
      &Title {
      }
      &Text {
      }
    }
    &ModifyButton {
      width: 100%;
    }
    &EraseProfileButton {
      width: 100%;
    }
  }
}
</style>
