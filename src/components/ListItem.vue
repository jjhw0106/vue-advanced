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
            <!-- news -->
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <!-- ask -->
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
  computed: {
    listItems() {
      return this.$store.state.list;
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