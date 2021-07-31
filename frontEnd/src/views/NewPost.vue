<template>
  <div class="mx-auto my-lg-4 newPost">
    <NewContentText class="newPostNewContentText" />
    <AddAttached class="newPostAddAttached" />
  </div>
</template>

<script>
// @ is an alias to /src
import NewContentText from "@/components/newPost/NewContentText.vue";
import AddAttached from "@/components/newPost/AddAttached.vue";

export default {
  name: "NewPost",
  components: {
    NewContentText,
    AddAttached,
  },
};
</script>

<style scoped lang="scss">
.newPost {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4rem;
}
</style>
