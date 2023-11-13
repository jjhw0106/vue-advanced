import axios from "axios";

export function fetchNewsList(url) {
  axios.get(url)
    .then(response => {
      console.log(response); 
      this.news = response.data;
    })
    .catch((error)=>{
      console.log(error);
    })
}