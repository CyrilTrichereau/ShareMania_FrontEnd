<template>
  <div class="form-group inputBlock">
    <textarea
      type="text"
      class="form-control"
      placeholder="Que souhaitez vous dire ?"
      id="postCaption"
      rows="5"
      required
      v-model="inputValue"
      @change="sendInput"
    />
  </div>
</template>

<script>
export default {
  name: "EmailBlock",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    sendInput() {
      this.$emit("input-value", this.inputValue);
    },
  },
};
</script>

<style scoped lang="scss">
.inputBlock {
  width: 100%;
}
</style>
