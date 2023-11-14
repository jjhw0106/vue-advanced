import { createRouter, createWebHistory } from 'vue-router';
import AskView from '../views/AskView.vue';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import HomeView from '../views/HomeView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/UserView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/news',
    component: NewsView,
  },
  {
    path: '/ask',
    component: AskView
  },
  {
    path: '/jobs',
    component: JobsView
  },
  {
    path: '/user',
    component: UserView
  },
  {
    path: '/item',
    component: ItemView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router