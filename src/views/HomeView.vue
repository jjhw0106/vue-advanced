<template>
  <div>
    <button>
      회원가입
    </button>
    <button @click="pushMemNo">
      로그인
    </button>
  </div>
</template>

<script>
import api from '@/api';
export default {
  methods: {
    async pushMemNo() {
      console.log("clicked!!");
      await api.pushMemNo();
    }
    // pushMemNo() {
    //   console.log("clicked!!");
    //   this.$store.dispatch('PUSH_MEMNO', item);
    // }
  }
}
</script>

<style>

</style>