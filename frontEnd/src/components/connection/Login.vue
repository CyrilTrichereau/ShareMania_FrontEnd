<template>
  <div class="bg-primary login">
    <p class="loginTitle text-light h2">Connexion</p>
        <InputBlock  inputName="Adresse email" inputPlaceHolder="Ecrivez ici votre email" inputType="email" :titleLight=true />
        <InputBlock  inputName="Mot de passe" inputPlaceHolder="Ecrivez ici votre mot de passe" :titleLight=true />
    <Button text="Valider"/>
    <p class="loginForgottenPassword text-light">
      Mot de passe oublié ? <br />
      C'est par ici !
    </p>
  </div>
</template>

<script>
import InputBlock from "@/components/form/InputBlock.vue";
import Button from "@/components/form/Button.vue";

export default {
  name: "Login",
  components: {
    InputBlock,
    Button,
  },
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
  &Title {
    margin: 1rem 0;
  }
  &Block {
    color: white;
    width: 80%;
  }
  &ForgottenPassword {
    padding: 1rem 0;
  }
}
</style>
