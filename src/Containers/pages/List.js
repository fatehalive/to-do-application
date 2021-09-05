import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTask } from '../../Redux/Action/todoAction.js';
import Button from '../../Components/Button.jsx';

function List() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo);

  const todoItem = todos.map((todo, index) => {
    return (
      <div key={index} className="card">
        <div className="row">
          <div className="col-1 text-center align-self-center">
            <input type="checkbox" onChange={() => handleComplete(todo)} checked={(todo.status === 1) ? true : false} />
          </div>
          <div className="col-9 border">
            <h5 className={(todo.status === 1) ? "card-title text-decoration-line-through" : "card-title"}>{todo.title}</h5>
            <p className="my-0 card-text fs-6 text-dark">{todo.createdAt}</p>
            <p className="card-text">{todo.description}</p>
          </div>
          <div className="col-2 align-self-center text-center">
            <Button className={`btn btn-sm btn-outline-secondary`} type="Update" />
            <Button className={`btn btn-sm btn-outline-danger`} type="Delete" />
          </div>
        </div>
      </div>
    )
  })

  useEffect(() => {
    console.log('Rerender List')
  }, []);

  const handleComplete = (todo) => {
    dispatch(completeTask(todo));
  }

  return (
    <div className="row">
      <div className="col">

        {todoItem}

        {/* {todos && todos.map((todo, index) => {
          return (
            <div key={index} className="card">
              <div className="row">
                <div className="col-1 text-center align-self-center">
                  <input type="checkbox" onChange={() => handleComplete(todo)} checked={(todo.status === 1) ? true : false} />
                </div>
                <div className="col-9 border">
                  <h5 className={(todo.status === 1) ? "card-title text-decoration-line-through" : "card-title"}>{todo.title}</h5>
                  <p className="my-0 card-text fs-6 text-dark">{todo.createdAt}</p>
                  <p className="card-text">{todo.description}</p>
                </div>
                <div className="col-2 align-self-center text-center">
                  <Button className={`btn btn-sm btn-outline-secondary`} type="Update" />
                  <Button className={`btn btn-sm btn-outline-danger`} type="Delete" />
                </div>
              </div>
            </div>
          )
        })} */}

      </div>
    </div>
  )
};

export default List;