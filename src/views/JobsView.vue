<template>
  <div>
    <div v-for="job in jobs" v-bind:key="job">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobList } from '@/api';

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    fetchJobList()
      .then((response) => this.jobs = response.data)
      .catch((error) => console.log(error))
  }
}
</script>

<style>

</style>