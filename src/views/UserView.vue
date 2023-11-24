<template>
  <div>
    USER!!!!!!!!
  </div>
</template>

<script>
import { fetchUserInfo } from '@/api';

export default {
  created() {
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>