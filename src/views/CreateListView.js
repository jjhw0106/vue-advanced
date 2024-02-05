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
    },
    // unmounted() {
    //   this.$store.dispatch('RESET_STATE');
    // },
    render() {
      return h(ListView);
    }
  }
} 