import { Link } from 'react-router-dom';

function SideBar(props) {
  return (
    <aside className="col-2 text-center border">
      <h1 className="fs-2 ff-2">TODO APP</h1>
      <br />
      <button className="btn btn-primary" onClick={() => props.modal.show()}>Add Task</button>
      <hr />
      <nav className="nav flex-column">
        <Link className="btn btn-secondary" to="/all">All</Link>
        <div className="fs-6 ff-2 mt-4">Filters</div>
        <Link className="btn btn-secondary mb-1" to="/filter/active">Active</Link>
        <Link className="btn btn-secondary mt-1" to="/filter/done">Done</Link>
      </nav>

      {/* Modal */}
      <div className="modal fade" ref={props.addTodoModal} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light">
              <h5 className="modal-title" id="exampleModalLabel">New Todo</h5>
            </div>
            <div className="modal-body">
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="title">Title</label>
                <div className="col-sm-10">
                  <input className="form-control" value={props.payload.title} onChange={(e) => props.onChange(e, 'title')} type="text" id="title" placeholder="Task Title" />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="description">Descript</label>
                <div className="col-sm-10">
                <input className="form-control" value={props.payload.description} onChange={(e) => props.onChange(e, 'description')} type="text" id="description" placeholder="Task Description" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={props.onClick} type="button" className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;