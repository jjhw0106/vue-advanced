<template>
  <div>
    <ul>
      <li v-for="item in listItems" v-bind:key="item" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타정보 영역 -->
        <div>
          <p class = 'news-title'>
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
          </p>

          <small class = 'link-text'>
            {{ item.time_ago }}
            by  
            <router-link v-if = "item.user" :to ="`/user/${item.user}`" class="link-text"> {{ item.user }} </router-link> 
            <a :href="item.url" v-else> {{ item.domain }} </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name
    let data
    console.log("==============");
    console.log(name);
    if (name === 'news') {
      data = 'FETCH_NEWS';
      // this.$store.dispatch('FETCH_NEWS');
    }
    else if (name === 'ask') {
      data = 'FETCH_ASKS';
    }
    else if (name === 'jobs') {
      data = 'FETCH_JOBS';
    }
    this.$store.dispatch(data);
  },
  
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news;
      }
      else if (name === 'ask') {
        return this.$store.state.asks;
      }
      else if (name === 'jobs') {
        return this.$store.state.jobs;
      }
      return this.$store.state.news;
    }
  }
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