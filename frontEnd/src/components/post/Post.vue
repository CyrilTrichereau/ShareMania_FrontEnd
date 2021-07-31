<template>
  <div class="container card bg-light postCard">
    <PostHeader/>
    <PostContent/>
    <PostOriginal/>
    <PostStats/>
    <PostIntercation/>
    <WriteAComment/>
    <DisplayComments/>
  </div>
</template>

<script>
import PostHeader from '@/components/post/PostHeader.vue'
import PostContent from '@/components/post/PostContent.vue'
import PostOriginal from '@/components/post/PostOriginal.vue'
import PostStats from '@/components/post/PostStats.vue'
import PostIntercation from '@/components/post/PostIntercation.vue'
import WriteAComment from '@/components/post/PostWriteAComment.vue'
import DisplayComments from '@/components/post/PostCommentsList.vue'

export default {
  name: "Post",
  components: {
      PostHeader, PostContent, PostOriginal, PostStats, PostIntercation, WriteAComment, DisplayComments
  }
};
</script>


<style scoped lang="scss">
.postCard {
  width: 92%;
  max-width: 900px;
  margin: 1rem 0;
  padding: 0;
}
</style>
