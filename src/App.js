import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from './Main';
import Header from './Header';
// import Drawer from './Drawer';
// import ClippedDrawer from './ClippedDrawer';
// import MiniDrawer from './Minidrawer';
// import SideBarContainer from './Containers/layout/SideBarContainer';
// import MainContainer from './Containers/layout/MainContainer';
// import { getAll } from './api/todo';
// import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(`Render App`);
    // dispatch(getAll());
  },[dispatch]);
  
  return (
      // <div className="container border">
      //   <div className="row vh-100">
      //     <SideBarContainer />
      //     <MainContainer />
      //   </div>
      // </div>
      <React.Fragment>
        <Header />
        <Main />
        {/* <ClippedDrawer/> */}
      </React.Fragment>
  );
}

export default App;
