<template>
  <button
    class="burgerIcon"
    :class="{ burgerIconIsOpen: $store.state.isOpen.headerMenu === 'menuBurger'}"
    @click="$store.dispatch('openOrCloseMenuHeader', 'menuBurger')"
  >
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
$barScaling: 1.25;
$animationTime: 200ms;
$lightColor: #fdfeff;

.burgerIcon {
  height: 40px;
  width: 42px;
  border: none;
  border-radius: 5px;
  background: none;
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

.burgerIconIsOpen {
  background: none;
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
