<template>
  <div class="form-group my-2 inputBlock">
    <label :class="{ 'text-dark': !titleLight, 'text-light': titleLight }">
      {{ inputName }}
    </label>
    <div class="inputBlockWrapper">
      <input
        :type="typeOfInput"
        class="form-control"
        :class="{
          inputSuccess: isValidLive === 'success',
          inputInvalid: isValidLive === 'invalid',
          inputInvalidShaking: isValidAtChange === 'invalid',
        }"
        :placeholder="inputPlaceHolder"
        v-model="inputValue"
        @change="controlAndSendInput"
        @keyup.enter="validateInputWithEnter"
      />
      <font-awesome-icon
        icon="eye"
        class="text-primary inputBlockWrapperEyeIcon"
        v-show="inputType === 'password' && passwordShowHide === 'password'"
        @click="hideOrShowPassword"
      />
      <font-awesome-icon
        icon="eye-slash"
        class="text-primary inputBlockWrapperEyeIcon"
        v-show="inputType === 'password' && passwordShowHide === 'text'"
        @click="hideOrShowPassword"
      />
    </div>
    <p
      class="inputBlockInvalidText"
      :class="{
        invalidText: !titleLight,
        invalidTextLight: titleLight,
      }"
      v-show="isValidAtChange === 'invalid'"
    >
      {{ textInvalid }}
    </p>
  </div>
</template>
<script>
export default {
  name: "InputBlock",
  props: {
    inputName: {
      type: String,
      required: true,
    },
    inputPlaceHolder: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
    titleLight: {
      type: Boolean,
      default: false,
    },
    patternType: {
      type: String,
      default: "",
    },
    textInvalid: {
      type: String,
    },
  },
  data() {
    return {
      inputValue: "",
      isValidAtChange: "none",
      isValidLive: "none",
      passwordShowHide: "password",
    };
  },
  computed: {
    whichPattern() {
      if (this.patternType == "alias") {
        return this.$store.state.pattern.alias;
      } else if (this.patternType == "email") {
        return this.$store.state.pattern.email;
      } else if (this.patternType == "password") {
        return this.$store.state.pattern.password;
      } else {
        return "";
      }
    },
    typeOfInput() {
      if (this.inputType === "password") {
        return this.passwordShowHide;
      } else {
        return this.inputType;
      }
    },
  },
  watch: {
    inputValue: function(value) {
      if (this.whichPattern !== "") {
        if (this.testRegex(value)) {
          this.isValidLive = "success";
        } else if (value === "") {
          this.isValidLive = "success";
        } else {
          this.isValidLive = "invalid";
        }
      }
    },
  },
  methods: {
    hideOrShowPassword() {
      if (this.passwordShowHide === "password") {
        this.passwordShowHide = "text";
      } else {
        this.passwordShowHide = "password";
      }
    },
    testRegex(value) {
      const patternToApply = this.whichPattern;
      if (patternToApply !== "") {
        const regex = new RegExp(patternToApply);
        if (regex.test(value)) {
          return true;
        } else {
          return false;
        }
      } else {
        return "";
      }
    },
    testIsValidValue(value) {
      if (value === "") {
        this.isValidAtChange = "success";
      } else {
        if (this.testRegex(value)) {
          this.isValidAtChange = "success";
        } else if (!this.testRegex(value)) {
          this.isValidAtChange = "invalid";
        }
      }
    },
    controlAndSendInput() {
      const arrayOutput = [this.inputValue];
      if (this.whichPattern !== "") {
        this.testIsValidValue(this.inputValue);
        arrayOutput.push(this.isValidAtChange);
      } else if (this.whichPattern === "") {
        arrayOutput.push("success");
      }
      this.$emit("input-value", arrayOutput);
    },
  validateInputWithEnter() {
    this.$emit("validate-input-with-enter");
  },
  },
};
</script>

<style scoped lang="scss">
$success: #28a745;
$danger: #c02200;

.inputBlock {
  position: relative;
  width: 90%;
  max-width: 350px;
  &InvalidText {
    width: 100%;
    padding: 0.2rem 1rem;
    margin: 0.5rem 0;
    border-radius: 5px;
  }
  &Wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    &EyeIcon {
      position: absolute;
      font-size: 1.2rem;
      right: 6px;
      height: 100%;
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
.inputInvalidShaking {
  animation: headshake 100ms cubic-bezier(0.4, 0.1, 0.6, 0.9) 3;
}
.invalidText {
  color: $danger;
  text-shadow: 0px 0px 1px $danger;
}
.invalidTextLight {
  color: white;
  text-shadow: 1px 1px 1px $danger;
}

/* INVALID INPUT */

@keyframes headshake {
  25% {
    /* droite */
    transform: translateX(1%);
  }
  75% {
    /* gauche */
    transform: translateX(-1%);
  }
}
</style>
