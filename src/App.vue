<template>
  <div class="app">
    <!-- HEADER MOBILE AND SIDE BAR MENU FOR DESKTOP -->
    <HeaderMobile />
    <div class="appSideBar">
      <SideBarDesktop />
    </div>
    <main class="appMain">
      <!-- ADDING VIEWS PAGES -->
      <router-view v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import SideBarDesktop from "@/components/header/SideBarDesktop.vue";

export default {
  name: "App",
  components: {
    HeaderMobile,
    SideBarDesktop,
  },
};
</script>

<style lang="scss">
.app {
  height: 100%;
  width: 100%;
  display: flex;
  &Main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-align: center;
  }
}
@media (min-width: 992px) {
  .app {
    &SideBar {
      flex: 0 0 300px;
    }
    &Main {
      flex: 1 1 auto;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-to {
  opacity: 1;
  position: absolute;
  right: 0;
  z-index: 10;
}

.slide-enter-from {
  opacity: 0;
  position: absolute;
  right: -40%;
  z-index: 10;
}

.slide-leave-to {
  opacity: 0;
  position: absolute;
  left: -40%;
}

.slide-leave-from {
  opacity: 1;
  position: absolute;
  left: 0;
}
</style>
