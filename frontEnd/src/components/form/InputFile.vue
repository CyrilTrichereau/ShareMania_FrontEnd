<template>
  <div class="inputFile"> 
    <label for="file" class="btn btn-primary inputFileLabel">
      {{ text }}
    </label>

    <input
      type="file"
      name="file"
      id="file"
      accept="image/png, image/jpeg, video/mp4 video/wbem"
      class="btn btn-primary inputFileInput"
      @change="ascendSendMediaToPostObject"
    />
  </div>
</template>

<script>
export default {
  name: "InputFile",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      url: null,
    }
  },
  methods: {
    ascendSendMediaToPostObject(payload) {
      const file = payload.target.files[0];
      this.url = URL.createObjectURL(file);
      const mediaToAscend = [payload, this.url];
      this.$emit("ascend-send-media-to-post-object", mediaToAscend);
    },
  },
};
</script>

<style scoped lang="scss">
.inputFile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &Label {
    border: white solid 2px;
    padding: 0.5rem 2rem;
    margin: 8px 0;
  }
  &Input {
    display: none;
  }
}
</style>
