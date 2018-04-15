import Vue from 'vue'
import VueX from 'vuex'

// vuex basic stuff
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(VueX)

export default new VueX.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
//   plugins: [createLogger()]
})
