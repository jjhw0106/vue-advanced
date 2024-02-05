<template>
  <div>
    <button @click="signUp">
      회원가입
    </button>
    <button @click="pushMemNo">
      로그인
    </button>
    <button @click="getCalendar">
      캘린더 정보 받아오기
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
    getCalendar() {
      console.log("Calendar!!");
      this.$store.dispatch('GET_RECORDS');
    }
  }
}
</script>

<style>

</style>