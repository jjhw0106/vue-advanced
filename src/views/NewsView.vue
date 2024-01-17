<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: {
    ListItem,
  },
  mounted() {
    console.log("components set!!");
  },
  created() {
    const item = this.$route.params;
    console.log(item);
    this.$store.dispatch('FETCH_NEWS', item);

  }
}
</script>

<style scoped>
</style>../utils/bus.js