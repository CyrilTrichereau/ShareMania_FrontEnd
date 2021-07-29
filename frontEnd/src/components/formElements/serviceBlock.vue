<template>
  <div class="form-group my-2 inputBlock">
        <label for="selectServiceSelection">Sélectionnez votre service</label>

    <select class="form-select selectService" id="selectServiceSelection" aria-label="Sélectionnez votre service" required>
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

<style scoped lang="scss">
.selectService {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  padding: 0.5rem;
  width: 100%;
}
.inputBlock {
  width: 100%;
  max-width: 600px;
}
</style>
