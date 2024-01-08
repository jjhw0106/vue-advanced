<template>
  <div>
    <p v-for="item in askItems" v-bind:key="item">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
    </p>
    <div v-for="item in askItems" v-bind:key="item">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  created() {
  },
  computed: {
    // #3
    ...mapGetters({})
  },
}
</script>

<style>

</style>