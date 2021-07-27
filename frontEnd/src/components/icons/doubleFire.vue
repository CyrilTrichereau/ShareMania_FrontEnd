<template>
  <div class="DoubleFire">
    <font-awesome-icon icon="fire-alt" class="text-danger DoubleFireRed" />
    <font-awesome-icon icon="fire-alt" class="text-primary DoubleFirePrimary" />
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgb(180, 252, 202);
  width: 2.5rem;
  

  &Red {
    position: absolute;
    font-size: 2.5rem;
  }
  &Primary {
    position: absolute;
    font-size: 1.8rem;
  }
}
</style>
