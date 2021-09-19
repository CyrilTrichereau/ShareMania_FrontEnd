<template>
  <img
    src="@/../public/images/spinnerLoading150pxTinyfied.png"
    alt="Spinner Loading"
    class="spinnerLoading"
  />
</template>

<script>
export default {
  name: "SpinnerLoading"
};
</script>

<style scoped lang="scss">
.spinnerLoading {
  position: absolute;
  width: 100px;
  animation: spinnerLoadingAction 5s ease-in-out infinite;
}

@keyframes spinnerLoadingAction {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(2600deg);
  }
}
</style>
