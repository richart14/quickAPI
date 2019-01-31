import {
  FETCH_NEWS_SUCCESS
} from '../actions/news';

const initialState = {
  news: [],
  loading: false, 
  error: null,
}

export default function newsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.data,
        loading: false,
        error: null,
      } 
    default:
      return state;
  }
}
