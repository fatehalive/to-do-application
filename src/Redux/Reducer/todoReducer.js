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
      const a = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
        createdAt: action.payload.createdAt
      }
      // array.concat return immutable
      return state.concat(a);

    case types.TODO_COMPLETE:
      // const indeks = state.findIndex((todo) =>
      //   todo.id === action.payload.id
      // );

      // const x = Object.assign([],state);
      // if (x[indeks].status === 1) {
      //   x[indeks].status = 0;
      // } else if (x[indeks].status === 0) {
      //   x[indeks].status = 1;
      // }
      let copy = [...state];
      let copyItem = copy.find(item => item.id === action.payload.id);
      copyItem.status === 0 ? copyItem.status = 1 : copyItem.status = 0;
      return copy;

    default:
      return state;
  }
};

export default todoReducer;