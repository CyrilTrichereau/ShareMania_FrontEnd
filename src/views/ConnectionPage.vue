<template>
  <WelcomeMessage
    v-if="displayWelcomeMessage"
    @close-pop-in="displayWelcomeMessage = false"
  />
  <div class="container card bg-white connectionPage" v-else>
    <HeaderConnectionBlock />
    <Login />
    <Inscription />
    <FooterConnectionBlock class="connectionPageFooter" />
    <Button
      text="Afficher de nouveau le message de bienvenue"
      :secondary="true"
      @click="showWelcomeMessage"
      class="connectionPageButton"
    />
  </div>
</template>

<script>
import HeaderConnectionBlock from "@/components/connection/HeaderConnectionBlock.vue";
import Login from "@/components/connection/Login.vue";
import Inscription from "@/components/connection/Inscription.vue";
import FooterConnectionBlock from "@/components/connection/FooterConnectionBlock.vue";
import WelcomeMessage from "@/components/popIn/WelcomeMessage.vue";
import Button from "@/components/form/Button.vue";
import * as utils from "@/assets/utils.js";

export default {
  name: "ConnectionPage",
  components: {
    WelcomeMessage,
    HeaderConnectionBlock,
    Login,
    Inscription,
    FooterConnectionBlock,
    Button,
  },
  data() {
    return {
      displayWelcomeMessage: true,
    };
  },
  methods: {
    showWelcomeMessage() {
      localStorage.setItem("displayWelcomeMessage", true);
      this.displayWelcomeMessage = true;
    },
  },
  async created() {
    const isValidToken = await utils.controlAuth();
    if (isValidToken) {
      this.$store.dispatch("fetchMyProfile");
      this.$router.push({ name: "home" });
    }
  },
  mounted() {
    // Watch local storage to know if display or not welcome message
    const displayMessage = localStorage.getItem("displayWelcomeMessage");
    if (displayMessage === null) {
      this.displayWelcomeMessage = true;
    } else if (displayMessage === "false") {
      this.displayWelcomeMessage = false;
    } else {
      this.displayWelcomeMessage = true;
    }
  },
};
</script>

<style scoped lang="scss">
.connectionPage {
  width: 92%;
  padding: 0;
  overflow: hidden;
  margin: 5rem auto 4rem auto;
  &Footer {
    margin-top: 4rem;
  }
  &Button {
    margin: 0 2rem;
  }
}
</style>
