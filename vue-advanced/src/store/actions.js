import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js'

export default{
    FETCH_NEWS(context){
        fetchNewsList()
        .then(response =>{
            // 아래 문법 안됨(actions에서 바로 states에 접근x)
            // this.state.new = response.data;   
            // mutations 이용해야함
            context.commit('SET_NEWS', response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
        .then(({ data }) => {
            //디스트럭처링 문법data랑 commit 바로 꺼냄
            commit('SET_JOBS', data)
        })
        .catch(error => console.log(error))
    },
    FETCH_ASK({commit}){
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASK', data)
        })
        .catch(error => console.log(error))
    }
}