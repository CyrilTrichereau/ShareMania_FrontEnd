<template>
  <div class="form-group my-2 inputBlock">
    <label for="inputBlock" :class="styleInput"> {{ inputName }} </label>
    <input
      :type="inputType"
      class="form-control"
      :placeholder="inputPlaceHolder"
      id="inputBlock" required
    />
  </div>
</template>

<script>
export default {
  name: "InputBlock",
  props: {
    inputName: {
      type: String,
      required: true,
    },
    inputPlaceHolder: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
    titleLight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      styleLight: "text-light",
      styleDark: "text-dark",
    }
  },
  computed: {
    styleInput() {
      if (this.titleLight == true) {
        return this.styleLight
      } else {
        return this.styleDark
      }
    }
  },
};
</script>

<style scoped lang="scss">
.inputBlock {
  width: 90%;
  max-width: 350px;
}
  
  
  </style>
