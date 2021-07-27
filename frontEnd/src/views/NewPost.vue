<template>
  <div class="newPost">
    <HeaderMobile/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from '@/components/header/headerMobile.vue'

export default {
  name: 'NewPost',
  components: {
    HeaderMobile, 
  }
}
</script>


<style scoped lang="scss">
.newPost {
  margin-top: 4rem;
}
</style>
