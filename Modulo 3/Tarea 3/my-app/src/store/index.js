import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myGames: []
  },
  mutations: {
    insertGameInfo(state,payload){
      state.myGames = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
