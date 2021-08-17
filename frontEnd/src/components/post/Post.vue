<template>
  <div class="container card bg-light postCard">
    <PostHeader
      :alias="post.posterProfile.alias"
      :urlPicture="post.posterProfile.urlPicture"
      :time="post.time"
      :service="post.posterProfile.service"
      :dataForPostEraser="dataPostForActions"
    />
    <PostContent
      :text="post.content.text"
      :urlPicture="post.content.urlPicture"
    />
    <PostOriginal
      :alias="post.content.originalPosterProfile.alias"
      :urlPicture="post.content.originalPosterProfile.urlPicture"
      :text="post.content.originalPosterProfile.text"
    />
    <PostStats
      :onFireId="post.onFire_id"
      :coldId="post.cold_id"
      :shareNumber="post.shareNumber"
      :commentsNumber="post.commentsList.length"
    />
    <PostIntercation
      @open-close-comment-block="commentsIsOpen = !commentsIsOpen"
    />
    <PostWriteAComment v-show="commentsIsOpen" :commentObject="dataPostForActions" />
    <PostCommentsList
      v-show="commentsIsOpen"
      :commentsList="post.commentsList"
    />
  </div>
</template>

<script>
import PostHeader from "@/components/post/PostHeader.vue";
import PostContent from "@/components/post/PostContent.vue";
import PostOriginal from "@/components/post/PostOriginal.vue";
import PostStats from "@/components/post/PostStats.vue";
import PostIntercation from "@/components/post/PostIntercation.vue";
import PostWriteAComment from "@/components/post/PostWriteAComment.vue";
import PostCommentsList from "@/components/post/PostCommentsList.vue";

export default {
  name: "Post",
  components: {
    PostHeader,
    PostContent,
    PostOriginal,
    PostStats,
    PostIntercation,
    PostWriteAComment,
    PostCommentsList,
  },
  props: {
    post: {
      type: Object,
      require: true,
    },
  },
  computed: {
    dataPostForActions() {
      let data = {}
      data.posterId = this.post.posterProfile._id
      data.postId =this.post._id
      data.time =this.post.time
      return data
    }
  },
  data() {
    return {
      commentsIsOpen: false,
    };
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
