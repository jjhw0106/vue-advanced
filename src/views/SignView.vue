<template>
  <div>
    <button @click="signUp">
      회원가입
    </button>
    <button @click="pushMemNo">
      로그인
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    signUp() {
      this.$router.push({ 
        path: '/sign_up'
      })
    },
    pushMemNo() {
      console.log("clicked!!");
      this.$store.dispatch('PUSH_MEMNO');
    },
  }
}
</script>

<style>

</style>