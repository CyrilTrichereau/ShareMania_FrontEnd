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
import PostHeader from '@/components/postElements/postHeader.vue'
import PostContent from '@/components/postElements/postContent.vue'
import PostOriginal from '@/components/postElements/postOriginal.vue'
import PostStats from '@/components/postElements/postStats.vue'
import PostIntercation from '@/components/postElements/postIntercation.vue'
import WriteAComment from '@/components/postElements/writeAComment.vue'
import DisplayComments from '@/components/postElements/displayComments.vue'

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
}
</style>
