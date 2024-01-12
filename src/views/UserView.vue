<template>
  <div>
    <p>
      <small> 
        <p>name: {{ userInfo.id }} </p>
        <p>karma: {{ userInfo.karma }} </p>
        <p>created: {{ userInfo.created }} </p>
        <!-- <p>about: {{ this.$store.state.user.about }} </p> -->
        <!-- => compute속성에 userInfo()를 정의해주면, this.$store.state.user를 userInfo의 return 값으로 대체할 수 있다.-->
        <!-- => userInfo()가 아닌 userInfo로 속성값에 접근하듯 사용 -->
        <!-- <router-link :to ="`/user/${user.user}`"> {{ user.created_time }} </router-link> -->
        
      </small>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    /* dispatch의 param은 하나만 넘어가기 때문에 여러개인 경우 객체로{} 만들어주어야 한다. */
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>

