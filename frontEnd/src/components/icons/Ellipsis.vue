<template>
  <button :class="smallOrBigStyle">
    <font-awesome-icon
      icon="ellipsis-h"
      class="text-primary ellipsisButtonIcon"
    />
  </button>
</template>

<script>
export default {
  name: "Ellipsis",
  data() {
    return {
      smallStyle: "btn btn-white ellipsisButton small",
      bigStyle: "btn btn-white ellipsisButton big",
    };
  },
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    smallOrBigStyle() {
      if (this.small === true) {
        return this.smallStyle;
      } else {
        return this.bigStyle;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.ellipsisButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.small {
  padding: 0.5rem;
  font-size: 1.5rem;
}
.big {
  padding: 1rem;
  font-size: 2rem;
}
</style>
