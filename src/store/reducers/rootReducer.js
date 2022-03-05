import { NEWS_FETCH_SUCCESS, DETAIL_NEWS_SUCCESS } from "../actions/actionType";
const initialState = {
  news: [],
  detailNews: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_FETCH_SUCCESS:
      return { ...state, news: action.payload };
    case DETAIL_NEWS_SUCCESS:
      return { ...state, detailNews: action.payload };

    default:
      return state;
  }
}
export default rootReducer;
