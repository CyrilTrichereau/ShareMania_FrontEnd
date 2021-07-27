<template>
  <div class="postStats">
    <div class="postStatsTemperature">
      <DoubleFire class="postStatsTemperatureDoubleFire"/>
      <div class="postStatsTemperatureStats">
        <p class="postStatsTemperatureStatsPercentage">
          <span class="stronger">50 %</span> sur
        </p>
        <p class="postStatsTemperatureStatsNumberPersons">
          <span class="stronger">1200</span> personnes
        </p>
      </div>
    </div>
    <div class="postStatsNumber">
      <p class="postStatsNumberComments">
        <span class="stronger">65</span> commentaires
      </p>
      <p class="postStatsNumberShare">
        <span class="stronger">23</span> partages
      </p>
    </div>
  </div>
</template>

<script>
import DoubleFire from "@/components/icons/doubleFire.vue";

export default {
  name: "PostStats",
  components: {
    DoubleFire
  },
};
</script>
<style scoped lang="scss">
.postStats {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0.5rem;
  &Temperature {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
      &DoubleFire {
margin: 0 0.4rem;
      }
    &Stats {
      &Percentage {
        margin: 0;
      }
      &NumberPersons {
        margin: 0;
      }
    }
  }
  &Number {
    &Comments {
      margin: 0;
    }
    &Share {
      margin: 0;
    }
  }
}

.stronger {
  font-weight: 600;
}
</style>
