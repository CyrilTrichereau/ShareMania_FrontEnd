<template>
  <div class="bg-primary searchBar">
    <label for="file" class="text-light h4 searchBarLabel">
      Que souhaitez vous dire ?
    </label>
    <div class="searchBarBlock">
      <div class="btn btn-primary searchBarBlockBackground" @click="sendKeyWord">
        <font-awesome-icon
          icon="search"
          class="text-light searchBarBlockBackgroundIcon"
        />
      </div>
      <input type="search" class="form-control bg-white searchBarBlockInput" v-model="keyWordFilled" placeholder="Fun, Anniversaire, C'est vendredi !, Joyeuse fête, ... " @keyup.enter="sendKeyWord"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {},
  data() {
    return {
      keyWordFilled: ""
    };
  },
  methods: {
    sendKeyWord() {
      this.$emit("keyword-for-searching-giphy", this.keyWordFilled)
    }
  },
};
</script>

<style scoped lang="scss">
.searchBar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  margin: 1rem 0;
  gap: 1rem;
  &Label {
    margin: 0 1rem;
  }
  &Block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: white 3px solid;
    border-radius: 10px;
    overflow: hidden;
    width: 80%;
    max-width: 400px;

    &Background {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 2.6rem;
      height: 2.2rem;
      &Icon {
        font-size: 1.4rem;
      }
    }
    &Input {
      border: white 2px solid;
      border-radius: 0;
      height: 2.2rem;
    }
  }
}
</style>
