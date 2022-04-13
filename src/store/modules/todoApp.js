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

const state = {
    todoItems:storage.fetch()
};

const getters = {
    storedTodoItmes(state){
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, todoItem){
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));  
        //this. 말고 state.로 접근
        state.todoItems.push(obj); 
    },    
    removeOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1); 
    },    
    toggleOneItem(state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; 
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },    
    clearAllItems(state){
        localStorage.clear(); 
        state.todoItems = [];
    }
};

export default {
    state, 
    getters, 
    mutations
}