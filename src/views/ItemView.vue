<template>
  <div>
    <p>
      <small>
        <!-- 질문 상세정보 -->          
        <section>
          <div class = "user-container">
            <div>
              <i class="fa-sharp fa-solid fa-user"></i>
            </div>
            <div class="user-description">
            </div>
            <div>
              <router-link :to = "`/user/${fetchedItem.user}`">
                {{ fetchedItem.user }}
              </router-link> 
              <div class = "time">
                {{ fetchedItem.time_ago }}
              </div>
            </div>
          </div>
        </section>
        <!-- 질문 댓글 -->
        <section>
          <!-- <div v-html="fetchedItem.content"> -->
          <div v-html="fetchedItem.content"></div>
        </section>


      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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

<style>
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