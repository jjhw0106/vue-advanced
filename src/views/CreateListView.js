import ListView from './ListView.vue';
import { h } from 'vue';

export default function createListView(name) {
  return {
    /* 
      재사용할 인스턴스(컴포넌트) 옵션 자리
      el: '',
      data: '',
      components: {}
      ... 
    */
    name,
<<<<<<< HEAD
    beforeMount() {
      // setTimeout(()=> {
      //   this.$store.state.loading = false
      // }, 500)
    },
    mounted() {
      this.$store.state.loading = false
    },
    created() {
      // this.$store.state.loading = false
      // const name = this.$route.name
      // this.$store.dispatch('FETCH_LIST', name)
=======
    mounted() {
      console.log("mount!!");
      setTimeout(() => {
        this.$store.state.loading = false
      }, 500);
    },
    created() {
      console.log("created!!");
      this.$store.state.loading = true
      const name = this.$route.name
      this.$store.dispatch('FETCH_LIST', name)
        .then(console.log("this.$store.state.loading = false"))
      // setTimeout(()=> {
      // }, 1000)
>>>>>>> 2e08e6be5e2d8fbf5a618f58f179c1ce832a63b4
    },
    // unmounted() {
    //   this.$store.dispatch('RESET_STATE');
    // },
    render() {
      return h(ListView);
    }
  }
} 