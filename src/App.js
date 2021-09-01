import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SideBarContainer from './Containers/layout/SideBarContainer';
import MainContainer from './Containers/layout/MainContainer';
import { getAll } from './api/todo';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(`Render App`);
    dispatch(getAll());
  },[dispatch])
  
  return (
      <div className="container border">
        <div className="row vh-100">
          <SideBarContainer />
          <MainContainer />
        </div>
      </div>
  );
}

export default App;
