<template>
  <div>
    <ul>
      <li v-for="item in fetchedAsk" v-bind:key="item" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class = 'news-title'>
            <router-link :to = "`/item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class = 'link-text'>
            {{ item.time_ago }}
            by  
            <router-link :to ="`/user/${item.user}`" class="link-text"> {{ item.user }} </router-link> 
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  created() {
    this.$store.dispatch('FETCH_ASKS')
  },
  computed: {
    // #3
    ...mapGetters([
      'fetchedAsk'
    ])
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // },

    // #2
    // ...mapState({
    //   asks: state => state.asks
    // })
    // ...mapMutations
  },
}
</script>

<style scoped>
  .news-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
  }
  .points {
    height: 60px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #41b883;
  }
  .news-title {
    margin: 0;
  }
  .link-text {
    color:#828282;
  }
</style>