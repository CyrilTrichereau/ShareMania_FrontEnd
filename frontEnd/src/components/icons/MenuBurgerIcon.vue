<template>
    <button class="burgerIcon">
      <span class="bar barTop"></span>
      <span class="bar barMiddle"></span>
      <span class="bar barBottom"></span>
    </button>
</template>

<script>
export default {
  name: "MenuBurgerIcon",
};
</script>

<style scoped lang="scss">
$barRotation: 42deg;
$barSpacing: 20%;
$barSpacingAfter: 10%;
$barScaling: 1.3;
$animationTime: 400ms;
$primaryColor: #4d7c8a;
$secondaryColor: #938f60;
$lightColor: #fdfeff;

@keyframes barTopAnimation {
  0% {
    transform: rotate(0deg) scaleX(1);
    top: $barSpacing;
  }
  100% {
    transform: rotate($barRotation) scaleX($barScaling);
    top: $barSpacingAfter;
  }
}

@keyframes barMiddleAnimation {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.4);
    opacity: 0;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes barBottomAnimation {
  0% {
    transform: rotate(0deg) scaleX(1);
    bottom: $barSpacing;
  }
  100% {
    transform: rotate(-$barRotation) scaleX($barScaling);
    bottom: $barSpacingAfter;
  }
}

.burgerIcon {
  height: 35px;
  width: 35px;
  background: $primaryColor;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: all 1000ms ease-in-out;
  &:active {
    background: $secondaryColor;
  }
  &:active > .barTop {
    animation: barTopAnimation $animationTime ease-in-out both;
  }
  &:active > .barMiddle {
    animation: barMiddleAnimation $animationTime ease-in-out both;
  }
  &:active > .barBottom {
    animation: barBottomAnimation $animationTime ease-in-out both;
  }
}

.bar {
  height: 9%;
  width: 80%;
  background: $lightColor;
  border-radius: 500px;
  position: absolute;
  transform-origin: left;
  &Top {
    top: $barSpacing;
  }
  &Bottom {
    bottom: $barSpacing;
  }
}
</style>
