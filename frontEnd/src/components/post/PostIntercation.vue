<template>
  <div class="postInteraction bg-info">
    <div class="postInteractionBar">
      <font-awesome-icon
        icon="fire-alt"
        class="text-danger postInteractionBarIcon postInteractionBarIconFire"
      />
      <font-awesome-icon
        icon="snowflake"
        class="postInteractionBarIcon postInteractionBarIconSnow"
      />
      <font-awesome-icon
        icon="comment-alt"
        class="text-primary postInteractionBarIcon postInteractionBarIconComment"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PostIntercation",
};
</script>

<style scoped lang="scss">
.postInteraction {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  &Bar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 2rem;
    width: 100%;
    max-width: 400px;
    &Icon {
      font-size: 2rem;
      margin: 1rem 4%;
      &Fire {
      }
      &Snow {
        color: rgb(107, 159, 255);
      }
      &Comment {
      }
    }
  }
}
</style>
