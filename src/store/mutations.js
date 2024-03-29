export default {
  SET_NEWS(state, news) {
    state.news = news;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_ASKS(state, asks) {
    state.asks = asks;
  },
  SET_USER(state, user) {
    state.user = user;
    console.log(state.user);
  },
  SET_ITEM(state, item) {
    state.item = item;
  },
  SET_LIST(state, list) {
    state.list = list
  },
  CLEAR_STATE(state,) {
    Object.keys(state).forEach(key=>{
      state[key] = null;
      state["loading"] = true;  
    })
  }
}