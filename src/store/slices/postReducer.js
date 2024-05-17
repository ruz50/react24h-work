const ADD_POST = 'ADD_POST';

const initialState = {
  posts: [],
  
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export const addPostAC = (data) => ({ type: ADD_POST, payload: data });


export const thunkMiddlewareCreatorPost = (instance)=>{
  return (dispatch)=>{
    instance.get('/posts')
      .then((response) => {
        dispatch(addPostAC(response.data));
      })
  }
}

