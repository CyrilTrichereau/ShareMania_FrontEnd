<template>
  <div class="container card bg-light postCard">
    <PostHeader
      :alias="post.posterProfile.alias"
      :urlPicture="post.posterProfile.urlPicture"
      :posterId="post.posterProfile._id"
      :time="post.time"
      :service="post.posterProfile.service"
      :dataForPostEraser="dataPostForActions"
      @update-posts-list="updatePostsList"
    />
    <PostContent
      :text="post.content.text"
      :urlPicture="post.content.urlPicture"
    />
    <PostOriginal
      :alias="post.content.originalPosterProfile.alias"
      :urlPicture="post.content.originalPosterProfile.urlPicture"
      :text="post.content.originalPosterProfile.text"
      v-if="
        post.content.originalPosterProfile.alias &&
          post.content.originalPosterProfile.alias !== 'null'
      "
    />
    <PostStats
      :onFireCounter="onFireCounterChecked"
      :coldCounter="coldCounterChecked"
      :averageCounter="averageCounterChecked"
      :commentsNumber="numberOfComments"
    />
    <PostIntercation
      @open-close-comment-block="commentsIsOpen = !commentsIsOpen"
      @make-it-on-fire="makeItOnFire"
      @make-it-cold="makeItCold"
      :isLike="isLikeUpdated"
    />
    <PostWriteAComment
      v-show="commentsIsOpen"
      @update-comments-list="keyComponent++"
      :commentObject="dataPostForActions"
    />
    <PostCommentsList
      :key="keyComponent"
      v-show="commentsIsOpen"
      :postId="post._id"
      @number-of-comments="updateNumberOfComments"
      @update-comments-list="keyComponent++"
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
  data() {
    return {
      keyComponent: 0,
      commentsIsOpen: false,
      commentsList: null,
      numberOfComments: null,
      averageCounterUpdated: "none",
      onFireCounterUpdated: "none",
      coldCounterUpdated: "none",
      isLikeUpdated: 0,
    };
  },
  computed: {
    dataPostForActions() {
      let data = {
        posterId: this.post.posterProfile._id,
        postId: this.post._id,
        time: this.post.time,
      };
      return data;
    },
    averageCounterChecked() {
      if (this.averageCounterUpdated === "none") {
        if (this.post.averageCounter) {
          return this.post.averageCounter;
        } else {
          return 0;
        }
      } else {
        if (this.averageCounterUpdated) {
          return this.averageCounterUpdated;
        } else {
          return 0;
        }
      }
    },
    onFireCounterChecked() {
      if (this.onFireCounterUpdated === "none") {
        if (this.post.onFireCounter) {
          return this.post.onFireCounter;
        } else {
          return 0;
        }
      } else {
        if (this.onFireCounterUpdated) {
          return this.onFireCounterUpdated;
        } else {
          return 0;
        }
      }
    },
    coldCounterChecked() {
      if (this.coldCounterUpdated === "none") {
        if (this.post.coldCounter) {
          return this.post.coldCounter;
        } else {
          return 0;
        }
      } else {
        if (this.coldCounterUpdated) {
          return this.coldCounterUpdated;
        } else {
          return 0;
        }
      }
    },
  },
  methods: {
    updatePostsList() {
      this.$emit("update-posts-list");
    },
    updateNumberOfComments(payload) {
      this.numberOfComments = payload;
    },
    async makeItOnFire() {
      let response = null;
      let responseOnFire = null;
      // fetch new post
      try {
        response = await fetch(
          this.$store.state.apiUrl.entryPoint +
            "/feedPost/" +
            this.post._id +
            "/vote/like/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
          }
        );
        responseOnFire = await response.json();
        console.log({ responseOnFire: responseOnFire });
      } catch (error) {
        console.log(error);
      }
      // Update counters : onFire, Cold and average counter
      this.averageCounterUpdated = responseOnFire.averageCounter;
      this.isLikeUpdated = responseOnFire.isLike;
      this.onFireCounterUpdated = responseOnFire.onFireCounter;
      this.coldCounterUpdated = responseOnFire.coldCounter;
    },
    async makeItCold() {
      let response = null;
      let responseCold = null;
      // fetch new post
      try {
        response = await fetch(
          this.$store.state.apiUrl.entryPoint +
            "/feedPost/" +
            this.post._id +
            "/vote/dislike/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
          }
        );
        responseCold = await response.json();
        console.log({ responseCold: responseCold });
      } catch (error) {
        console.log(error);
      }
      // Update counters : onFire, Cold and average counter
      this.averageCounterUpdated = responseCold.averageCounter;
      this.isLikeUpdated = responseCold.isLike;
      this.onFireCounterUpdated = responseCold.onFireCounter;
      this.coldCounterUpdated = responseCold.coldCounter;
    },
  },
  watch: {
    post: function(newPost) {
      this.isLikeUpdated = newPost.isLike;
    },
  },
  created() {
    if (this.post.isLike === -1 || this.post.isLike === 1) {
      this.isLikeUpdated = this.post.isLike;
    }
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
