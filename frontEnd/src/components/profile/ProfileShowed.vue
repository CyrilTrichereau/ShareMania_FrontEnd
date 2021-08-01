<template>
  <div class="profileShowed card container">
    <img
      src="@/../public/images/testStatic/femaleProfile4.jpg"
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
      <div class="bg-info profileShowedContentBlock">
        <p class="text-primary h4 profileShowedContentBlockTitle">
          Adresse email
        </p>
        <p class="profileShowedContentBlockText">
          sophia.popoulos@gmail.com
        </p>
      </div>
      <div class="bg-info profileShowedContentBlock">
        <p class="text-primary h4 profileShowedContentBlockTitle">
          Mot de passe
        </p>
        <p class="profileShowedContentBlockText">
          **********
        </p>
      </div>
      <div class="bg-info profileShowedContentBlock">
        <p class="text-primary h4 profileShowedContentBlockTitle">
          Pseudo
        </p>
        <p class="profileShowedContentBlockText">
          SophiaPopoulos64
        </p>
      </div>
      <div class="bg-info profileShowedContentBlock">
        <p class="text-primary h4 profileShowedContentBlockTitle">
          Service
        </p>
        <p class="profileShowedContentBlockText">
          Ressources Humaines
        </p>
      </div>
      <a href="/my-profile/modify">
        <Button text="Modifier" />
      </a>
      <Button text="Supprimer mon compte" :danger="true" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";

export default {
  name: "ProfileShowed",
  components: {
    Button,
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
    &Block {
      padding-top: 1rem;
      margin: 1rem 0;
      width: 100%;
      &Title {
      }
      &Text {
      }
    }
  }
}
</style>
