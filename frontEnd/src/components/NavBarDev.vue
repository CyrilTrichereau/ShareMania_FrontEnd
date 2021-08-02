<template>
    <div id="navBarDev">
      <router-link to="/">Home</router-link> |
      <router-link to="/new-post">Nouveau post</router-link> |
      <router-link to="/9gag">9gag</router-link> |
      <router-link to="/my-profile">Mon profil</router-link> |
      <router-link to="/my-profile/modify">Modifier profil</router-link> |
      <router-link to="/login">Page de connexion</router-link> |
    </div>
</template>

<script>
export default {
  name: "NavBarDev"
};
</script>

<style scoped lang="scss">
#navBarDev {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99;
  padding: 0;

  & a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
