<template>
  <div class="container card connectionPage">
    <HeaderConnectionBlock />
    <Login />
    <Inscription />
    <FooterConnectionBlock class="connectionPageFooter" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderConnectionBlock from "@/components/connection/HeaderConnectionBlock.vue";
import Login from "@/components/connection/Login.vue";
import Inscription from "@/components/connection/Inscription.vue";
import FooterConnectionBlock from "@/components/connection/FooterConnectionBlock.vue";

export default {
  name: "ConnectionPage",
  components: {
    HeaderConnectionBlock,
    Login,
    Inscription,
    FooterConnectionBlock,
  },
  async created() {
   await this.$store.dispatch("fetchMyProfile");
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
}
</style>
