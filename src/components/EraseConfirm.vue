<template>
  <div class="eraseConfirm">
    <div class="eraseConfirmSideBar"></div>
    <div class="eraseConfirmWrapper">
      <div class="card container bg-light eraseConfirmWrapperCard">
        <h2 class="eraseConfirmWrapperCardTitle">
          Voulez vous vraiment supprimer {{ loopForType }} ?
        </h2>
        <h6 class="text-dark eraseConfirmWrapperCardSubtitle">
          Cette opération est irréversible. <br />
          Merci de confirmer.
        </h6>
        <div class="eraseConfirmWrapperCardButtons">
          <div
            class="eraseConfirmWrapperCardButtonsWrapper"
            @click="confirmToErase"
          >
            <Button text="Supprimer" :danger="true" />
          </div>
          <div
            class="eraseConfirmWrapperCardButtonsWrapper"
            @click="closeEraseConfirmationWindow"
          >
            <Button text="Ne pas supprimer" />
          </div>
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
    urlToRedirect: {
      type: String,
      default: "/home",
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
    closeEraseConfirmationWindow() {
      this.$emit("close-erase-confirmation-window");
    },
    confirmToErase() {
      this.$emit("confirmation-erase");
      this.$emit("close-erase-confirmation-window");
    },
  },
};
</script>

<style scoped lang="scss">
.eraseConfirm {
  width: 100%;
  height: 100%;
  z-index: 20;
  position: fixed;
  display: flex;
  top: 62px;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  &SideBar {
    display: none;
  }
  &Wrapper {
    width: 100%;
    height: 100%;
    &Card {
      width: 92%;
      max-width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
      padding: 0 0 2rem 0;
      &Title {
        padding: 2rem 2rem 1rem 2rem;
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
}

@media (min-width: 992px) {
  .eraseConfirm {
    top: 0px;
    &SideBar {
      display: unset;
      flex: 0 0 300px;
    }
    &Wrapper {
      &Card {
        flex: 1 1 auto;
        margin-top: 10rem;
      }
    }
  }
}
</style>
