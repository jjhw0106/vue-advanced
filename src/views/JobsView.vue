<template>
  <list-item></list-item>
</template>

<script>

import ListItem from '../components/ListItem.vue';
export default {
    components: {
    ListItem,
  },
  created() {
    const item = this.$route.params;
    this.$store.dispatch('FETCH_JOBS', item);
  }
}
</script>

<style scoped>
</style>