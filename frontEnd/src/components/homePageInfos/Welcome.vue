<template>
  <div class="container card bg-light welcome">
    <div class="bg-primary welcomeHeader">
      <h2 class="h1 text-light welcomeHeaderTitle">Bienvenu sur ShareMania</h2>
      <p class="h6 text-light welcomeHeaderSubTitle">
        Le plus brûlant des réseaux sociaux
      </p>

      <font-awesome-icon
        icon="thumbtack"
        class="text-light welcomeHeaderThumbtack"
      />
    </div>
    <div class="welcomeMain">
      <div class="welcomeMainOnFire">
        <p class="text-light text-right h5 welcomeMainOnFireText">
          Ici, on fait chauffer les publications !...
        </p>
        <div class="welcomeMainOnFireIcon">
          <OnFire :isActive="true" :infinite="true" />
        </div>
      </div>
      <div class="welcomeMainCold">
        <div class="welcomeMainColdIcon">
          <Cold :isActive="true" :infinite="true" />
        </div>
        <p class="text-light text-left h5 welcomeMainColdText">
          ou on les refroidit !...
        </p>
      </div>
      <p class="text-primary h2 welcomeMainText">A vous de jouer !</p>
    </div>
  </div>
</template>

<script>
import OnFire from "@/components/icons/OnFire.vue";
import Cold from "@/components/icons/Cold.vue";

export default {
  name: "Welcome",
  components: {
    OnFire,
    Cold,
  },
};
</script>

<style scoped lang="scss">
// COLORS
$primary: #4d7c8a;
$secondary: #938f60;
$danger: #c02200;
$dangerBox: #ac2304c9;
$warning: rgb(107, 159, 255);
$warningBox: rgba(43, 99, 204, 0.795);
$light: #fdfeff;

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 92%;
  max-width: 828px;
  margin: 1rem 0 3rem 0;
  padding: 0;
  &Header {
    position: relative;
    width: 100%;
    &Title {
      margin: 1rem;
    }
    &SubTitle {
      margin: 1rem 2rem 2rem 2rem;
    }
    &Thumbtack {
      position: absolute;
      top: 5%;
      left: 5%;
      rotate: -45deg;
      font-size: 1.2rem;
    }
  }
  &Main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    &OnFire {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 92%;
      max-width: 320px;
      padding: 0.5rem 1rem;
      background: $dangerBox;
      border-radius: 15px;
      box-shadow: 0 0 1px $dangerBox;
      &Text {
        margin: 0 1rem 0 1rem;
        padding: 0;
      }
      &Icon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100px;
      }
    }
    &Cold {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 92%;
      max-width: 320px;
      padding: 0.5rem 1rem;
      background: $warningBox;
      border-radius: 15px;
      box-shadow: 0 0 1px $warningBox;
      &Text {
        margin: 0 1rem 0 1rem;
        padding: 0;
      }
      &Icon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100px;
      }
    }
    &Text {
      margin: 1rem 0;
    }
  }
}
</style>
