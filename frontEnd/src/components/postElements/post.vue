<template>
  <div class="container card col-11 bg-light col-lg-8 p-0 my-4">
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

</style>
