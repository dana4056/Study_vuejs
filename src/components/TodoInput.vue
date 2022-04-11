<template>
  <div class="inputBox shadow">  <!-- 컴포넌트 당 template의 root 태그는 단 하나 -->
    <!-- v-model은 화면(input값)값과 스크립트(인스턴스)값을 동기화 시켜줌  -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">  
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer">
      <i class="fa-solid fa-plus addBtn" v-on:click="addTodo"></i>
    </span>

    <!------------------ 모달 컴포넌트 사용 ---------------------------->
    <Modal v-if="showModal" @close="showModal = false">
      <!-- slot부분을 재정의할 수 있음 -->
      <template #header>
        <h3>
          경고!
          <i class="fa-solid fa-circle-xmark closeModal" @click="showModal=false"></i> 
        </h3>
      </template>

      <template #body>
        <span>할 일을 입력하세요.</span>
      </template>


    </Modal>
    <!----------------------------------------------------------------->

  </div>
</template>

<script>
import Modal from './common/ModalModal.vue'

export default {
  data(){
    return {
      newTodoItem:"",
      showModal:false
    }
  }, 
  methods: {
    addTodo(){
      if(this.newTodoItem !== ""){ // 입력값이 있을 때만!
        this.$emit("addTodoItem",this.newTodoItem);
        this.clearInput();
      }
      else{
        this.showModal=true; 
      }
    },
    clearInput(){
      this.newTodoItem='';  // input 초기화
    }
  },
  components:{
    Modal
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
.closeModal{
  color: #42b983;
}

</style>



