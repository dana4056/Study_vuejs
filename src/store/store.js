// import Vue from 'vue' 
import Vuex from 'vuex'

// 데이터(state) 기준으로 모듈화
import todoApp from './modules/todoApp'

// Vue.use(Vuex); //plugin

export const store = new Vuex.Store({
    modules:{
        todoApp
    }
});

