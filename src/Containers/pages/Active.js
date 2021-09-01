import { useDispatch, useSelector } from 'react-redux';
import { completeTask } from '../../Redux/Action/todoAction';
import Button from '../../Components/Button';

function Active() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo);

  function checkStatus(todo) {
    return todo.status < 1
  };

  const filteredTodos = todos.filter(checkStatus);
  const handleComplete = (todo) => {
    dispatch(completeTask(todo))
  }

  return (
    <div className="row">
      <div className="col">

        {filteredTodos && filteredTodos.map((todo, index) => {
          return (
            <div key={index} className="card">
              <div className="row">
                <div className="col-1 text-center align-self-center">
                  <input type="checkbox" onChange={() => handleComplete(todo)} checked={(todo.status === 1) ? true : false} />
                </div>
                <div className="col-9 border">
                  <h5 className="card-title">{todo.title}</h5>
                  <p className="my-0 card-text fs-6 text-dark">{todo.createdAt}</p>
                  <p className="card-text">{todo.description}</p>
                </div>
                <div className="col-2 align-self-center text-center">
                  <Button className={`btn btn-secondary`} text="Update" />
                  <Button className={`btn btn-danger`} text="Delete" />
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
};

export default Active;