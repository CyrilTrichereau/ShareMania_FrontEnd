<template>
  <div class="form-group inputBlock">
    <textarea
      type="text"
      class="form-control"
      placeholder="Que souhaitez vous dire ?"
      id="postCaption"
      rows="5"
      required
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
}
</style>
