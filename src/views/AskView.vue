<template>
  <div>
    <div v-for="a in asks" v-bind:key="a">{{ a.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api';

export default {
  data() {
    return {
      asks: []
    }
  },
  created() {
    fetchAskList()
      .then((response) => this.asks = response.data)
      .catch((error) => console.log(error));
  }
}
</script>

<style>

</style>