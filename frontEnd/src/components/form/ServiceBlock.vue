<template>
  <div class="form-group my-2 inputBlock">
    <label for="selectServiceSelection">Sélectionnez votre service</label>

    <select
      class="btn btn-light form-select inputBlockSelect"
      :class="{
        inputSuccess: noChoiceSelected === 'success',
        inputInvalid: noChoiceSelected === 'invalid',
      }"
      id="selectServiceSelection"
      aria-label="Sélectionnez votre service"
      required
      v-model="selectValue"
      @change="sendSelected"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :disabled="option.isDisabled"
        class="text-wrap"
      >
        {{ option.name }}
      </option>
    </select>
    <p
      class="inputBlockInvalidText"
      :class="{ invalidText: !titleLight, invalidTextLight: titleLight }"
      v-show="noChoiceSelected === 'invalid'"
    >
      {{ textInvalid }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ServiceBlock",
  props: {
    inscription: {
      type: Boolean,
      default: false,
    },
    textInvalid: {
      type: String,
    },
    titleLight: {
      type: Boolean,
      default: false,
    },
    noChoiceSelected: {
      type: String,
      default: "none",
    },
  },
  data() {
    return {
      selectValue: "Sélectionnez votre service",
      options: [
        {
          name: "Sélectionnez votre service",
          isDisabled: true,
        },
        {
          name: "Achats",
          isDisabled: false,
        },
        {
          name: "Commercial",
          isDisabled: false,
        },
        {
          name: "Comptabilité",
          isDisabled: false,
        },
        {
          name: "Informatique",
          isDisabled: false,
        },
        {
          name: "Marketing",
          isDisabled: false,
        },
        {
          name: "Ressources Humaines",
          isDisabled: false,
        },
      ],
    };
  },
  methods: {
    sendSelected() {
      this.$emit("select-value", this.selectValue);
    },
  },
  mounted() {
    if (!this.inscription) {
      this.selectValue = this.$store.state.profile.myProfile.service;
    }
  },
};
</script>

<style scoped lang="scss">
$success: #28a745;
$danger: #c02200;

.inputBlock {
  width: 90%;
  max-width: 350px;
  &Select {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    border: 1px solid #ced4da;
    &:focus {
      background: white;
    }
  }
}
.inputSuccess {
  border: 1px $success solid;
  box-shadow: 0 0 2px 1px $success, 0 0 2px 2px white;
}
.inputInvalid {
  border: 1px $danger solid;
  box-shadow: 0 0 2px 1px $danger, 0 0 2px 2px white;
}
.invalidText {
  color: $danger;
  text-shadow: 0px 0px 1px $danger;
}
.invalidTextLight {
  color: white;
  text-shadow: 1px 1px 1px $danger;
}
</style>
