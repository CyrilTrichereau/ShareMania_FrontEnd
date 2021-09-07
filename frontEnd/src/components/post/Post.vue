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
      :onFireCounter="post.onFireCounter"
      :coldCounter="post.coldCounter"
      :averageCounter="post.averageCounter"
      :commentsNumber="numberOfComments"
    />

    <!-- transit comments list lenght  to posts stats -->

    <PostIntercation
      @open-close-comment-block="commentsIsOpen = !commentsIsOpen"
    />
    <PostWriteAComment
      v-show="commentsIsOpen"
      :commentObject="dataPostForActions"
    />
    <PostCommentsList
      v-show="commentsIsOpen"
      :postId="post._id"
      @number-of-comments="updateNumberOfComments"
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
      let data = {};
      data.posterId = this.post.posterProfile._id;
      data.postId = this.post._id;
      data.time = this.post.time;
      return data;
    },
  },
  data() {
    return {
      commentsIsOpen: false,
      commentsList: null,
      numberOfComments: null,
    };
  },
  methods: {
    async fetchPosts(context, orderType) {
      // Request params
      const numberOfPostsLimit = "?limit=10";
      const startAtPostNumber = "&offset=0";
      let orderBy = null;
      if (orderType === "hotest") {
        orderBy = "&order=averageCounter:DESC";
      } else if (orderType === "popular") {
        orderBy = "&order=popularityCounter:DESC";
      } else {
        orderBy = "&order=createdAt:ASC";
      }
      const params = numberOfPostsLimit + startAtPostNumber + orderBy;

      try {
        const response = await fetch(
          this.$store.state.apiUrl.entryPoint + "/feedPosts" + params,
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        const responseJson = await response.json();
        console.log(responseJson);
        context.commit("STORE_LIST_POSTS", responseJson.body);
      } catch (error) {
        console.log(error);
      }
    },
    updateNumberOfComments(payload) {
      this.numberOfComments = payload;
    },
  },
  created() {
    this.fetchComments;
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
