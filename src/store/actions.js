import { fetchAskList, fetchItemInfo, fetchJobList, fetchNewsList, fetchUserInfo, pushMemNo, getCalendar, getRecords } from '../api/index'
export default {
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
        commit('SET_JOBS',response.data);
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
  },
  FETCH_ITEM({ commit }, item) {
    fetchItemInfo(item)
      .then((response) => commit('SET_ITEM', response.data))
      .catch((error) => console.log(error))
  },
  RESET_STATE({commit}, state) {
    console.log("actions!!!!!!");
    commit('CLEAR_STATE', state);
    
  },
  PUSH_MEMNO() {
    pushMemNo()
  },
  GET_RECORDS() {
    getRecords()
  }
}
