<template>
  <div>
    <button :class="styleButton">
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
  },
  data() {
    return {
      styleRegular: "btn btn-primary my-2 validateButton",
      styleDanger: "btn btn-danger my-2 validateButton",
    }
  },
  computed: {
    styleButton() {
      if (this.danger == true) {
        return this.styleDanger
      } else {
        return this.styleRegular
      } 
    }
  },
};
</script>

<style scoped lang="scss">
.validateButton {
  border: white solid 2px;
  padding: 0.5rem 2rem;
}
</style>
