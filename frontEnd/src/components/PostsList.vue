<template>
  <div class="postsList">
    <div class="postsListHeader">
      <div class="postsListHeaderWrapper">
        <img
          src="/images/poweredByGiphyLogoAndText250pxTinyfied.png"
          alt="Powered by Giphy"
          class="postsListHeaderWrapperLogo"
          :class="{
            postsListHeaderWrapperLogoSmall: smallTitle,
            postsListHeaderWrapperLogoBig: !smallTitle,
          }"
          v-if="postsGiphy"
        />
      </div>
      <h1 class="text-primary postsListHeaderTitle" v-if="!smallTitle">
        {{ title }}
      </h1>
      <h4 class="text-primary postsListHeaderTitle" v-else>
        {{ title }}
      </h4>
      <div class="postsListHeaderSortingBy">
        <SortingByButton @select-value="saveOrderPosts" v-if="!postsGiphy" />
      </div>
    </div>

    <!-- INTERNAL POSTS -->
    <div class="postsListMain" v-if="!postsGiphy">
      <div class="postsListMain" v-if="postsListOrderBy === 'recent'">
        <div
          class="postsListMainWrapper"
          v-for="(post, index) in byOrderRecent"
          :key="index"
        >
          <Post :post="post" />
        </div>
      </div>
      <div class="postsListMain" v-if="postsListOrderBy === 'popular'">
        <div
          class="postsListMainWrapper"
          v-for="(post, index) in byOrderPopular"
          :key="index"
        >
          <Post :post="post" />
        </div>
      </div>
      <div class="postsListMain" v-if="postsListOrderBy === 'shared'">
        <div
          class="postsListMainWrapper"
          v-for="(post, index) in byOrderShared"
          :key="index"
        >
          <Post :post="post" />
        </div>
      </div>
      <div class="postsListMain" v-else>
        <div
          class="postsListMainWrapper"
          v-for="(post, index) in listPost"
          :key="index"
        >
          <Post :post="post" />
        </div>
      </div>
    </div>

    <div class="postsListMain" v-else>
      <div
        class="postsListMainWrapper"
        v-for="(post, index) in listPostGiphy"
        :key="index"
      >
        <PostGiphy :post="post" @share-a-giphy-post="ascendInfoShareAGiphy"
      :descendNewPostSeasonning="newPostSeasonning" />
      </div>
    </div>
  </div>
</template>

<script>
import SortingByButton from "@/components/form/SortingByButton.vue";
import Post from "@/components/post/Post.vue";
import PostGiphy from "@/components/post/PostGiphy.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "PostsList",
  components: {
    SortingByButton,
    Post,
    PostGiphy,
  },

  props: {
    title: {
      type: String,
      Required: true,
    },
    postsGiphy: {
      type: Boolean,
      default: false,
    },
    smallTitle: {
      type: Boolean,
      default: false,
    },
    newPostSeasonning: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      postsListOrderBy: "recent",
    };
  },
  computed: {
    ...mapState(["listPost", "listPostGiphy"]),
    ...mapGetters(["byOrderRecent", "byOrderPopular", "byOrderShared"]),
  },
  methods: {
    saveOrderPosts(payload) {
      this.postsListOrderBy = payload;
    },
    ascendInfoShareAGiphy(gifObject) {
      this.$emit("ascend-share-a-giphy-post", gifObject);
    },
  },
};
</script>

<style scoped lang="scss">
.postsList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 92%;
  &Header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    max-width: 600px;
    margin: 0.5rem 0;
    &Wrapper {
      width: 100%;
      &Logo {
        &Big {
          width: 150px;
          border-radius: 15px;
          margin-bottom: 1rem;
        }
        &Small {
          width: 75px;
          border-radius: 5px;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  &Main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    &Wrapper {
      width: 100%;
    }
  }
}
.smallTitleStyle {
  font-size: 1.8rem;
}
</style>
