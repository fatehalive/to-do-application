import { Link, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
// import Drawer from '@material-ui/core/Drawer';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconCheckBox from '@material-ui/icons/CheckBoxOutlined';
import IconMenu from '@material-ui/icons/Menu';
import IconSearch from '@material-ui/icons/Search';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';

const todoSidebarWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    backgroundColor: theme.palette.grey[700],
    width: `calc(100% - 64px)`,
    height: 200,
    marginTop: 64,
    marginLeft: 64,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.only('xs')]: {
      width: '100%'
    }
  },
  appBarShift: {
    width: `calc(100% - ${todoSidebarWidth}px)`,
    marginLeft: todoSidebarWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    border: '1px solid black',
  },
  topLeft: {
    width: `25%`,
    height: 200,
  },
  topRight: {
    width: `${theme.breakpoints.down('md') ? '100%' : '75%'}`,
    height: 200,
  },
  searchBar: {
    height: theme.mixins.toolbar.minHeight,
    borderRadius: 13,
    backgroundColor: theme.palette.grey[100],
  },
  searchIcon: {
    marginLeft: 15,
  },
  searchIconM: {
    marginLeft: 0,
  },
  content: {
    backgroundColor: theme.palette.grey[100],
    width: `calc(100%-64px)`,
    marginTop: 264,
    marginLeft: 64,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.only('xs')]: {
      width: '100%'
    }
  },
  contentShift: {
    width: `calc(100% - ${todoSidebarWidth}px)`,
    marginLeft: todoSidebarWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  bottom: {
    display: 'flex',
    paddingLeft: 24,
    paddingRight: 24,
  },
  bottomLeft: {
    width: '25%',
  },
  bottomRight: {
    width: `${theme.breakpoints.down('md') ? '100%' : '75%'}`,
  },
}));

export default function Todo(props) {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  let matches = useMediaQuery(theme.breakpoints.down('md'));

  const renderMenuButton = (
    <IconButton>
      <IconMenu />
    </IconButton>
  );

  const renderTopLeft = (
    <Box className={classes.topLeft}>
      <Box className={classes.appTitle}>
        <IconCheckBox fontSize="medium" />
        <Typography
          variant="h6"
          align="center"
        >
          TO-DO
        </Typography>
      </Box>
      <Select
        variant="outlined"
        defaultValue={0}
      >
        <MenuItem value={0}>user0@mail.com</MenuItem>
        <MenuItem value={1}>user1@mail.com</MenuItem>
        <MenuItem value={2}>user2@mail.com</MenuItem>
      </Select>
    </Box>
  );

  console.log(location)
  const renderBottomLeft = (
    <Box className={classes.bottomLeft}>
      <List>
        {['All', 'Active', 'Done'].map((text, index) => (
          <ListItem
            button
            component={Link}
            selected={location.pathname === `/apps/todo/${text.toLowerCase()}` ? true : false}
            key={index}
            tabIndex={index + 1}
            to={`/apps/todo/${text.toLowerCase()}`}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        elevation="0"
        component="div"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.isSideNavOpen
        })}
      >
        <Toolbar style={{ border: '1px solid black' }}>
          {matches ? null : renderTopLeft}
          <Box className={classes.topRight}>
            <InputBase
              className={classes.searchBar}
              placeholder="Search"
              fullWidth
              startAdornment={
                <InputAdornment>
                  {matches ? renderMenuButton : null}
                  <IconSearch
                    className={clsx(classes.searchIcon, {
                      [classes.searchIconM]: matches
                    })}
                  />
                </InputAdornment>
              }
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        className={clsx(classes.content, {
          [classes.contentShift]: props.isSideNavOpen
        })}
      >
        <Box className={classes.bottom}>
          {matches ? null : renderBottomLeft}
          <Box className={classes.bottomRight}>
            sadf
          </Box>
        </Box>
      </Box>
    </>
  )
};