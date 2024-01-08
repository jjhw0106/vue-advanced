import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
// prefix url, 토큰값 등등 설정 
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
  // news: 'news/1.json',
  // asks: 'ask/1.json',
  // newest: 'newest/1.json',
  // user: 'user/.json'
}

// 2. API 함수 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItemInfo(item) {
  console.log('!!!!');
  console.log(item)
  return axios.get(`${config.baseUrl}item/${item.id}.json`)
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobList,
  fetchUserInfo,
  fetchItemInfo
}   