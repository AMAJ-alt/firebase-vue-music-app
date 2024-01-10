<template>
    <header id="header" class="bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
            <!-- App Name -->
            <router-link class="text-white font-bold uppercase text-2xl mr-4"
            :to="{ name: 'home' }"
            exact-active-class="no-active">
                Music
            </router-link>

            <div class="flex flex-grow items-center">
                <!-- Primary Navigation -->
                <ul class="flex flex-row mt-1">
                    <li>
                        <router-link class="px-2 text-white"
                        :to="{ name: 'about' }">About</router-link>
                    </li>
                    <!-- Navigation Links -->
                    <li v-if="!userLoggedIn">
                        <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">
                            Login / Register
                        </a>
                    </li>
                    <template v-else>
                        <li>
                            <router-link class="px-2 text-white" to="/manage">Manage</router-link>
                        </li>
                        <li>
                            <a class="px-2 text-white" href="#"
                            @click.prevent="signout">Logout</a>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapState({
      userLoggedIn: (state) => state.auth.userLoggedIn,
    }),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    // ...mapActions(['signout']),
    signout() {
      this.$store.dispatch('signout', {
        router: this.$router,
        route: this.$route,
      });
      console.log('this.$route logs => ', this.$route);
      console.log('this.$router logs => ', this.$router);
      //   if (this.$route.name === 'manage') {
      if (this.$route.meta.requiresAuth) {
        console.log('requiresAuth value is ?', this.$route.meta.requiresAuth);
        this.$router.push({ name: 'home' });
      }
    },
    // toggleAuthModal() {
    //   this.$store.commit('toggleAuthModal');
    // },
  },
};
</script>
