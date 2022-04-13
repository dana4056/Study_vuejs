// import Vue from 'vue' 
import Vuex from 'vuex'

// 해당 파일에서 export된 모든 것을 가져와서 as 뒤(getters,mutations)에 담기
import * as getters from './getters'  
import * as mutations from './mutations'

// Vue.use(Vuex); //plugin

const storage = {
    fetch(){
        const arr = [];
        if (localStorage.length > 0){ // 로컬 스토리지에 데이터가 존재한다면
            for( let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  //값이 객체임{comp: false, item:"todos"}
                }
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state:{
        todoItems:storage.fetch()
    },
    getters,
    mutations 
});

