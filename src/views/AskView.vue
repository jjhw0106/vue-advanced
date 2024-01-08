<template>
  <div>
    <p v-for="item in askItems" v-bind:key="item">
      <router-link :to = "`/item/${item.id}`">{{ item.title }}</router-link>
    </p>
    
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
    ...mapGetters({
      askItems:'fetchedAsk'
    })
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

<style>

</style>