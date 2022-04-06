<template>
  <div>
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fa-solid fa-trash-can"></i></span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      todoItems:[]
    }
  },
  methods: {
    removeTodo: function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);  //JS배열 문법 지우고 새로운 배열 반환
    }, 
    toggleComplete: function(todoItem){
      todoItem.completed = !todoItem.completed ;

      // 로컬 스토리지 갱신: 로컬 스토리지 업데이트 API 없어서 삭제하고 다시 넣어줌
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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
  }
}
</script>

<style scoped>
ul{
  list-style-type: none; /* 리스트에서 점없애기 */ 
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn{
  margin-left: auto;
  color: #de4343;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right:5px;
}
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}
</style>