<template>
  <button :class="styleToApply" @click="changeStateOnfire">
    <font-awesome-icon icon="fire-alt" class="backColorIcon" />
  </button>
</template>

<script>
export default {
  name: "OnFire",
  data() {
    return {
      onFire: false,
      isOnFire: " bg-danger text-light backColor ",
      isNotOnFire: " text-danger backColor ",
      smallStyle: " smallPadding ",
      bigStyle: " bigPadding ",
    };
  },
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeStateOnfire() {
      if (this.onFire === false) {
        this.onFire = true;
      } else {
        this.onFire = false;
      }
    },
  },
  computed: {
    styleToApply() {
      if (this.small === true && this.onFire === true) {
        return this.smallStyle + "" + this.isOnFire;
      }
      if (this.small === false && this.onFire === true) {
        return this.bigStyle + "" + this.isOnFire;
      }
      if (this.small === true && this.onFire === false) {
        return this.smallStyle + "" + this.isNotOnFire;
      } else {
        return this.bigStyle + this.isNotOnFire;
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
