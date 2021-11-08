<template>
  <div class="container card bg-light postEmpty">
    <div class="postEmptyHeader">
      <div class="postEmptyHeaderPicture"></div>
      <div class="postEmptyHeaderText">
        <div class="postEmptyHeaderTextLign"></div>
        <div class="postEmptyHeaderTextLign"></div>
      </div>
    </div>
    <div class="postEmptyContent">
      <SpinnerLoading />
      <div class="postEmptyContentText"></div>
      <div class="postEmptyContentPicture"></div>
    </div>
    <div class="postEmptyOriginal">
      <div class="postEmptyOriginalPicture"></div>
      <div class="postEmptyOriginalText">
        <div class="postEmptyOriginalTextLign"></div>
        <div class="postEmptyOriginalTextLign"></div>
      </div>
    </div>
    <div class="postEmptyStats">
      <div class="postEmptyStatsRound"></div>
      <div class="postEmptyStatsText"></div>
    </div>
    <div class="postEmptyInteractionsBackground">
      <div class="postEmptyInteractions">
        <div class="postEmptyInteractionsRound"></div>
        <div class="postEmptyInteractionsRound"></div>
        <div class="postEmptyInteractionsRound"></div>
      </div>
    </div>
    <div class="postEmptyCurtain"></div>
  </div>
</template>

<script>
import SpinnerLoading from "@/components/icons/SpinnerLoading.vue";

export default {
  name: "PostEmpty",
  components: {
    SpinnerLoading,
  },
};
</script>

<style scoped lang="scss">
$colorEmptyPrimary: #4d7c8a59;
$colorEmptySecondary: #4d7c8ab9;

.postEmpty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 1rem 0;
  padding: 0;
  &Header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 70px;
    margin: 10px 0;
    border-radius: 50px;
    background-color: $colorEmptyPrimary;
    &Picture {
      border-radius: 50px;
      height: 60px;
      width: 60px;
      background-color: $colorEmptySecondary;
    }
    &Text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 65%;
      height: 100%;
      &Lign {
        border-radius: 50px;
        height: 13px;
        width: 100%;
        background-color: $colorEmptySecondary;
      }
    }
  }

  &Content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 15px 0 0 0;
    margin: 10px 0 0 0;
    border-radius: 25px 25px 0 0;
    gap: 10px;
    background-color: $colorEmptyPrimary;
    &Picture {
      width: 100%;
      height: 250px;
      background-color: $colorEmptySecondary;
    }
    &Text {
      border-radius: 50px;
      height: 13px;
      width: 80%;
      background-color: $colorEmptySecondary;
    }
  }

  &Original {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 85%;
    height: 50px;
    margin: 0 0 10px 0;
    padding: 0 10px;
    border-radius: 0 0 25px 25px;
    background-color: $colorEmptyPrimary;
    &Picture {
      border-radius: 50px;
      height: 40px;
      width: 40px;
      background-color: $colorEmptySecondary;
    }
    &Text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 65%;
      height: 100%;
      &Lign {
        border-radius: 50px;
        height: 9px;
        width: 100%;
        background-color: $colorEmptySecondary;
      }
    }
  }
  &Stats {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 20px 0;
    &Round {
      border-radius: 50px;
      height: 40px;
      width: 40px;
      background-color: $colorEmptySecondary;
    }
    &Text {
      border-radius: 50px;
      height: 9px;
      width: 30%;
      background-color: $colorEmptySecondary;
    }
  }

  &Interactions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 10px 0 0 0;
    padding: 20px 0;
    &Background {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      background-color: $colorEmptyPrimary;
    }
    &Round {
      border-radius: 50px;
      height: 50px;
      width: 50px;
      background-color: $colorEmptySecondary;
    }
  }
  &Curtain {
    z-index: 10;
    top: 0;
    width: 100%;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(255, 255, 255, 0.164);
  }
}
</style>
