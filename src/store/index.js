import { createStore } from 'vuex'
import { fetchAskList, fetchJobList, fetchNewsList } from '../api/index'

export const store = createStore({
  state: {
    news: [],
    jobs: [],
    asks: []
  },
  // getters: [
  //   ({ commit }) => {
  //     fetchAskList()
  //       .then((response) => commit('SET_ASKS', response.data))
  //       .catch((error) => log(error))
  //   },
  // ],
  getters: {
    fetchedAsk(state) {
      return state.asks;
    }
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
    FETCH_JOBS({ commit }) {
      console.log(commit);
      fetchJobList()
        .then((response) => {
          commit('SET_JOBS',response.data);
        })
        .catch((error) => console.log(error))
    },
    FETCH_ASKS({ commit }) {
      fetchAskList()
        .then((response) => commit('SET_ASKS', response.data))
        .catch((error) => log(error))
    }
  }
})