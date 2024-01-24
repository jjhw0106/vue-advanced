import { createRouter, createWebHistory } from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import SignUpView from '@/views/SignUpView.vue';
import SignView from '@/views/SignView.vue';
import createListView from '../views/CreateListView.js';
import { store } from '../store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
      component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      // beforeEnter: (to, from, next) => {
      //   store.state.loading = true
      //   const name = to.name
      //   store.dispatch('FETCH_LIST', name)
      //   setTimeout(() => {
      //     store.state.loading = false;
      //   }, 500);
      //   next();
      // },
    },
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
  ],
});

router.beforeEach((to,from,next)=>{
  store.state.loading = true
  
  const name = to.name
  store.dispatch('FETCH_LIST', name)
  setTimeout(() => {
    next();
  }, 1000);
})
export default router