<template>
  <div>
    <div v-for="a in this.$store.state.asks" v-bind:key="a">{{ a.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASKS')
  }
}
</script>

<style>

</style>