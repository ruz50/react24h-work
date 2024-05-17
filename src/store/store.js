import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { postReducer } from './slices/postReducer';
import { commReducer } from './slices/commReducer';
import { albumReducer } from './slices/albumReducer';
import { photoReducer } from './slices/photosReducer';
import { todosReducer } from './slices/todosReducer';
import { usersReducer } from './slices/usersReducer';

const rootReducer = combineReducers({
  postData: postReducer,
  commData : commReducer,
  albumData : albumReducer,
  photoData : photoReducer,
  todosData : todosReducer,
  usersData: usersReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
