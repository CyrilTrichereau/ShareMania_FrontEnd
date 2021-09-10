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
        <SortingByButton
          @select-value="changeOrderByPostsList"
          v-if="!postsGiphy"
        />
      </div>
    </div>

    <!-- INTERNAL POSTS -->
    <div class="postsListMain" v-if="!postsGiphy">
      <div
        class="postsListMainWrapper"
        v-for="(post, index) in postsList"
        :key="index"
      >
        <Post :post="post" />
      </div>
    </div>

    <div class="postsListMain" v-else>
      <div
        class="postsListMainWrapper"
        v-for="(post, index) in listPostGiphy"
        :key="index"
      >
        <PostGiphy
          :post="post"
          @share-a-giphy-post="ascendInfoShareAGiphy"
          :descendNewPostSeasonning="newPostSeasonning"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SortingByButton from "@/components/form/SortingByButton.vue";
import Post from "@/components/post/Post.vue";
import PostGiphy from "@/components/post/PostGiphy.vue";

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
      postsList: "",
    };
  },
  computed: {
    listPostGiphy() {
      return this.$store.state.postsGiphy.listPostGiphy;
    },
  },
  methods: {
    changeOrderByPostsList(payload) {
      if (payload == "popular") {
        this.fetchPosts("popular");
      } else if (payload == "hotest") {
        this.fetchPosts("hotest");
      } else {
        this.fetchPosts();
      }
    },

    async fetchPosts(orderType) {
      // Request params
      const numberOfPostsLimit = "?limit=40";
      const startAtPostNumber = "&offset=0";
      let orderBy = null;
      if (orderType === "hotest") {
        orderBy = "&order=averageCounter:DESC";
      } else if (orderType === "popular") {
        orderBy = "&order=popularityCounter:DESC";
      } else {
        orderBy = "&order=createdAt:DESC";
      }
      const params = numberOfPostsLimit + startAtPostNumber + orderBy;

      // Get posts
      try {
        const response = await fetch(
          this.$store.state.apiUrl.entryPoint + "/feedPosts" + params,
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        this.postsList = await response.json();
        console.log(this.postsList);
      } catch (error) {
        console.log(error);
      }
    },

    ascendInfoShareAGiphy(gifObject) {
      this.$emit("ascend-share-a-giphy-post", gifObject);
    },
  },
  mounted() {
    if (!this.postsGiphy) {
      this.fetchPosts("date");
    } else {
      this.$store.dispatch("fetchPostsGiphyTrending", {
        numberOfPosts: 40,
        startAtNumber: 0,
      });
    }
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
