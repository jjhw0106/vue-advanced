<template>
  <div>
    <div v-for="n in news" v-bind:key="n">{{ n.title }}</div>
  </div>
</template>

<script>
// import axios from 'axios';
import api from '../api/index';

export default {
  data() {
    return {
      news: []
    }
  },
  created() {
    // vm = this;
    this.api.fetchNewsList('https://api.hnpwa.com/v0/news/1.json');
    // fetchNewsList('https://api.hnpwa.com/v0/news/1.json');
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    //   .then(response => {
    //     console.log(response); 
    //     this.news = response.data;
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
  },
}
</script>

<style>

</style>