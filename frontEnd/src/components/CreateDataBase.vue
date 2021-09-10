// ADD TO VUE // // <CreateDataBase />
// import CreateDataBase from "@/components/CreateDataBase.vue"; // components:
{ // CreateDataBase // },

<template>
  <div class="w-100 container card">
    <p class="h1 text-primary m-1">
      Options ci-dessous
    </p>
    <button class="btn btn-primary m-2" @click="showMeObject">
      Afficher les objects
    </button>
    <button class="btn btn-secondary m-2" @click="updatePosts">
      Mettre à jour les posts
    </button>
    <button class="btn btn-primary m-2" @click="fillItUpComments">
      Mettre à jour la list de commentaire
    </button>
    <button class="btn btn-primary m-2" @click="fillItUpProfiles">
      Mettre à jour la list de profils
    </button>
    <button class="btn btn-primary m-2" @click="getArrayOfUniqueRandomInt">
      Test array of random numbers
    </button>
    <button class="btn btn-primary m-2" @click="arrayOfOnFireAndCold">
      Test array of id for onFire and cold
    </button>
    <button class="btn btn-primary m-2" @click="searchNumber">
      Test searchNumbers
    </button>
  </div>
</template>

<script>
import * as mainFile from "@/assets/createDataBase/mainFile.js";

export default {
  name: "Home",
  methods: {
    showMeObject() {
      mainFile.showMeObject();
    },
    updatePosts() {
      mainFile.updatePosts();
    },
    fillItUpComments() {
      mainFile.fillItUpComments();
    },
    fillItUpProfiles() {
      mainFile.fillItUpProfiles();
    },
    getArrayOfUniqueRandomInt() {
      mainFile.getArrayOfUniqueRandomInt(2, 0, 0, 2);
    },
    arrayOfOnFireAndCold() {
      mainFile.arrayOfOnFireAndCold(this.fillItUpProfiles());
    },
    searchNumber() {
      mainFile.searchNumber();
    },
  },
};
</script>

<style scoped lang="scss"></style>
