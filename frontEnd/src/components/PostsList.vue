<template>
  <div class="postsList">
    <div class="postsListHeader">
      <div class="postsListHeaderWrapper">
        <img
          src="/images/poweredByGiphyLogoAndText250pxTinyfied.png"
          alt="Powered by Giphy"
          class="postsListHeaderWrapperLogo"
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
        <PostGiphy :post="post" />
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
  },

  data() {
    return {
      postsListOrderBy: "recent",

      postTypeTest: {
        id: "lnsGj3769kj3zPbaQj",
        username: "mlb",
        title: "All Star Game Drinking GIF by MLB",
        images: {
          original: {
            height: "288",
            width: "512",
            size: "750963",
            url:
              "https://media3.giphy.com/media/lnsGj3769kj3zPbaQj/giphy.gif?cid=64072d54h7b4n0vkxjl4rqa1zidzk44ji2xu4gmzo4b8y137&rid=giphy.gif&ct=g",

            mp4_size: "98682",
            mp4:
              "https://media3.giphy.com/media/lnsGj3769kj3zPbaQj/giphy.mp4?cid=64072d54h7b4n0vkxjl4rqa1zidzk44ji2xu4gmzo4b8y137&rid=giphy.mp4&ct=g",

            webp_size: "280078",
            webp:
              "https://media3.giphy.com/media/lnsGj3769kj3zPbaQj/giphy.webp?cid=64072d54h7b4n0vkxjl4rqa1zidzk44ji2xu4gmzo4b8y137&rid=giphy.webp&ct=g",

            frames: "16",
            hash: "502e60038d444a76e5af0f98ce61754f",
          },
          original_still: {
            height: "288",
            width: "512",
            size: "78156",
            url:
              "https://media3.giphy.com/media/lnsGj3769kj3zPbaQj/giphy_s.gif?cid=64072d54h7b4n0vkxjl4rqa1zidzk44ji2xu4gmzo4b8y137&rid=giphy_s.gif&ct=g",
          },
          original_mp4: {
            height: "270",
            width: "480",
            mp4_size: "98682",
            mp4:
              "https://media3.giphy.com/media/lnsGj3769kj3zPbaQj/giphy.mp4?cid=64072d54h7b4n0vkxjl4rqa1zidzk44ji2xu4gmzo4b8y137&rid=giphy.mp4&ct=g",
          },
        },
        user: {
          avatar_url: "https://media4.giphy.com/avatars/mlb/UTAk9uV8rZw2.jpg",
          display_name: "MLB",
        },
      },
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
      margin-bottom: 1rem;
      &Logo {
        width: 150px;
        border-radius: 15px;
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
