<template>
  <div class = "user-container">
    <div>
      <i class="fa-sharp fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username"></slot>
      <div class="time">
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';  

export default {
  props: {
    info: Object
  },
  computed: {
    // ...mapGetters(['fetchedUserInfo']),
    // userInfo() {
    //   console.log(this.$store.state.user)
    //   return this.$store.state.user;
    // }
    // itemInfo() {
    //   return this.$store.state.item
    // }
    // <=> 위의 코드는 store/index에서 getters속성을 정의해 줌으로서, 아래와 같이 바꿀 수 있다.
    // template에서 fetchedItem.title로 접근할 수 있다.
    // ...mapGetters(['fetchedItem']),
  },  
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;

}
.fa-user {
  font-size: 2.5rem
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>