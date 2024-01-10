import { createStore } from 'vuex';
import modules from './modules/index';
// import auth from './modules/auth';
// import player from './modules/player';

export default createStore({
  modules,
  // modules: {
  //   auth,
  //   player,
  // },
});
