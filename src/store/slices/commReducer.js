const ADD_COMM = 'ADD_COMM'

const initialState = {
  comm :[],
};


export const commReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMM:
          return {
            ...state,
            comm: action.payload,
          }
      default:
        return state;
    }
  };

export const addCommentsAc = (data)=>({type:ADD_COMM , payload:data});

export const thunkMiddlewareCreatorComments = (instance)=>{
    return (dispatch)=>{
      instance.get('/comments')
        .then((response) => {
          dispatch(addCommentsAc(response.data));
        })
    }
  }