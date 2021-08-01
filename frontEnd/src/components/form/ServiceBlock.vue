<template>
  <div class="form-group my-2 inputBlock">
    <label for="selectServiceSelection">Sélectionnez votre service</label>

    <select
      class="btn btn-light form-select selectService"
      id="selectServiceSelection"
      aria-label="Sélectionnez votre service"
      required
    >
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #CED4DA;
  &:focus {
    background: white;
  }
}
.inputBlock {
  width: 90%;
  max-width: 350px;
}
</style>
