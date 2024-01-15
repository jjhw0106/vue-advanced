<template>
  <div>
      <!-- 사용자 상세정보 -->          
      <section>
        <user-profile :info="fetchedItem"></user-profile>
        <div>
          <slot name="username">{{ fetchedItem.user }}</slot>
        </div>
        <slot name="time">{{ fetchedItem.time_ago }}</slot>
        <template slot:time>{{ fetchedItem.time_ago }}</template>
      </section>
      
      <!-- 질문 댓글 -->
      <section>
        <div v-html="fetchedItem.title"></div>
      </section>
      <section>
        <div v-html="fetchedItem.content"></div>
      </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  computed: {
    // itemInfo() {
    //   return this.$store.state.item
    // }
    // <=> 위의 코드는 store/index에서 getters속성을 정의해 줌으로서, 아래와 같이 바꿀 수 있다.
    // template에서 fetchedItem.title로 접근할 수 있다.
    ...mapGetters(['fetchedItem']),
  },  
  created() {
    const item = this.$route.params;
    this.$store.dispatch('FETCH_ITEM', item);
  }
}
</script>
