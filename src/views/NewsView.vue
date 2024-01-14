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
  }
}
</script>

<style scoped>
</style>