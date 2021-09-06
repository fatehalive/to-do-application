import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  drawer: {
    border: "1px solid #010101"
  }
}));

export default function MyDrawer() {
  const classes = styles();
  return (
    <Drawer className={classes.appBar}>
      Tes
    </Drawer>)
}