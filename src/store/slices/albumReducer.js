const ADD_ALBUM = 'ADD_ALBUM'

const initialState = {
  album :[],
};


export const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALBUM:
          return {
            ...state,
            album: action.payload,
          }
      default:
        return state;
    }
  };

export const addAlbumAc = (data)=>({type:ADD_ALBUM , payload:data});

export const thunkMiddlewareCreatorAlbum = (instance)=>{
    return (dispatch)=>{
      instance.get('/albums')
        .then((response) => {
          dispatch(addAlbumAc(response.data));
        })
    }
  }