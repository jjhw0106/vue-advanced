<template>
  <div class="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
    <home-view>ddd</home-view>
  </div>
</template>

<script>
import HomeView from '@/views/HomeView.vue'

export default {
  components: { HomeView },
}
</script>

<style s
HomeViewcoped>
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