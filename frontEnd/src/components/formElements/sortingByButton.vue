<template>
  <div class="form-group my-2 sortingByButton">
    <select class="form-select bg-primary text-light p-1 sortingByButtonSelect" aria-label="Trier par" required>
      <option selected class="text-wrap">Trier par</option>
      <option value="recent">Plus récents</option>
      <option value="popular">Plus populaires</option>
      <option value="shared">Plus partagés</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SortingByButton",
};
</script>

<style scoped lang="scss">
.sortingByButton {
    &Select {
        border-radius: 25px;
    }
}
</style>
