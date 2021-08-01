<template>
  <div class="postHeader">
    <img
      src="@/../public/images/testStatic/femaleProfile1.jpg"
      alt="Image de profil de ..."
      class="pictureProfile"
    />
    <div class="postText">
      <p class="postTextTitle text-primary">Jenny Wilson</p>
      <div class="postTextSubtitleBlock">
        <p class="postTextSubtitleBlockTime">9h</p>
        <p class="postTextSubtitleBlockService">- Product Manager</p>
      </div>
    </div>
    <font-awesome-icon icon="ellipsis-h" class="text-primary ellipsisButton" />
  </div>
</template>

<script>
export default {
  name: "PostHeader",
};
</script>

<style scoped lang="scss">
.postHeader {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  margin-bottom: 1.5rem;
}

.pictureProfile {
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin: 0 0.5rem;
  object-fit: cover;
  object-position: center;
}

.postText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &Title {
    margin: 0.5rem 0;
    font-size: 1.4rem;
    font-weight: 600;
  }
  &SubtitleBlock {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.9rem;

    &Time {
      margin: 0;
      font-weight: 600;
    }
    &Service {
      margin: 0;
    }
  }
}

.ellipsisButton {
  position: absolute;
  right: 0.5rem;
  font-size: 1.6rem;
}
</style>
