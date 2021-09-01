
import axios from 'axios';
import { initTask } from '../Redux/Action/todoAction';

export const getAll = () => async dispatch => {
  return axios.get(process.env.REACT_APP_BASEURL_API + '/hanabyan/todo/1.0.0/to-do-list')
    .then((res) => {
      const data = res.data;
      dispatch(initTask(data))
    })
    .catch(err => console.log(err));
};