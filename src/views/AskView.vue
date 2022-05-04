<template>
  <div>
    <div v-for="item in fetchedAsk">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';  // 헬퍼함수
export default {
  computed:{
    // [템플릿에서 간편하게 state에 접근하기]
    // // #1
    // fetchedAsk(){
    //   return this.$store.state.ask;
    // }

    // // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })

    // #3
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    // })

    // #4
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  created(){
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>