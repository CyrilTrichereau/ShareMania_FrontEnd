<template>
  <nav id="menu">
    <font-awesome-icon @click="openingMenu" icon="bars" class="menuBurger" />
    <nav v-if="menuBurgerOpen">
      <li><a href="">test</a></li>
      <li><a href="">test</a></li>
      <li><a href="">test</a></li>
      <li><a href="">test</a></li>
    </nav>
  </nav>
</template>

<script>
  export default {
  name: "MenuBurger",
  components: {
  },
  methods: {
    openingMenu(){
    if (this.menuBurgerOpen === true) {
this.menuBurgerOpen === false
    } else {
      this.menuBurgerOpen === true
    }}
  },
};
</script>

<style scoped lang="scss">
.menuBurger {
  color: white;
}
</style>
