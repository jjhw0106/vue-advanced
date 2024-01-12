<template>
  <div>
    <ul>
      <li v-for="job in fetchedJobs" v-bind:key="job" class="post">
        <div class="points">
          {{ job.points || 0}}
        </div>
        <div>
          <a :href="job.url">
            <p class = "news-title">
              {{ job.title }}
            </p>
          </a>
          <small class = 'link-text'>
            {{ job.time_ago }}
            by  
            <a :href="job.url"> {{ job.domain }} </a> 
          </small>
        </div>
      </li>
    </ul>
    <p v-for="job in fetchedJobs" v-bind:key="job">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  }

}
</script>

<style scoped>
</style>