import { createRouter, createWebHistory } from 'vue-router';
import AskView from '../views/AskView.vue';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import SignUpView from '@/views/SignUpView.vue';
import SignView from '@/views/SignView.vue';
import createListView from '../views/CreateListView.js';

const routes = [
  {
    path: '/',
    component: SignView,
  },
  {
    path: '/news',
    name: 'news',
    component: createListView('NewsView'),
  },
  {
    path: '/ask',
    name: 'ask',
    component: createListView('AskView')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: createListView('JobsView')
  },
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: NewsView,
  // },
  // {
  //   path: '/ask',
  //   name: 'ask',
  //   component: AskView
  // },
  // {
  //   path: '/jobs',
  //   name: 'jobs',
  //   component: JobsView
  // },
  {
    path: '/user/:id',
    component: UserView
  },
  {
    path: '/item/:id',
    component: ItemView
  },
  {
    path: '/sign_up',
    component: SignUpView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router