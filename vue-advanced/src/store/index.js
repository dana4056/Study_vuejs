import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask:[]
    },
    getters:{
        fetchedAsk(state){
            return state.ask;
        }
    },
    mutations,
    actions
});