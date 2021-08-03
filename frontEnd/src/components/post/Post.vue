<template>
  <div class="container card bg-light postCard">
    <PostHeader />
    <PostContent />
    <PostOriginal />
    <PostStats />
    <PostIntercation @open-close-comment-block="openCloseComments" />
    <WriteAComment v-if="this.commentsIsOpen" />
    <DisplayComments v-if="this.commentsIsOpen" />
  </div>
</template>

<script>
import PostHeader from "@/components/post/PostHeader.vue";
import PostContent from "@/components/post/PostContent.vue";
import PostOriginal from "@/components/post/PostOriginal.vue";
import PostStats from "@/components/post/PostStats.vue";
import PostIntercation from "@/components/post/PostIntercation.vue";
import WriteAComment from "@/components/post/PostWriteAComment.vue";
import DisplayComments from "@/components/post/PostCommentsList.vue";

export default {
  name: "Post",
  components: {
    PostHeader,
    PostContent,
    PostOriginal,
    PostStats,
    PostIntercation,
    WriteAComment,
    DisplayComments,
  },
  data() {
    return {
      commentsIsOpen: false,
    };
  },
  methods: {
    openCloseComments() {
      if (this.commentsIsOpen === false) {
        this.commentsIsOpen = true;
      } else {
        this.commentsIsOpen = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.postCard {
  width: 100%;
  max-width: 900px;
  margin: 1rem 0;
  padding: 0;
}
</style>
