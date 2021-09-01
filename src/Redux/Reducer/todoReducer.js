import * as types from '../Type/actionType';

const init = [{
  id: 0,
  title: 'Init Data',
  description: 'Init Data',
  status: 0,
  createdAt: '2000-01-01 23:59'
}];

const todoReducer = (state = init, action) => {

  switch (action.type) {

    case types.TODO_FETCH:
      return action.payload;

    case types.TODO_ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          status: action.payload.status,
          createdAt: action.payload.createdAt
        }
      ];

    case types.TODO_COMPLETE:
      const indeks = state.findIndex((todo) =>
        todo.id === action.payload.id
      )
      if (state[indeks].status === 0) {
        state[indeks].status = 1
      } else if (state[indeks].status === 1) {
        state[indeks].status = 0
      }
      return state;
    
      // case types.TODO_UPDATE:
      //   let newTask;
      //   newTask = [...state];

    default:
      return state;
  }
};

export default todoReducer;