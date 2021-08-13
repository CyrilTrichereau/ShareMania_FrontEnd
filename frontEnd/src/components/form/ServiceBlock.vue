<template>
  <div class="form-group my-2 inputBlock">
    <label for="selectServiceSelection">Sélectionnez votre service</label>

    <select
      class="btn btn-light form-select selectService"
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ServiceBlock",
  data() {
    return {
      selectValue: "",
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
  computed: {
    ...mapState(["myProfile"]),
  },
  methods: {
    sendSelected() {
      this.$emit("select-value", this.selectValue);
    },
  },
  mounted() {
    this.selectValue = this.myProfile.service
  },
};
</script>

<style scoped lang="scss">
.selectService {
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
.inputBlock {
  width: 90%;
  max-width: 350px;
}
</style>
