import { fetchAskList, fetchItemInfo, fetchJobList, fetchNewsList, fetchUserInfo, pushMemNo, getCalendar, getRecords, fetchList } from '../api/index'
import {abc, handleException} from '../utils/handler.js';
export default {
<<<<<<< HEAD
  // /* context.commit은 두번째 메소드와 같이 { commit }으로 구조분해 할당 할 수 있다. */
  // FETCH_ASKS({ commit }) {
  //   fetchAskList()
  //     .then((response) => commit('SET_ASKS', response.data))
  //     .catch((error) => console.log(error))
  // },
  async FETCH_USER({ commit }, name) {
      const response = await fetchUserInfo(name);
      commit('SET_USER', response.data);

      return response;
=======
  /* context.commit은 두번째 메소드와 같이 { commit }으로 구조분해 할당 할 수 있다. */
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data);
      })
      .catch((error)=>console.log(error));
  },
  FETCH_JOBS({ commit }) {
    console.log(commit);
    fetchJobList()
      .then((response) => { 
        commit('SET_JOBS',response.data)
      })
      .catch((error) => console.log(error))
  },
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then((response) => commit('SET_ASKS', response.data))
      .catch((error) => console.log(error))
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then((response) => commit('SET_USER', response.data))
      .catch((error) => console.log(error))
>>>>>>> 2e08e6be5e2d8fbf5a618f58f179c1ce832a63b4
  },
  async FETCH_ITEM({ commit }, item) {
      const response = await fetchItemInfo(item);
      commit('SET_ITEM', response.data);

      return response;
  },
<<<<<<< HEAD

  async FETCH_LIST({ commit }, pageName) {
      const response = await fetchList(pageName);
      console.log(response);
      console.log(response.data);
      commit('SET_LIST', response.data);

      return response;
=======
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({data}) => commit('SET_LIST', data))
      .catch(error => console.log(error));
>>>>>>> 2e08e6be5e2d8fbf5a618f58f179c1ce832a63b4
  },

  RESET_STATE({ commit }, state) {
    commit('CLEAR_STATE', state);
  },
  PUSH_MEMNO() {
    pushMemNo()
  },
  GET_RECORDS() {
    getRecords()
  }
}
