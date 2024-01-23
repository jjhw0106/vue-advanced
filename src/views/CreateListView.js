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
    beforeMount() {
      this.$store.state.loading = true
    },
    created() {
      const name = this.$route.name
      setTimeout(()=> {
        this.$store.dispatch('FETCH_LIST', name)
          .then(this.$store.state.loading = false)
      }, 1000)
    },
    // unmounted() {
    //   this.$store.dispatch('RESET_STATE');
    // },
    render() {
      return h(ListView);
    }
  }
} 