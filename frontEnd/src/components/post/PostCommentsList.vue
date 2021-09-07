<template>
  <div class="displayComments" >

    <div class="displayCommentsHeader" v-if="commentsList.length >= 1">
      <p class="displayCommentsHeaderTitle text-primary">Commentaires</p>
      <div class="displayCommentsHeaderSorting">
        <SortingByButton 
        typeSortingBy="comment"
        @select-value="changeOrderByCommentsList" />
      </div>
    </div>
    <div
      v-for="(comment, index) in commentsList"
      :key="index"
      class="displayCommentsList"
    >
      <Comment :commentObject="comment" />
    </div>
  </div>
</template>

<script>
import SortingByButton from "@/components/form/SortingByButton.vue";
import Comment from "@/components/post/PostComment.vue";

export default {
  name: "PostCommentsList",
  components: {
    SortingByButton,
    Comment,
  },
  props: {
    postId: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      commentsList: false,
    };
  },
  methods: {

    async fetchComments(orderType) {
      // Request params
      const numberOfCommentsLimit = "?limit=30";
      const startAtPostNumber = "&offset=0";
      let orderBy = null;
      if (orderType === "hotest") {
        orderBy = "&order=averageCounter:DESC";
      } else if (orderType === "popularity") {
        orderBy = "&order=popularityCounter:DESC";
      } else {
        orderBy = "&order=createdAt:DESC";
      }
      const params = numberOfCommentsLimit + startAtPostNumber + orderBy;

      try {
        const response = await fetch(
          this.$store.state.apiUrl.entryPoint + "/" + this.postId + "/postComment" + params,
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        this.commentsList = await response.json();
        this.$emit("number-of-comments", this.commentsList.length)
        console.log(this.commentsList);
      } catch (error) {
        console.log(error);
      }
    },

    changeOrderByCommentsList(payload) {
      if (payload == "popular") {
        this.fetchComments("popular");
      } else if (payload == "hotest") {
        this.fetchComments("hotest");
      } else {
        this.fetchComments();
      }
    },
  },
  mounted() {
    this.fetchComments();
  },
  watch: {
    postId: function () {
    this.fetchComments();
    }
  }
};
</script>

<style scoped lang="scss">
.displayComments {
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
    width: 80%;

    &Title {
      font-size: 1.3rem;
      margin: 0;
    }
    &Sorting {
      margin: 0;
      padding: 0;
    }
  }
  &List {
    width: 100%;
  }
}
</style>
