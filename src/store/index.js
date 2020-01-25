import Vue from 'vue'
import Vuex from 'vuex'
import state from './State'
import mutations from './Mutations'
import getters from './Getters'
import actions from './Actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
  }
})
