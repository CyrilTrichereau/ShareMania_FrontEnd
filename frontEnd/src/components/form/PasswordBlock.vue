<template>
  <div class="form-group my-2 inputBlock">
    <label for="passwordBlock">Mot de passe</label>
    <input
      type="text"
      class="form-control"
      placeholder="Mot de passe"
      id="passwordBlock" required
    />
  </div>
</template>

<script>
export default {
  name: "passwordBlock",
};
</script>

<style scoped lang="scss">
.inputBlock {
  width: 100%;
  max-width: 600px;
}</style>
