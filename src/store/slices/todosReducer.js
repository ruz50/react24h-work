const ADD_TODOS = 'ADD_POST';

const initialState = {
  todos: [],
  
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export const addTodosAC = (data) => ({ type: ADD_TODOS, payload: data });

export const thunkMiddlewareCreatorTodos = (instance)=>{
  return (dispatch)=>{
    instance.get('/todos')
      .then((response) => {
        dispatch(addTodosAC(response.data));
      })
  }
}

