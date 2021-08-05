<template>
<div class="wrapper">
    <button class="btn btn-primary bg-primary crossIcon" v-if="colorThemePrimary">
      <span class="bg-light bar barTop"></span>
      <span class="bg-light bar barBottom"></span>
    </button>
    
    <button class="btn btn-white bg-light crossIcon" v-else>
      <span class="bg-primary bar barTop"></span>
      <span class="bg-primary bar barBottom"></span>
    </button>
    </div>
</template>

<script>
export default {
  name: "CrossIcon",
  props: {
    colorThemePrimary: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

$barRotation: 50deg;
$barScaling: 1.2;
$primaryColor: #4d7c8a;
$secondaryColor: #938f60;
$lightColor: #fdfeff;

.crossIcon {
  height: 100%;
  width: 100%;

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
      box-shadow: 0px 0px 10px $primaryColor;;
  }
}

.bar {
  height: 9%;
  width: 80%;
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
