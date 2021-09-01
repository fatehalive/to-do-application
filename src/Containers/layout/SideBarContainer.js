import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'bootstrap';

import { addTask } from '../../Redux/Action/todoAction';
import SideBar from '../../Components/SideBar.jsx';

function SideBarContainer() {
  // redux properties
  const globState = useSelector(state => state);
  const dispatch = useDispatch();

  // react.hooks
  const [payload, setPayload] = useState({
    id: 0,
    title: '',
    description: '',
    status: 0,
    createdAt: ''
  });
  const [modal, setModal] = useState(null);
  const addTodoModal = useRef();

  useEffect(() => {
    console.log(`Render SideBarContainer`)
    setModal(
      new Modal(addTodoModal.current)
    )
  }, []);

  // fungsional create
  const create = () => {
    var d = new Date();
    var createdat = d.getFullYear().toString() + "-" + ((d.getMonth() + 1).toString().length === 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "-" + (d.getDate().toString().length === 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " " + (d.getHours().toString().length === 2 ? d.getHours().toString() : "0" + d.getHours().toString()) + ":" + (d.getMinutes().toString().length === 2 ? (d.getMinutes().toString()) : "0" + (d.getMinutes().toString()));
    payload.id = globState.todo.length + 1;
    payload.createdAt = createdat;
    dispatch(addTask(payload));
    payload.title = '';
    payload.description = '';
    modal.hide()
  };

  const handleChange = (e, name) => {
    const value = e.target.value;
    setPayload({ ...payload, [name]: value });
  };

  return <SideBar
    payload={payload}
    modal={modal}
    addTodoModal={addTodoModal}
    onClick={create}
    onChange={handleChange}
  />
}

export default SideBarContainer;