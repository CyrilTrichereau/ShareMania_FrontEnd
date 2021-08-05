<template>
  <button :class="styleToApply" @click="changeStateMenuEllipsis">
    <span class="dot dotLeft"></span>
    <span class="dot dotMiddle"></span>
    <span class="dot dotRight"></span>
  </button>
</template>

<script>
export default {
  name: "Ellipsis",
  data() {
    return {
      smallStyle: "btn btn-white ellipsisIcon small",
      bigStyle: "btn btn-white ellipsisIcon big",
      menuEllipsisOpen: false,
    };
  },
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    styleToApply() {
      if (this.small === true && this.menuEllipsisOpen === true) {
        return this.smallStyle + " ellipsisIsOpen";
      }
      if (this.small === false && this.menuEllipsisOpen === true) {
        return this.bigStyle + " ellipsisIsOpen";
      }
      if (this.small === true && this.menuEllipsisOpen === false) {
        return this.smallStyle;
      } else {
        return this.bigStyle;
      }
    },
  },
  methods: {
    changeStateMenuEllipsis() {
      if (this.menuEllipsisOpen === false) {
        this.menuEllipsisOpen = true;
      } else {
        this.menuEllipsisOpen = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
$barRotation: 42deg;
$barSpacing: 10%;
$barSpacingAfter: 350%;
$barScaling: 10.4;
$animationTime: 200ms;
$animationTimeMiddle: 100ms;
$primaryColor: #4d7c8a;
$secondaryColor: #938f60;

.ellipsisIcon {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all $animationTime ease-in-out;
}

.dot {
  height: 18%;
  width: 18%;
  background: $primaryColor;
  border-radius: 500px;
  position: absolute;
  &Left {
    left: $barSpacing;
    transition: all $animationTime ease-in-out;
    transform-origin: left;
  }
  &Middle {
    transition: all $animationTimeMiddle ease-in-out;
  }
  &Right {
    right: $barSpacing;
    transition: all $animationTime ease-in-out;
    transform-origin: right;
  }
}

.ellipsisIsOpen {
  transform: scale(0.6);
  & > .dot {
    height: 10%;
  }
  & > .dotLeft {
    transform: translateY($barSpacingAfter) rotate(-$barRotation);
    width: 104%;
    background: $secondaryColor;
  }
  & > .dotMiddle {
    transform: translateY(1000%);
    opacity: 0.4;
  }

  & > .dotRight {
    transform: translateY($barSpacingAfter) rotate($barRotation);
    width: 104%;
    background: $secondaryColor;
  }
}

.small {
  height: 2rem;
  width: 2rem;
}

.big {
  height: 3rem;
  width: 3rem;
}
</style>
