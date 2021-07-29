<template>
  <div class="connectionPage">
    <HeaderMobile />
    <SideBarDesktop />
    <div class="d-none d-lg-flex connectionPageSideBarResponsive"></div>

    <div class="mx-auto my-lg-4 connectionPageTest">
      <div class="container card connectionPageBlock">
        <HeaderConnectionBlock />
        <Login />
        <Inscription />
        <FooterConnectionBlock class="connectionPageBlockFooter" />
      </div>
      <ForgottenPassword />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from "@/components/header/headerMobile.vue";
import SideBarDesktop from "@/components/header/sideBarDesktop.vue";
import HeaderConnectionBlock from "@/components/connectionElements/headerConnectionBlock.vue";
import Login from "@/components/connectionElements/login.vue";
import Inscription from "@/components/connectionElements/inscription.vue";
import FooterConnectionBlock from "@/components/connectionElements/footerConnectionBlock.vue";
import ForgottenPassword from "@/components/connectionElements/forgottenPassword.vue";

export default {
  name: "ConnectionPage",
  components: {
    HeaderMobile,
    SideBarDesktop,
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;

  &SideBarResponsive {
    width: 400px;
    height: 100%;
    position: relative;
    left: 0;
  }
  &Test {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
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
