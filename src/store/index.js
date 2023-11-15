import { createStore } from 'vuex'
import { fetchAskList, fetchJobList, fetchNewsList } from '../api/index'

export const store = createStore({
  state: {
    news: [],
    jobs: [],
    asks: []
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASKS(state, asks) {
      state.asks = asks;
    }

  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          console.log(response.data);
          context.commit('SET_NEWS', response.data);
        })
        .catch((error)=>console.log(error));
    },
    FETCH_JOBS(context) {
      fetchJobList()
        .then((response) => {
          context.commit('SET_JOBS',response.data);
        })
        .catch((error) => console.log(error))
    },
    FETCH_ASKS(context) {
      fetchAskList()
        .then((response) => context.commit('SET_ASKS', response.data))
        .catch((error) => console.log(error))
    }
  }
})