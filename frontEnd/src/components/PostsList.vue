<template>
  <div class="postsList">
    <div class="postsListHeader">
      <!-- Title and sorting button -->
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
      <!-- Giphy Logo and search bar -->
      <div class="postsListHeaderWrapper" v-if="postsGiphy">
        <img
          src="/images/poweredByGiphyLogoAndText250pxTinyfied.png"
          alt="Powered by Giphy"
          class="postsListHeaderWrapperLogo"
          :class="{
            postsListHeaderWrapperLogoSmall: smallTitle,
            postsListHeaderWrapperLogoBig: !smallTitle,
          }"
        />
        <SearchBar @keyword-for-searching-giphy="searchGiphyWithKeyword" />
      </div>
    </div>

    <!-- INTERNAL POSTS -->
    <!-- Empty before loading -->
    <div class="postsListMain" v-if="!postsGiphy && !postsList">
      <div class="postsListMainWrapper">
        <PostEmpty />
        <PostEmpty />
        <PostEmpty />
        <PostEmpty />
      </div>
    </div>

    <!-- When loading complete -->
    <div class="postsListMain" v-if="!postsGiphy && postsList">
      <div
        class="postsListMainWrapper"
        v-for="(post, index) in postsList"
        :key="index"
      >
        <Post :post="post" @update-posts-list="updatePostsList" />
      </div>
    </div>

    <!-- GIPHY POSTS -->
    <!-- Empty before loading -->
    <div class="postsListMain" v-if="postsGiphy && !postsGiphyList">
      <div class="postsListMainWrapper">
        <PostEmptyGiphy />
        <PostEmptyGiphy />
        <PostEmptyGiphy />
        <PostEmptyGiphy />
      </div>
    </div>

    <!-- When loading complete -->
    <div class="postsListMain" v-if="postsGiphy && postsGiphyList">
      <div
        class="postsListMainWrapper"
        v-for="(post, index) in returnPostsGiphyList"
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
import SearchBar from "@/components/form/SearchBar.vue";
import SortingByButton from "@/components/form/SortingByButton.vue";
import PostEmpty from "@/components/post/PostEmpty.vue";
import PostEmptyGiphy from "@/components/post/PostEmptyGiphy.vue";
import Post from "@/components/post/Post.vue";
import PostGiphy from "@/components/post/PostGiphy.vue";

export default {
  name: "PostsList",
  components: {
    SearchBar,
    SortingByButton,
    PostEmpty,
    PostEmptyGiphy,
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
      postsList: null,
      postsGiphyList: null,
      numberOfPostsToFetch: 10,
      displayToPostNumber: 0,
      orderBySaved: "date",
      numberOfPostsGiphyToFetch: 10,
      displayToPostGiphyNumber: 0,
      giphyKeyWordToSearch: "",
      lastTypeUsed: "trending",
    };
  },
  computed: {
    returnPostsGiphyList() {
      return this.postsGiphyList;
    },
  },
  methods: {
    updatePostsList() {
      this.$emit("update-posts-list");
    },
    changeOrderByPostsList(payload) {
      if (payload == "popular") {
        this.postsList = null;
        this.displayToPostNumber = 0;
        this.orderBySaved = "popular";
        this.fetchPosts(
          "popular",
          this.numberOfPostsToFetch,
          this.displayToPostNumber
        );
      } else if (payload == "hotest") {
        this.postsList = null;
        this.displayToPostNumber = 0;
        this.orderBySaved = "hotest";
        this.fetchPosts(
          "hotest",
          this.numberOfPostsToFetch,
          this.displayToPostNumber
        );
        this.orderBySaved = "hotest";
      } else {
        this.postsList = null;
        this.displayToPostNumber = 0;
        this.fetchPosts(
          "date",
          this.numberOfPostsToFetch,
          this.displayToPostNumber
        );
      }
    },

    async fetchPosts(orderType, numberOfPosts, startAtNumber) {
      // Request params
      const numberOfPostsLimit = "?limit=" + numberOfPosts;
      const startAtPostNumber = "&offset=" + startAtNumber;
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
        const responseJson = await response.json();
        if (!this.postsList) {
          this.postsList = responseJson;
        } else {
          await responseJson.forEach((post) => {
            this.postsList.push(post);
          });
        }
        this.displayToPostNumber += this.numberOfPostsToFetch;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchPostsGiphyTrending(type) {
      try {
        let urlBuilded = null;
        if (type === "search") {
          urlBuilded =
            this.$store.state.apiUrl.giphySearch +
            "?api_key=" +
            this.$store.state.apiUrl.apiKey.forFeed +
            "&q=" +
            this.giphyKeyWordToSearch +
            "&limit=" +
            this.numberOfPostsGiphyToFetch +
            "&offset=" +
            this.displayToPostGiphyNumber +
            "&rating=r&lang=fr";
          this.lastTypeUsed = "search";
        } else {
          urlBuilded =
            this.$store.state.apiUrl.giphyTrending +
            "?api_key=" +
            this.$store.state.apiUrl.apiKey.forFeed +
            "&limit=" +
            this.numberOfPostsGiphyToFetch +
            "&offset=" +
            this.displayToPostGiphyNumber +
            "&rating=r";
          this.lastTypeUsed = "trending";
        }

        const response = await fetch(urlBuilded);
        const responseConverted = await response.json();

        if (!this.postsGiphyList) {
          this.postsGiphyList = responseConverted.data;
        } else {
          responseConverted.data.forEach((postToPush) => {
            this.postsGiphyList.push(postToPush);
          });
        }

        this.displayToPostGiphyNumber += this.numberOfPostsGiphyToFetch;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMorePosts(isGiphy) {
      window.onscroll = async () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          if (!isGiphy) {
            this.postsList.push(
              this.fetchPosts(
                this.orderBySaved,
                this.numberOfPostsToFetch,
                this.displayToPostNumber
              )
            );
          } else {
            this.fetchPostsGiphyTrending(this.lastTypeUsed);
          }
        }
      };
    },
    searchGiphyWithKeyword(keyWord) {
      this.giphyKeyWordToSearch = keyWord;
      this.postsGiphyList = null;
      this.fetchPostsGiphyTrending("search");
    },
    ascendInfoShareAGiphy(gifObject) {
      this.$emit("ascend-share-a-giphy-post", gifObject);
    },
  },
  async mounted() {
    if (!this.postsGiphy) {
      this.fetchPosts("date", this.numberOfPostsToFetch, 0);
      this.displayToPostNumber = this.numberOfPostsToFetch;
      this.fetchMorePosts(false);
    } else {
      this.fetchPostsGiphyTrending("trending");
      this.fetchMorePosts(true);
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
  max-width: 900px;
  width: 100%;
  &Header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 0.5rem 0;
    &Title {
      margin: 0 2rem;
    }
    &Wrapper {
      width: 100%;
      &Logo {
        &Big {
          width: 150px;
          border-radius: 15px;
          margin-top: 1rem;
        }
        &Small {
          width: 75px;
          border-radius: 5px;
          margin-top: 0.5rem;
        }
      }
    }
  }
  &Main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 92%;
    &Wrapper {
      width: 100%;
    }
  }
}
.smallTitleStyle {
  font-size: 1.8rem;
}
</style>
