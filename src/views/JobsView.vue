<template>
  <p v-for="job in this.$store.state.jobs">
    <a :href="job.url">{{ job.title }}</a>
    <small>{{ job.time_ago }}, {{ job.domain }}</small>
  </p>
</template>

<script>

export default {
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>