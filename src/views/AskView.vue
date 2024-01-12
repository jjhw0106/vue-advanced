<template>
  <div>
    <list-item></list-item>
    <!-- <ul>
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
    </ul> -->
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
export default {
  components: {
    ListItem,
  },
  // created() {
  //   this.$store.dispatch('FETCH_ASKS')
  // },
  // computed: {
  //   // #3
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ])
  //   // #1
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // },

  //   // #2
  //   // ...mapState({
  //   //   asks: state => state.asks
  //   // })
  //   // ...mapMutations
  // },
}
</script>

<style scoped>
</style>