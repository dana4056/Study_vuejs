<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
    v-on:removeItem="removeOneItem" 
    v-on:completeItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:ClearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function(){
    return {
      todoItems:[]
    }
  },
  methods:{
    addOneItem: function(todoItem){
      var obj = {completed: false, item: todoItem};
      // 저장하는 로직 실행(JS window객체의 localStorage사용)
      // JSON.stringfy(객체): 객체를 str으로 변환
      localStorage.setItem(todoItem, JSON.stringify(obj));   //값 저장
      this.todoItems.push(obj); //todolist로 todoItems보내줄꺼니까 겂 동기화됨
    },
    removeOneItem: function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);  //JS배열 문법 지우고 새로운 배열 반환
    },
    toggleOneItem: function(todoItem, index){
      //todoItem.completed = !todoItem.completed ;// 하위컨포넌트로 내린 데이터를 다시 올려서 바꾸는 안티패턴
      this.todoItems[index].completed = !this.todoItems[index].completed;  // 윗줄 코드랑 같은 기능이지만 위는 안티패턴

      // 로컬 스토리지 갱신: 로컬 스토리지 업데이트 API 없어서 삭제하고 다시 넣어줌
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems:function(){
      localStorage.clear(); 
      this.todoItems = [];
    }
  },
  created: function(){
    if (localStorage.length > 0){ // 로컬 스토리지에 데이터가 존재한다면
      for( var i = 0; i < localStorage.length; i++){
        if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  //값이 객체임{comp: false, item:"todos"}
          // this.todoItems.push(localStorage.key(i));  //키와 value가 같았을때 쓴 방법
        }
      }
    }
  },
  components:{   //스크립트에서는 파스칼케이스, 템플릿에서는 케밥기법이 권고방법
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
