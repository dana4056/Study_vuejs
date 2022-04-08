<template>
  <div class="inputBox shadow">  <!-- 컴포넌트 당 template의 root 태그는 단 하나 -->
    <!-- v-model은 화면(input값)값과 스크립트(인스턴스)값을 동기화 시켜줌  -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">  
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer">
      <i class="fa-solid fa-plus addBtn" v-on:click="addTodo"></i>
    </span>

    <!------------------ 모달 컴포넌트 사용 ---------------------------->
    <ModalModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </ModalModal>
    <!----------------------------------------------------------------->

  </div>
</template>

<script>
import ModalModal from './common/ModalModal.vue'

export default {
  data: function(){
    return {
      newTodoItem:"",
      showModal:false
    }
  }, 
  methods: {
    addTodo: function(){
      if(this.newTodoItem !== ""){ // 입력값이 있을 때만!
        this.$emit("addTodoItem",this.newTodoItem);
        this.clearInput();
      }
      // else{
        
      // }
    },
    clearInput: function(){
      this.newTodoItem='';  // input 초기화
    }
  },
  components:{
    'ModalModal': ModalModal
  }
}
</script>

<style scoped>
input:focus{
  outline:none;
}
.inputBox{
  background:white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer{
  float: right;
  background: linear-gradient(to right, #6478Fb, #8763FB);
  display:block;
  width:3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn{
  color:white;
  vertical-align: middle;
}

</style>