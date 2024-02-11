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
  console.log("dddd");
  return axios.get(`${config.baseUrl}item/${item.id}.json`)
}
function pushMemNo() {
  console.log('fff');
  return axios.get(`${'http://localhost:3000/test'}`)
}
async function getRecords() {
  const response = await axios.get(`${'http://192.168.0.102:8081/test'}`);
  // const response = await axios.get(`${'http://localhost:3000/calendar'}`);
  console.log('response:');
  // console.log(response.data[0].clear_record);
  console.log(response.data);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobList,
  fetchUserInfo,
  fetchItemInfo,
  pushMemNo,
  getRecords,
}   