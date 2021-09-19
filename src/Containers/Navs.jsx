import TopNav from '../Components/TopNav';
import SideNav from '../Components/SideNav';

export default function Navs(props) {
  return (
    <>
      <TopNav 
        isSideNavOpen={props.isSideNavOpen}
      />
      <SideNav 
        isSideNavOpen={props.isSideNavOpen}
        handleSideNav={props.handleSideNav}
      />
    </>
  )
};