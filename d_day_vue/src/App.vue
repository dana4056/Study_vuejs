<template>
  <div id="app">
    <DdayHeader></DdayHeader>
    <DdayInput></DdayInput>
    <DdayList></DdayList>
    <DdayFooter></DdayFooter> 
  </div> 
</template>

<script>
import DdayHeader from './components/DdayHeader.vue'
import DdayInput from './components/DdayInput.vue'
import DdayList from './components/DdayList.vue'
import DdayFooter from './components/DdayFooter.vue'

export default {
  components: {
    'DdayHeader': DdayHeader,
    'DdayInput': DdayInput,
    'DdayList': DdayList,
    'DdayFooter': DdayFooter
  }
}
</script>

<style>
body{
  text-align: center;
}
</style>
