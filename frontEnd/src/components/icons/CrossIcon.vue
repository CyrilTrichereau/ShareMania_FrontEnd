<template>
    <button class="crossIcon">
      <span class="bar barTop"></span>
      <span class="bar barBottom"></span>
    </button>
</template>

<script>
export default {
  name: "CrossIcon",
};
</script>

<style scoped lang="scss">
$barRotation: 50deg;
$barScaling: 1.2;
$primaryColor: #4d7c8a;
$secondaryColor: #938f60;
$lightColor: #fdfeff;

.crossIcon {
  height: 100%;
  width: 100%;
  background: $primaryColor;

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
      transform: scale($barScaling);
  }
  &:active {
    background: $secondaryColor;
  }
}

.bar {
  height: 9%;
  width: 80%;
  background: $lightColor;
  border-radius: 500px;
  position: absolute;
  &Top {
    transform: rotate($barRotation);
  }
  &Bottom {
    transform: rotate(-$barRotation);
  }
}
</style>
