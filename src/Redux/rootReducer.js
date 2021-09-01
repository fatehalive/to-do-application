import { combineReducers } from 'redux';
import todoReducer from './Reducer/todoReducer';

const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;