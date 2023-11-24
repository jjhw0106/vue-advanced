import { fetchAskList, fetchJobList, fetchNewsList, fetchUserInfo } from '../api/index'

export default {
  /* context.commit은 두번째 메소드와 같이 { commit }으로 구조분해 할당 할 수 있다. */
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
  },
  FETCH_USER({ commit }) {
    fetchUserInfo()
      .then((response) => commit('SET_USERS', reponse.data))
      .catch((error) => log(error))
  }
}
