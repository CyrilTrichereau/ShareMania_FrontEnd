<template>
  <div class="ellipsis">
    <div class="ellipsisButton" @click="postMenuIsOpen = !postMenuIsOpen">
      <Ellipsis v-if="small" :small="true" />
      <Ellipsis v-if="small === false" />
    </div>
    <nav class="card container bg-light ellipsisMenu" v-show="postMenuIsOpen">
      <button class="btn btn-white ellipsisMenuButton">
        <li class="h6 text-primary ellipsisMenuButtonText">
          {{ firstLineText }}
        </li>
      </button>
      <button
        class="btn btn-white ellipsisMenuButton"
        @click="eraseConfirmationIsOpen = !eraseConfirmationIsOpen"
        v-if="displayEraseLine"
      >
        <li class="h6 text-danger ellipsisMenuButtonText">
          {{ secondLineText }}
        </li>
      </button>
    </nav>
    <div class="ellipsisEraseConfirmation">
      <EraseConfirm
        :typeToErase="typeToErase"
        v-show="eraseConfirmationIsOpen"
        @close-erase-confirmation-window="
          eraseConfirmationIsOpen = !eraseConfirmationIsOpen
        "
        @confirmation-erase="confirmToErase"
      />
    </div>
  </div>
</template>

<script>
import Ellipsis from "@/components/icons/Ellipsis.vue";
import EraseConfirm from "@/components/EraseConfirm.vue";

export default {
  name: "EllipsisMenu",
  components: {
    Ellipsis,
    EraseConfirm,
  },
  data() {
    return {
      postMenuIsOpen: false,
      eraseConfirmationIsOpen: false,
    };
  },
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    firstLineText: {
      type: String,
      required: true,
    },
    secondLineText: {
      type: String,
      required: true,
    },
    typeToErase: {
      type: String,
      required: true,
    },
    displayEraseLine: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    confirmToErase() {
      this.$emit("confirm-erase");
    },
  },
};
</script>

<style scoped lang="scss">
.ellipsis {
  z-index: 21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  position: relative;
  &Button {
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  &Menu {
    width: 300px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 4rem 1rem 2rem 2rem;
    gap: 0.5rem;
    &Button {
      margin: 0;
      padding: 0;
      &Text {
        width: 100%;
        text-align: left;
        padding-left: 1rem;
      }
    }
  }
}
</style>
