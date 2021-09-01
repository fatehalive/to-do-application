import * as type from '../Type/actionType';

export const initTask = (x) => {
  return {
    type: type.TODO_FETCH,
    payload: x
  }
};

export const readTask = (x) => {
  return {
    type: type.TODO_READ,
    payload: x
  }
};

export const addTask = (x) => {
  return {
    type: type.TODO_ADD,
    payload: x
  }
};

export const updateTask = (x) => {
  return {
    type: type.TODO_UPDATE,
    payload: x
  }
};

export const deleteTask = (x) => {
  return {
    type: type.TODO_DELETE,
    payload: x
  }
};

export const completeTask = (x) => {
  return {
    type: type.TODO_COMPLETE,
    payload: x
  }
}