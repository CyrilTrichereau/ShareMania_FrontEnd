<template>
  <div class="postStats">
    <div class="postStatsTemperature">
      <DoubleFire class="postStatsTemperatureDoubleFire" />
      <div class="postStatsTemperatureStats">
        <p class="postStatsTemperatureStatsPercentage">
          <span class="stronger"> {{ averageCounterChecked }} %</span>
        </p>
        <p class="postStatsTemperatureStatsNumberPersons">
          <span class=""> {{ onFireCounter + coldCounter }} </span> votes
        </p>
      </div>
    </div>
    <div class="postStatsNumber">
      <p class="postStatsNumberComments">
        <span class="stronger"> {{ commentsNumber }} </span> commentaires
      </p>
    </div>
  </div>
</template>

<script>
import DoubleFire from "@/components/icons/DoubleFire.vue";

export default {
  name: "PostStats",
  components: {
    DoubleFire,
  },
  props: {
    onFireCounter: {
      type: Number,
      require: true,
    },
    coldCounter: {
      type: Number,
      require: true,
    },
    averageCounter: {
      type: Number,
      require: true,
    },
    commentsNumber: {
      type: Number,
      require: true,
    },
  },
  computed: {
    averageCounterChecked() {
      if (!this.averageCounter) {
        return 0;
      } else {
        return this.averageCounter;
      }
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
