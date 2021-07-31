<template>
  <div class="postInteraction bg-info">
    <font-awesome-icon
      icon="fire-alt"
      class="text-danger postInteractionIcon postInteractionIconFire"
    />
    <font-awesome-icon
      icon="snowflake"
      class="postInteractionIcon postInteractionIconSnow"
    />
    <font-awesome-icon
      icon="comment-alt"
      class="text-primary postInteractionIcon postInteractionIconComment"
    />
    <font-awesome-icon
      icon="share"
      class="text-primary postInteractionIcon postInteractionIconShare"
    />
  </div>
</template>

<script>
export default {
  name: "PostIntercation",
};
</script>

<style scoped lang="scss">
.postInteraction {
  margin: 1rem 0;
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
    &Share {
    }
  }
}
</style>
