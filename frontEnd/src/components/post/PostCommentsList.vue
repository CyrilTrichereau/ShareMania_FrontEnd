<template>
  <div class="displayComments">
    <div class="displayCommentsHeader">
      <p class="displayCommentsHeaderTitle text-primary">Commentaires</p>
      <SortingByButton class="displayCommentsHeaderSorting" />
    </div>
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <Comment />
  </div>
</template>

<script>
import SortingByButton from "@/components/form/SortingByButton.vue";
import Comment from "@/components/post/PostComment.vue";

export default {
  name: "PostCommentsList",
  components: {
    SortingByButton,
    Comment,
  },
};
</script>

<style scoped lang="scss">
.displayComments {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-bottom: -0.5rem;
    &Title {
      font-size: 1.3rem;
      margin: 0;
    }
    &Sorting {
      width: 10rem;
      margin: 0;
    }
  }
}
</style>
