<template>
  <button :class="styleToApply" @click="changeStateOnfire">
    <i class="fas fa-fire-alt fire fireFirst"></i>
    <i class="fas fa-fire-alt fire fireSecond"></i>
    <i class="fas fa-fire-alt fire fireThird"></i>
    <i class="fas fa-fire-alt fire fireFourth"></i>
    <i class="fas fa-fire-alt fire fireFifth"></i>
  </button>
</template>

<script>
export default {
  name: "OnFire",
  data() {
    return {
      onFire: false,
      isOnFire: "fireIcon isOnFire bg-danger text-light backColor",
      isNotOnFire: "fireIcon isNotOnFire text-danger backColor",
      smallStyle: "small",
      bigStyle: "big",
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
  &Icon {
  }
}
.bigPadding {
  padding: 1.5rem;
}
.smallPadding {
  padding: 0.5rem;
}


$animationTime: 800ms;
// Delay
$animationDelay: 150ms;
$animationDelayThird: 300ms;
$animationDelayFourth: 450ms;
$animationDelayFifth: 600ms;
// Rotate
$animationRotateThird: -10deg;
$animationRotateFourth: -5deg;
$animationRotateThird: 0deg;
$animationRotateFourth: 5deg;
$animationRotateFifth: 10deg;
$colorDanger: #c02200;
$colorInfo: rgba(77, 124, 138, 0.05);

.fireIcon {
  margin: 0;
  border: none;
  background: none;
  border-radius: 25px 25px 0 0;
  height: 10rem;
  width: 10rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.fire {
    font-size: 2rem;
  color: $colorDanger;
  position: absolute;
  bottom: 10%;
  transform-origin: bottom;
  &First {
  }
  &Second {
  }
  &Third {
  }
  &Fourth {
  }
  &Fifth {
  }
}

@keyframes fireAnimation {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
    z-index: 20;
  }
  100% {
    transform: rotate(15deg) scale(2);
    opacity: 0;
    z-index: 1;
  }
}

.isOnFire {
  & > .fire {
    &First {
animation: fireAnimation $animationTime ease-in-out infinite;
    }
    &Second {
animation: fireAnimation$animationTime $animationDelay ease-in-out infinite;
    }
    &Third {
animation: fireAnimation $animationTime  $animationDelayThird ease-in-out infinite;
    }
    &Fourth {
animation: fireAnimation $animationTime  $animationDelayFourth ease-in-out infinite;
    }
    &Fifth {
animation: fireAnimation $animationTime  $animationDelayFifth ease-in-out infinite;
    }
  }
}

</style>
