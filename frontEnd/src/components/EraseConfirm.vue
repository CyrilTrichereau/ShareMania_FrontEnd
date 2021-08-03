<template>
  <div class="eraseConfirm">
    <div class="card container bg-light eraseConfirmCard">
      <h2 class="eraseConfirmCardTitle">
        Voulez vous vraiment supprimer {{ loopForType }} ?
      </h2>
      <h6 class="text-dark eraseConfirmCardSubtitle">Cette opération est irréversible. <br> Merci de confirmer.</h6>
      <div class="eraseConfirmCardButtons">
        <div class="eraseConfirmCardButtonsWrapper">
          <Button text="Supprimer" :danger="true" />
        </div>
        <div
          class="eraseConfirmCardButtonsWrapper"
          @click="closeEraseConfirmationWindow"
        >
          <Button text="Ne pas supprimer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";

export default {
  name: "EraseConfirm",
  components: {
    Button,
  },
  data() {
    return {
      profile: "votre compte",
      comment: "le commentaire",
      post: "la publication",
      default: "",
    };
  },
  props: {
    typeToErase: {
      type: String,
      required: true,
    },
  },
  computed: {
    loopForType() {
      if (this.typeToErase === "profile") {
        return this.profile;
      }
      if (this.typeToErase === "comment") {
        return this.comment;
      }
      if (this.typeToErase === "post") {
        return this.post;
      } else {
        return this.default;
      }
    },
  },
  methods: {
    changingStateIsOpen() {
      if (this.isOpen === false) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
    closeEraseConfirmationWindow() {
      this.$emit("close-erase-confirmation-window");
    },
  },
};
</script>

<style scoped lang="scss">
.eraseConfirm {
  width: 100%;
  height: 2000px;
  z-index: 20;
  position: fixed;
  top: 62px;
  left: 0;
  background: rgba(255, 255, 255, 0.9);

  &Card {
    width: 92%;
    max-width: 450px;
    margin-top: 2rem;
    padding: 0 0 2rem 0;
    &Title {
      padding: 2rem 2rem 1rem 2rem;
    }
    &Subtitle {
        
    }
    &Buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      &Wrapper {
        margin: 0 1rem;
      }
    }
  }
}
</style>
