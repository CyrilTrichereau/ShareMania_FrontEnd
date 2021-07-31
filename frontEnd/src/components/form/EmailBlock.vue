<template>
  <div class="form-group my-2 inputBlock">
    <label for="emailBlock">Adresse email</label>
    <input
      type="email"
      class="form-control"
      placeholder="email"
      id="emailBlock" required
    />
  </div>
</template>

<script>
export default {
  name: "EmailBlock",
};
</script>

<style scoped lang="scss">
.inputBlock {
  width: 100%;
  max-width: 600px;
}</style>
