<template>
  <div class="inscription">
    <p class="inscriptionTitle text-primary h2">Inscription</p>
    <EmailBlock class="inscriptionBlock" />
    <PasswordBlock class="inscriptionBlock" />
    <AliasBlock class="inscriptionBlock" />
    <ServiceBlock class="inscriptionBlock" />
    <ValidateButton class="inscriptionValidateButton" />
  </div>
</template>

<script>
import EmailBlock from "@/components/formElements/emailBlock.vue";
import PasswordBlock from "@/components/formElements/passwordBlock.vue";
import AliasBlock from "@/components/formElements/aliasBlock.vue";
import ServiceBlock from "@/components/formElements/serviceBlock.vue";
import ValidateButton from "@/components/formElements/validateButton.vue";

export default {
  name: "Inscription",
  components: {
    EmailBlock,
    PasswordBlock,
    AliasBlock,
    ServiceBlock,
    ValidateButton,
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
  &ValidateButton {
    width: 100%;
  }
}
</style>
