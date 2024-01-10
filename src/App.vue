<template>
  <app-header/>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <AppPlayer />

  <app-auth/>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppAuth from './components/AppAuth.vue';
import AppPlayer from './components/AppPlayer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppPlayer,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s linear;
}

.fade-leave-to {
  transition: all 0.3s linear;
  opacity: 0;
}

</style>
