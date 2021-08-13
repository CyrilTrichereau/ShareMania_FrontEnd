<template>
  <div class="form-group my-2 inputBlock">
    <label :class="{ 'text-dark': !titleLight, 'text-light': titleLight }">
      {{ inputName }}
    </label>
    <input
      :type="inputType"
      class="form-control"
      :placeholder="inputPlaceHolder"
      v-model="inputValue"
      @change="sendInput"
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
  width: 90%;
  max-width: 350px;
}
</style>
