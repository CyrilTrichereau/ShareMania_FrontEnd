<template>
  <div class="connectionPage">
    <HeaderMobile />
    <div class="container card col-11 connectionPageBlock">
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
import HeaderMobile from "@/components/header/headerMobile.vue";
import HeaderConnectionBlock from "@/components/connectionElements/headerConnectionBlock.vue";
import Login from "@/components/connectionElements/login.vue";
import Inscription from "@/components/connectionElements/inscription.vue";
import FooterConnectionBlock from "@/components/connectionElements/footerConnectionBlock.vue";
import ForgottenPassword from "@/components/connectionElements/forgottenPassword.vue";

export default {
  name: "ConnectionPage",
  components: {
    HeaderMobile,
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
  &Block {
    margin-top: 4rem;
    padding: 0;
    overflow: hidden;
    margin-bottom: 4rem;
    &Footer {
      margin-top: 4rem;
    }
  }
}
</style>
