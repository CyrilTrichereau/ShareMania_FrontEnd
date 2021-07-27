<template>
  <div class="form-group my-2">
    <select class="form-select" aria-label="Sélectionnez votre service" required>
      <option selected class="text-wrap">Sélectionnez votre service</option>
      <option value="Achats">Achats</option>
      <option value="Commercial">Commercial</option>
      <option value="Marketing">Marketing</option>
      <option value="Comptabilité">Comptabilité</option>
      <option value="Ressources Humaines">Ressources Humaines</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ServiceBlock",
};
</script>

<style scoped lang="scss"></style>
