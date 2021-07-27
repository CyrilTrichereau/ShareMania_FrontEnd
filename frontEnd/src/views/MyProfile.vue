<template>
  <div class="myProfile">
    <HeaderMobile/>
    <ProfileShowed/>
    <ProfileModify/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from '@/components/header/headerMobile.vue'
import ProfileShowed from '@/components/profileElements/profileShowed.vue'
import ProfileModify from '@/components/profileElements/profileModify.vue'

export default {
  name: 'MyProfile',
  components: {
    HeaderMobile, ProfileShowed, ProfileModify,
  }
}
</script>

<style scoped lang="scss">
.myProfile {
  margin-top: 4rem;
}
</style>