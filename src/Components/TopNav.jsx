import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const appBarWidth = 240;

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    width: `calc(100% - 64px)`,
    marginLeft: 64,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.black,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: theme.zIndex.appBar,
  },
  appBarShift: {
    width: `calc(100% - ${appBarWidth}px)`,
    marginLeft: appBarWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  searchBar: {
    height: "100%",
    borderRadius: "10px",
    backgroundColor: theme.palette.grey[200],
    border: `1px solid ${theme.palette.grey[300]}`
  },
  menuButton: {
    marginLeft: "50%",
    marginRight: "50%"
  }
}));

export default function AdminHeader(props) {
  const classes = styles();
  return (
    <AppBar
      elevation="0"
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.isSideNavOpen
      })}
    >
      <Toolbar>
        Toolbar
      </Toolbar>
    </AppBar>
  )
};