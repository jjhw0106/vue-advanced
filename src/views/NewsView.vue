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
    this.$store.state.loading = true;
    const item = this.$route.params;
  }
}
</script>

<style scoped>
</style>