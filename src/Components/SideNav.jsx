import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popper from '@material-ui/core/Popper';
import IconDashboard from '@material-ui/icons/DashboardOutlined';
import IconLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import IconPerson from '@material-ui/icons/PersonOutlined';
import IconRight from '@material-ui/icons/KeyboardArrowRightRounded';
import IconSetting from '@material-ui/icons/SettingsOutlined';
import IconTodo from '@material-ui/icons/CheckBoxOutlined';
import IconMail from '@material-ui/icons/MailOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import clsx from 'clsx';
import { useState } from 'react';

const drawerWidth = 240;

const listItem = [
  {
    text: 'Dashboard',
    icon: (<IconDashboard />),
    location: '/apps/dashboard',
  },
  {
    text: 'Todo',
    icon: (<IconTodo />),
    location: '/apps/todo',
  },
  {
    text: 'Mail',
    icon: (<IconMail />),
    location: '/apps/mail',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    color: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[800],
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  drawerClose: {
    color: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[800],
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8),
    }
  },
  listPages: {
    position: 'absolute',
    bottom: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[400],
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SideNav(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  let drawerProps = {
    variant: 'permanent',
    close: undefined,
    open: undefined
  };
  props.isSideNavOpen ? drawerProps.open = 'true' : drawerProps.close = 'true';

  const popper = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget)
  };

  const open = Boolean(anchorEl);

  return (
    <Drawer {...drawerProps}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.isSideNavOpen
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.isSideNavOpen,
          [classes.drawerClose]: !props.isSideNavOpen
        })
      }}>
      <div className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={props.handleSideNav}
        >
          {props.isSidenavOpen ? <IconLeft fontSize="small" /> : <IconRight fontSize="small" />}
        </IconButton>
      </div>
      <List>
        {listItem.map((item, index) => (
          <ListItem aria-describedby={index} button component={Link} to={item.location} key={index}>
            <ListItemIcon onMouseEnter={(e) => popper(e)} onMouseLeave={(e) => popper(e)} style={{ color: grey[400] }} children={item.icon} />
            <Popper id={index} open={open} anchorEl={anchorEl} transition placement="right">
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <div className={classes.paper}>{item.text}</div>
                </Fade>
              )}
            </Popper>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <List className={classes.listPages}>
      <Divider/>
        {['Profile', 'Setting'].map((text, index) => (
          <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
            <ListItemIcon style={{ color: grey[400] }}>{index % 2 === 0 ? <IconPerson /> : <IconSetting />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
};