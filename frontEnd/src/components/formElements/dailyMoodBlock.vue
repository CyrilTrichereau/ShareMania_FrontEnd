<template>
  <div class="form-group my-2">
    <select class="form-select" aria-label="Sélectionnez votre humeur du jour" required>
      <option selected class="text-wrap">Sélectionnez votre humeur du jour</option>
      <option value="1">He</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DailyMoodBlock",
};
</script>

<style scoped lang="scss"></style>
