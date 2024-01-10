import { auth, userCollection } from '@/includes/firebase';

export default {
  state: {
    appAuthShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.appAuthShow = !state.appAuthShow;
      console.log('appAuthShow value ? ', state.appAuthShow);
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
      console.log('userLoggedIn value ? ', state.userLoggedIn);
    },
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(payload.email, payload.password);

      await userCollection.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      await userCred.user.updateProfile({
        displayName: payload.name,
      });

      commit('toggleAuth');
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    },
    async signout({ commit }) {
      await auth.signOut();

      commit('toggleAuth');

      // if (payload.route.meta.requiresAuth) {
      //   console.log('requiresAuth value is ?', this.$route.meta.requiresAuth);
      //   payload.router.push({ name: 'home' });
      // }
    },
  },
};
