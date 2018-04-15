// https://vuex.vuejs.org/en/actions.html

// Actions are similar to mutations,
// the differences being that:
// Instead of mutating the state, actions commit mutations.
// Actions can contain arbitrary asynchronous operations.

// Action handlers receive a context object
// which exposes the same set of methods/properties on the store instance,
// so you can call context.commit to commit a mutation,
// or access the state and getters via context.state and context.getters.

// DO NOT directly modify the state in actions.
// Please use commit() to update the state.
import { sign, getMyAddr } from '@/api'
import config from '@/config'

export default {
  async fetchAccount ({ commit }) {
    const account = await getMyAddr()
    const signature = null
    commit('setAccount', { account, signature })
  },
  async fetchAccountDetail ({ commit }) {
    const account = await getMyAddr()
    const signature = await sign(config.UPLOAD_STATEMENT)
    commit('setAccount', { account, signature })
  }
}
