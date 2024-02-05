<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <tool-bar></tool-bar>
    <spinner :loading="true"></spinner>
    <transition name ="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'

export default {
  components: { 
    ToolBar,
    Spinner
  },
}
</script>

<style>
#app
ToolBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration-line: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover {
  color: #41b883;
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 1.0s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
