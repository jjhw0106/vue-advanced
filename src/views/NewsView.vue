<template>
  <div>
    <div v-for="n in news" v-bind:key="n">{{ n.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api';

export default {
  data() {
    return {
      news: []
    }
  },
  created() {
    fetchNewsList()
      .then((response) => this.news = response.data)
      .catch((error) => console.log(error))
  }
}
</script>

<style>

</style>