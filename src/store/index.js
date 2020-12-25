import Vue from 'vue';
import Vuex from 'vuex';
// importing modules
import Login from './modules/login';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: Login,
  },
  plugins: [createPersistedState()],
});
