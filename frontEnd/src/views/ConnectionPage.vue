<template>
  <div class="connectionPage">
    <div class="container card connectionPageBlock">
      <HeaderConnectionBlock />
      <Login />
      <Inscription />
      <FooterConnectionBlock class="connectionPageBlockFooter" />
    </div>
    <ForgottenPassword />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderConnectionBlock from "@/components/connection/HeaderConnectionBlock.vue";
import Login from "@/components/connection/Login.vue";
import Inscription from "@/components/connection/Inscription.vue";
import FooterConnectionBlock from "@/components/connection/FooterConnectionBlock.vue";
import ForgottenPassword from "@/components/connection/ForgottenPassword.vue";

export default {
  name: "ConnectionPage",
  components: {
    HeaderConnectionBlock,
    Login,
    Inscription,
    FooterConnectionBlock,
    ForgottenPassword,
  },
};
</script>

<style scoped lang="scss">
.connectionPage {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  &Block {
    margin-top: 4rem;
    width: 92%;
    padding: 0;
    overflow: hidden;
    margin-bottom: 4rem;
    &Footer {
      margin-top: 4rem;
    }
  }
}
</style>
