<template>
  <div>
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.storedTodoItmes" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo({todoItem, index})"><i class="fa-solid fa-trash-can"></i></span>
        </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      // 템플릿에서 인자 넘겼으면 여기서 굳이 인자 표기 안해도 자동으로 넘어감
      // 대신, 템플릿에서 인자를 하나로 (여러개면 객체로 묶어서) 맞춰줘야함
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    })
  },
  computed: {
    //  todoItems(){
    //    return this.$store.getters.storedTodoItmes;
    //  }
    ...mapGetters(['storedTodoItmes']) //배열 리터럴 방식
    // ...mapGetters({  // 객체 리터럴 방식 (얘는 템플릿에서 사용할 이름이랑 store에 정의되어있는 이름이랑 다를 때 사용)
    //   todoItems: 'storedTodoItmes'
    // });
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

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>