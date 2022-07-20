<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- uri에 따라 해당 컴포넌트가 router-view를 대신함 -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar.vue'
export default {
  components:{
    ToolBar
  }
}
</script>

<style>

body{
  padding:0;
  margin:0;
}
</style>
