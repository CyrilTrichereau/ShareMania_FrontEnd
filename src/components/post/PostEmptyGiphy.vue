<template>
  <div class="container card bg-light postEmpty">
    <SpinnerLoading />
    <div class="postEmptyContentPicture"></div>
    <div class="postEmptyOriginalText">
      <div class="postEmptyOriginalTextLign"></div>
      <div class="postEmptyOriginalTextLign"></div>
    </div>
    <div class="postEmptyCurtain"></div>
  </div>
</template>

<script>
import SpinnerLoading from "@/components/icons/SpinnerLoading.vue";

export default {
  name: "PostEmptyGiphy",
  components: {
    SpinnerLoading,
  },
};
</script>

<style scoped lang="scss">
$colorEmptyPrimary: #4d7c8a59;
$colorEmptySecondary: #4d7c8ab9;

.postEmpty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 1rem 0;
  padding: 0;

  &ContentPicture {
    width: 100%;
    height: 400px;
    background-color: $colorEmptySecondary;
  }

  &OriginalText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    gap: 10px;
    width: 75%;
    height: 100%;
    &Lign {
      border-radius: 50px;
      height: 9px;
      width: 100%;
      background-color: $colorEmptySecondary;
    }
  }

  &Curtain {
    z-index: 10;
    top: 0;
    width: 100%;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(255, 255, 255, 0.164);
  }
}
</style>
