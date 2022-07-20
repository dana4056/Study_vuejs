<template>
  <div class="header">
      <!-- router-link는 자동으로 a태그로 변환하고 부가적인 기능 제공 -->
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
.header .router-link-exact-active{
    color: #35495e
}

.header a{
    color:white;
}
</style>