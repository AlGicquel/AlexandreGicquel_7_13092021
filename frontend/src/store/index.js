import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    level: 0
  },
  mutations: {
    AUTHENTIFIED (state) {
      state.auth = true;
    },
    ADMIN (state, level) {
      state.level = level;
    }
  },
  actions: {
    authentifiedAction (context) {
      context.commit('AUTHENTIFIED');
    },
    adminAction(context,level) {
      context.commit('ADMIN',level);
    }
  },
  modules: {
  }
})
