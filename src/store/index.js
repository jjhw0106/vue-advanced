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
    loading: Boolean,
    list: [],
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
    },
    fetchedUserInfo(state) {
      return state.user;
    },
    getLoadingStatus(state) {
      return state.loading
    }
  },
  mutations,
  actions
})