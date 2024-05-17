const ADD_USERS = 'ADD_USERS';

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case  ADD_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export const addUsersAC = (data) => ({ type: ADD_USERS, payload: data });


export const thunkMiddlewareCreatorUsers= (instance)=>{
  return (dispatch)=>{
    instance.get('/users')
      .then((response) => {
        dispatch(addUsersAC(response.data));
      })
  }
}
