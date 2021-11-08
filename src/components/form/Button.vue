<template>
  <div>
    <button
      class="btn my-2 validateButton"
      :class="{
        'btn-danger': danger,
        'btn-primary': !danger & !secondary,
        'btn-secondary': secondary,
      }"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ValidateButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.validateButton {
  border: white solid 2px;
  padding: 0.5rem 2rem;
}
</style>
