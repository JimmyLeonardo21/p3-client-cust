import { NEWS_FETCH_SUCCESS, DETAIL_NEWS_SUCCESS } from "./actionType";
import axios from "axios";
const BASE_URL = `https://git.heroku.com/guarded-citadel-09275.git`;
// const BASE_URL = `http://localhost:3000`;
export const fetchNews = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/customer`, {
        headers: {
          access_token: localStorage.access_token,
        },
      })
      .then((data) => {
        console.log(data, "================================");
        dispatch(fetchSuccessNews(data.data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchNewsById = (id) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/customer/${id}`, {
        headers: {
          access_token: localStorage.access_token,
        },
      })
      .then((data) => {
        console.log(data.data);
        dispatch(fetchDetailNews(data.data));
      })
      .catch((err) => console.log(err));
  };
};
export const fetchSuccessNews = (payload) => {
  return {
    type: NEWS_FETCH_SUCCESS,
    payload,
  };
};
export const fetchDetailNews = (payload) => {
  return {
    type: DETAIL_NEWS_SUCCESS,
    payload,
  };
};
