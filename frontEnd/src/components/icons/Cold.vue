<template>
  <button :class="styleToApply">
    <font-awesome-icon icon="snowflake" class="backColorIcon" />
  </button>
</template>

<script>
export default {
  name: "Cold",
  data() {
    return {
      cold: false,
      isCold: "bg-warning text-light backColor",
      isNotCold: "text-warning backColor",
      smallStyle: " smallPadding ",
      bigStyle: " bigPadding ",
    };
  },
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    styleToApply() {
      if (this.small === true && this.isActive === true) {
        return this.smallStyle + "" + this.isCold;
      }
      if (this.small === false && this.isActive === true) {
        return this.bigStyle + "" + this.isCold;
      }
      if (this.small === true && this.isActive === false) {
        return this.smallStyle + "" + this.isNotCold;
      } else {
        return this.bigStyle + this.isNotCold;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.backColor {
  border-radius: 25px 25px 0 0;
  margin: 0;
  border: none;
  background: none;
  &Icon {
    font-size: 2rem;
  }
}
.bigPadding {
  padding: 1.5rem;
}
.smallPadding {
  padding: 0.5rem;
}
</style>
