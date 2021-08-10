<template>
  <div class="postsList">
    <div class="postsListHeader">
      <h1
        class="text-primary postsListHeaderTitle"
        v-if="!smallTitle"
        @click="savePostsList"
      >
        {{ title }}
      </h1>
      <h4 class="text-primary postsListHeaderTitle" v-else>
        {{ title }}
      </h4>
      <div class="postsListHeaderSortingBy">
        <SortingByButton />
      </div>
    </div>

    <div class="postsListMain postsInternal" v-if="!posts9gag">
      <div v-for="(post, index) in listPost" :key="index">
        <div class="container card bg-light postCard">
          <PostHeader
            :alias="post.posterProfile.alias"
            :urlPicture="post.posterProfile.urlPicture"
            :time="post.time"
            :service="post.posterProfile.service"
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
          <PostWriteAComment v-show="commentsIsOpen" />
          <PostCommentsList
            v-show="commentsIsOpen"
            :commentsList="post.commentsList"
          />
        </div>
      </div>
    </div>

    <div class="postsListMain posts9Gag bg-success" v-else>
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostHeader from "@/components/post/PostHeader.vue";
import PostContent from "@/components/post/PostContent.vue";
import PostOriginal from "@/components/post/PostOriginal.vue";
import PostStats from "@/components/post/PostStats.vue";
import PostIntercation from "@/components/post/PostIntercation.vue";
import PostWriteAComment from "@/components/post/PostWriteAComment.vue";
import PostCommentsList from "@/components/post/PostCommentsList.vue";
import SortingByButton from "@/components/form/SortingByButton.vue";
import Post9gag from "@/components/post/Post9gag.vue";
import { mapState } from "vuex";

export default {
  name: "PostsList",
  components: {
    PostHeader,
    PostContent,
    PostOriginal,
    PostStats,
    PostIntercation,
    PostWriteAComment,
    PostCommentsList,
    SortingByButton,
    Post9gag,
  },
  data() {
    return {
      commentsIsOpen: true,
    };
  },
  props: {
    title: {
      type: String,
      Required: true,
    },
    posts9gag: {
      type: Boolean,
      default: false,
    },
    smallTitle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(["listPost"]),
  },
};
</script>

<style scoped lang="scss">
.postsList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  &Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    max-width: 600px;
    margin: 1rem 0;
  }
  &Main {
    width: 92%;
  }
}
.smallTitleStyle {
  font-size: 1.8rem;
}

.postCard {
  width: 100%;
  max-width: 900px;
  margin: 1rem 0;
  padding: 0;
}
</style>
