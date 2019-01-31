import { NEWS_API_BASE_URL, NEWS_API_KEY } from '../config';

export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const fetchNewsSuccess = data => ({
  type: FETCH_NEWS_SUCCESS,
  data,
  loading: false,
})

export const FETCH_NEWS_LOADING = "FETCH_NEWS_LOADING";
export const fetchNewsLoading = () => ({
  loading: true
})
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";
export const fetchNewsError = err => ({
  error: err,
  loading: false
})

export const fetchNews = (type) => (dispatch) => {
  return (
    fetch(`${NEWS_API_BASE_URL}/top-headlines?sources=${type}&apiKey=${NEWS_API_KEY}`, {
      method: 'GET',
    })
      .then((res => {
        if(!res.ok) {
          throw res;
        }
        return res.json();
      }))
      .then(data => {
        dispatch(fetchNewsSuccess(data.articles));
      })
      .catch(err => dispatch(fetchNewsError(err)))
  )
}