<template>
  <div class="postStats">
    <div class="postStatsTemperature">
      <DoubleFire class="postStatsTemperatureDoubleFire" />
      <div class="postStatsTemperatureStats">
        <p class="postStatsTemperatureStatsPercentage">
          <span class="stronger"> {{ percentageOfOnFire }} %</span>
        </p>
        <p class="postStatsTemperatureStatsNumberPersons">
          <span class=""> {{ onFireId.length + coldId.length }} </span> votes
        </p>
      </div>
    </div>
    <div class="postStatsNumber">
      <p class="postStatsNumberComments">
        <span class="stronger"> {{ commentsNumber }} </span> commentaires
      </p>
      <p class="postStatsNumberShare">
        <span class="stronger"> {{ shareNumber }} </span> partages
      </p>
    </div>
  </div>
</template>

<script>
import DoubleFire from "@/components/icons/DoubleFire.vue";
import * as utils from "@/assets/utils.js";

export default {
  name: "PostStats",
  components: {
    DoubleFire,
  },
  props: {
    onFireId: {
      type: Array,
      require: true,
    },
    coldId: {
      type: Array,
      require: true,
    },
    shareNumber: {
      require: true,
    },
    commentsNumber: {
      type: Number,
      require: true,
    },
  },
  computed: {
    percentageOfOnFire() {
      return utils.onFirePercentage(this.onFireId, this.coldId);
    },
  },
};
</script>
<style scoped lang="scss">
.postStats {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
