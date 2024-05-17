import axios from 'axios';
import {thunkMiddlewareCreatorPost } from '../store/slices/postReducer';
import { thunkMiddlewareCreatorComments } from '../store/slices/commReducer';
import { thunkMiddlewareCreatorAlbum } from '../store/slices/albumReducer';
import { thunkMiddlewareCreatorPhotos } from '../store/slices/photosReducer';
import { thunkMiddlewareCreatorTodos } from '../store/slices/todosReducer';
import { thunkMiddlewareCreatorUsers } from '../store/slices/usersReducer';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const allApi = {
  getPost(dispatch) {
    dispatch(thunkMiddlewareCreatorPost(instance))
      
  },
  getComm (dispatch){
    dispatch(thunkMiddlewareCreatorComments(instance))
  },
  getAlbums (dispatch){
    dispatch(thunkMiddlewareCreatorAlbum(instance))
  },
  getPhotos(dispatch){
    dispatch(thunkMiddlewareCreatorPhotos(instance))
  },
  getTodos(dispatch){
    dispatch(thunkMiddlewareCreatorTodos(instance))
  },
  getUsers(dispatch){
    dispatch(thunkMiddlewareCreatorUsers(instance))
  }
};
