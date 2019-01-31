import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import newsReducer from './reducers/news';

const store = createStore(
  combineReducers({
    news: newsReducer,
  }),
  applyMiddleware(thunk),
);


export default store;