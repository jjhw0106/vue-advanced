<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: {
    ListItem,
  },
  beforeMount() {
    this.$store.state.loading = true;
  },
  mounted() {
    console.log("components set!!");
    setTimeout(()=>this.$store.state.loading = false, 3000);
  },
  created() {
    // this.$store.
    this.$store.state.loading = true;
    const item = this.$route.params;
    this.$store.dispatch('FETCH_NEWS', item);
    
  }
}
</script>

<style scoped>
</style>