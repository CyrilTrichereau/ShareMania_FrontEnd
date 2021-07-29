<template>
  <div class="form-group my-2 inputBlock">
    <label for="aliasBlock">Pseudo</label>
    <input
      type="text"
      class="form-control"
      placeholder="Indiquez votre pseudo"
      id="aliasBlock" required
    />
  </div>
</template>

<script>
export default {
  name: "AliasBlock",
};
</script>

<style scoped lang="scss">
.inputBlock {
  width: 100%;
  max-width: 600px;
}
  
  
  </style>
