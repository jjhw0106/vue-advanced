<template>
  <div class="header">
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <sign-view></sign-view>
  </div>
</template>

<script>
import SignView from '@/views/SignView.vue'

export default {
  components: { SignView },
}
</script>

<style scoped SigniView>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 10px 10px 10px;
}
.header a {
  color: white
}
.header .router-link-exact-active {
  color: #65495e;
}
</style>