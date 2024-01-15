<template>
  <div class = "user-container">
    <div>
      <i class="fa-sharp fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <!-- <div> username: {{ info.id }} </div>
      <div class="time"> time: {{ info.created }} </div> -->
      <slot name="username"></slot>
      <slot name="time"></slot>
    </div>
    <!-- <div class="user-description">
      <div class="" v-if="info.user">
        <router-link :to = "`/user/${info.id}`">
          <p>name: {{ info.user }}</p>
        </router-link> 
        <br>
        <div class = "time">
          time: {{ info.time_ago }}
        </div>
      </div>
      <div class="" v-else>
        <router-link :to = "`/user/${info.id}`">
          <p>name: {{ info.id }}</p>
        </router-link> 
        <br>
        <div class = "time">
          time: {{ info.created }}
        </div>
      </div>
    </div> -->
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