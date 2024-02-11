import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
// prefix url, 토큰값 등등 설정 
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수 정리
function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

function fetchUserInfo(userName) {
  console.log("userInfo!!!!!!!!!!!");
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItemInfo(item) {
  console.log("dddd");
  return axios.get(`${config.baseUrl}item/${item.id}.json`)
}
function pushMemNo() {
  return axios.get(`${'http://localhost:3000/test'}`)
}
async function getRecords() {
  const response = await axios.get(`${'http://192.168.0.102:8081/test'}`);
  // const response = await axios.get(`${'http://localhost:3000/calendar'}`);
  console.log('response:');
  console.log(response.data);
}

export {
  fetchUserInfo,
  fetchItemInfo,
  pushMemNo,
  getRecords,
  fetchList
}   