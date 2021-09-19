import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Main from '../Containers/Main';
import Navs from '../Containers/Navs';
// import { getAll } from './api/todo';

function App() {
  const dispatch = useDispatch();
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    console.log(`Render App`);
    // dispatch(getAll());
  }, [dispatch]);

  const handleDrawer = () => {
    setSideNavOpen(!isSideNavOpen)
  }

  return (
    <Fragment>
      <Navs
        isSideNavOpen={isSideNavOpen}
        handleSideNav={handleDrawer}
      />
      <Main
        isSideNavOpen={isSideNavOpen}
      />
    </Fragment>
  );
}

export default App;
