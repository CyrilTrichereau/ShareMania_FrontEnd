<template>
  <div class="inscription">
    <h2 class="inscriptionTitle text-primary">
      Inscription
      </h2>
        <InputBlock  inputName="Adresse email" inputPlaceHolder="Ecrivez ici votre email" inputType="email"/>
        <InputBlock  inputName="Mot de passe" inputPlaceHolder="Ecrivez ici votre mot de passe"/>
        <InputBlock  inputName="Pseudo" inputPlaceHolder="Ecrivez ici votre pseudo"/>
    <ServiceBlock class="inscriptionBlock" />
    <Button text="Valider"/>
  </div>
</template>

<script>
import InputBlock from "@/components/form/InputBlock.vue";
import ServiceBlock from "@/components/form/ServiceBlock.vue";
import Button from "@/components/form/Button.vue";

export default {
  name: "Inscription",
  components: {
    InputBlock,
    ServiceBlock,
    Button,
  },
};
</script>

<style scoped lang="scss">
.inscription {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;

  &Title {
    margin: 1rem 0;
  }
  &Block {
    width: 80%;
  }
}
</style>
