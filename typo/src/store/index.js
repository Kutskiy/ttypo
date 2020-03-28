import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardCost: '544'
  },
  mutations: {
    setCardCost: (state, payload) => {
      state.cardCost = payload
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCardCost: state => {
      return state.cardCost
    }
  }
})
