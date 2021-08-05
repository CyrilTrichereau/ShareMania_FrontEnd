<template>
  <button class="burgerIcon" @click="menuBurgerIsOpen">
    <span class="bar barTop"></span>
    <span class="bar barMiddle"></span>
    <span class="bar barBottom"></span>
  </button>
</template>

<script>
export default {
  name: "MenuBurgerIcon",
  methods: {
    menuBurgerIsOpen() {
      document.querySelector(".burgerIcon").classList.toggle("isOpen");
    },
  },
};
</script>

<style scoped lang="scss">
$barRotation: 42deg;
$barSpacing: 20%;
$barSpacingAfter: 10%;
$barScaling: 1.3;
$animationTime: 200ms;
$primaryColor: #4d7c8a;
$secondaryColor: #938f60;
$lightColor: #fdfeff;

.burgerIcon {
  height: 35px;
  width: 35px;
  border: none;
  border-radius: 5px;
  background: $primaryColor;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.bar {
  height: 9%;
  width: 80%;
  background: $lightColor;
  border-radius: 500px;
  position: absolute;
  transform-origin: left;
  transition: all $animationTime ease-in-out;
  &Top {
    top: $barSpacing;
  }
  &Bottom {
    bottom: $barSpacing;
  }
}

.isOpen {
  transition: all $animationTime ease-in-out;
  transform: scale(1.2);
  background: $secondaryColor;
  & > .barTop {
    transform: rotate($barRotation) scaleX($barScaling);
    top: $barSpacingAfter;
  }
  & > .barMiddle {
    transform: translateX(-500%);
  }

  & > .barBottom {
    transform: rotate(-$barRotation) scaleX($barScaling);
    bottom: $barSpacingAfter;
  }
}
</style>
