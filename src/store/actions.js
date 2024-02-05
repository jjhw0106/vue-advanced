import { fetchAskList, fetchItemInfo, fetchJobList, fetchNewsList, fetchUserInfo, pushMemNo, getCalendar, getRecords, fetchList } from '../api/index'
import {abc, handleException} from '../utils/handler.js';
export default {
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
  },
  async FETCH_ITEM({ commit }, item) {
      const response = await fetchItemInfo(item);
      commit('SET_ITEM', response.data);

      return response;
  },

  async FETCH_LIST({ commit }, pageName) {
      const response = await fetchList(pageName);
      console.log(response);
      console.log(response.data);
      commit('SET_LIST', response.data);

      return response;
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
