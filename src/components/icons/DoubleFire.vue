<template>
  <div class="DoubleFire">
    <font-awesome-icon icon="fire-alt" class="text-primary DoubleFirePrimary" />
    <font-awesome-icon icon="fire-alt" class="text-danger DoubleFireRed" />
  </div>
</template>

<script>
export default {
  name: "DoubleFire",
};
</script>

<style scoped lang="scss">
.DoubleFire {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.6rem;
  height: 3rem;

  &Primary {
    position: absolute;
    font-size: 1.6rem;
  }
  &Red {
    position: absolute;
    font-size: 2.5rem;
    bottom: 12%;
  }
}
</style>
