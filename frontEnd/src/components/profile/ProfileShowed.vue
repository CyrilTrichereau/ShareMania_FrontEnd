<template>
    <div class="profileContent card container">
        <div class="profileContentStatus" v-if="myProfile.moderator">
          <font-awesome-icon
            icon="shield-alt"
            class="text-success profileContentStatusIcon"
          />
          <p class="text-success h4 profileContentStatusText">
            Modérateur
          </p>
        </div>
        <div class="bg-info profileContentBlock">
          <p class="text-primary h4 profileContentBlockTitle">
            Adresse email
          </p>
          <p class="profileContentBlockText">
            {{ myProfile.email }}
          </p>
        </div>
        <div class="bg-info profileContentBlock">
          <p class="text-primary h4 profileContentBlockTitle">
            Mot de passe
          </p>
          <p class="profileContentBlockText">
            **********
          </p>
        </div>
        <div class="bg-info profileContentBlock">
          <p class="text-primary h4 profileContentBlockTitle">
            Pseudo
          </p>
          <p class="profileContentBlockText">
            {{ myProfile.alias }}
          </p>
        </div>
        <div class="bg-info profileContentBlock">
          <p class="text-primary h4 profileContentBlockTitle">
            Service
          </p>
          <p class="profileContentBlockText">
            {{ myProfile.service }}
          </p>
        </div>
        <div @click="changeProfileModifyOrShow">
          <Button text="Modifier" />
        </div>
        <div @click="eraseConfirmationIsOpen = !eraseConfirmationIsOpen">
          <Button text="Supprimer mon compte" :danger="true" />
        </div>
        <EraseConfirm
          typeToErase="profile"
          v-show="eraseConfirmationIsOpen"
        />
    </div>
</template>

<script>
import Button from "@/components/form/Button.vue";
import EraseConfirm from "@/components/EraseConfirm.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "ProfileShowed",
  components: {
    Button,
    EraseConfirm,
  },
  data() {
    return {
      eraseConfirmationIsOpen: false,
    };
  },
  computed: {
    ...mapState(["myProfile", "myProfileModify"]),
  },
  methods: {
    ...mapActions(["changeProfileModifyOrShow"])
  }
};
</script>

<style scoped lang="scss">
  .profileContent {
    z-index: 1 !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 140px 0 0 0;
    margin: 140px 0 0 0;
    width: 92%;
    max-width: 600px;

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
      }
    
  }
</style>
