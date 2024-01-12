import { createStore } from 'vuex'

import mutations from './mutations';
import actions from './actions';

export const store = createStore({
  state: {
    news: [],
    jobs: [],
    asks: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.asks;
    },
    fetchedItem(state) {
      return state.item;
    },
    fetchedJobs(state) {
      return state.jobs;
    }
  },
  mutations,
  actions
})