const ADD_PHOTO = 'ADD_COMM'

const initialState = {
  photo:[],
};

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_PHOTO:
          return {
            ...state,
            photo: action.payload,
          }
      default:
        return state;
    }
  };

export const addPhotosAc = (data)=>({type:ADD_PHOTO , payload:data});

export const thunkMiddlewareCreatorPhotos = (instance)=>{
    return (dispatch)=>{
      instance.get('/photos')
        .then((response) => {
          dispatch(addPhotosAc(response.data));
        })
    }
  }