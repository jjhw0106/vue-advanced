<template>
  <div>
    <div v-for="n in this.$store.state.news" v-bind:key="n">{{ n.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>

</style>