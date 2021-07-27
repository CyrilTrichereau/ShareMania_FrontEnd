<template>
  <div class="container card col-11 bg-light col-lg-5 col-xl-4">
      <h1 class="text-primary m-2 my-4">Mot de passe oublié</h1>
      <p class=" m-2 mb-4">Merci de renseigner votre adresse email ci-dessous. Une fois celui-ci validé, nous vous enverrons un email sous 15 min afin de réinitialiser votre mot de passe.</p>
    <EmailBlock/>
    <ValidateButton/>
    <p class=" m-2 text-success text">Un email de réinitialisation vient de partir. Suivez la procédure pour enregistrer un nouveau mot de passe.</p>
  </div>
</template>

<script>
import EmailBlock from '@/components/formElements/emailBlock.vue'
import ValidateButton from '@/components/formElements/validateButton.vue'

export default {
  name: "ForgottenPassword",
  components: {
      EmailBlock, ValidateButton
  }
};
</script>


<style scoped lang="scss">

</style>
