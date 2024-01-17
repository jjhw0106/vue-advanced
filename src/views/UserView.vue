<template>
  <div>
      <user-profile :info="userInfo">
        <template #username>{{ userInfo.id }}</template>
        <template #time>{{ userInfo.created }}</template>
        <template #karma>{{ userInfo.karma }}</template>
      </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
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

