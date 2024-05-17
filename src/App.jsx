import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { allApi } from './api/api';
import './App.css';
import Post from './components/post/Post';
import VariantButtonGroup from './components/Buttons/Buttons'
import Comments from './components/Comments/Comments';
import Albums from './components/Albums/Albums';
import Photos from './components/Photos/Photo';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';

function App() {
  const dispatch = useDispatch();
  const [post, isPost] = useState(false)
  const [comm, isComm] = useState(false)
  const [albums, isAlbums] = useState(false)
  const [photos, isPhotos] = useState(false)
  const [todos, isTodos] = useState(false)
  const [users, isUsers] = useState(false)

  const postShow =()=>isPost(!post)
  const commShow =()=>isComm(!comm)
  const albumsShow =()=>isAlbums(!albums)
  const photosShow =()=>isPhotos(!photos)
  const todosShow =()=>isTodos(!todos)
  const usersShow =()=>isUsers(!users)

  useEffect(() => {
    allApi.getPost(dispatch);
    allApi.getComm(dispatch);
    allApi.getAlbums(dispatch);
    allApi.getPhotos(dispatch);
    allApi.getTodos(dispatch);
    allApi.getUsers(dispatch)
  }, []);

  return (
    <div className="App">
      <VariantButtonGroup 
      postShow={postShow}
      commShow={commShow}
      albumsShow={albumsShow}
      photosShow={photosShow}
      todosShow={todosShow}
      usersShow={usersShow}
      />
      { post && <Post />}
      {comm && <Comments/>}
      {albums && <Albums/>}
      {photos && <Photos/>}
      {todos && <Todos />}
      {users && <Users />}

    </div>
  );
}

export default App;
