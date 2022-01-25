import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '../services/track'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //el data de la aplicacion d emanera global
    track: {}
  },
  mutations: {
    //métodos para modificar el state
    setTrack(state, track) { 
      state.track = track
    }
  },
  actions: {
   ///para llamar a metodos asinconicos
    getTrackById(context, payload) { 
      return trackService.getById(payload.id)
        .then(res => { 
          context.commit('setTrack', res)
          return res
        })
    }

    
  },
  getters: {
    trackTitle(state) { 

      if (!state.track.name) { return ''}
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },
  modules: {

  }
})
