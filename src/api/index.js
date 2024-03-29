import axios from "axios";
import { handleException } from '../utils/handler'
// 1. HTTP Request & Response와 관련된 기본 설정
// prefix url, 토큰값 등등 설정 
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수 정리
async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`)
  } catch (error) {
    handleException(error);
  }
}

async function fetchUserInfo(userName) {
  try {
    return await axios.get(`${config.baseUrl}user/${userName}.json`);
  } catch (error) {
    handleException(error);
  }
}

async function fetchItemInfo(item) {
  try {
    return await axios.get(`${config.baseUrl}item/${item.id}.json`)
  } catch (error) {
    handleException(error);
  }
}
async function pushMemNo() {
  return await axios.get(`${'http://localhost:3000/test'}`)
}
async function getRecords() {
  try {
    const response = await axios.get(`${'http://localhost:3000/calendar'}`);
    console.log('response:');
    console.log(response.data);
  } catch (error) {
    handleException(error);
  }
}

export {
  fetchUserInfo,
  fetchItemInfo,
  pushMemNo,
  getRecords,
  fetchList
}   