import React from 'react';
import { AppBar, Avatar, Grid, IconButton, InputBase, InputAdornment, Toolbar } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: theme.palette.grey[100],
    marginBottom: "0.5rem"
  },
  border: {
    border: "1px solid black"
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

export default function Header() {
  const classes = styles();
  return (
    <AppBar elevation="1" position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item md={2} lg={2}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <span style={{ color: "GrayText" }}>Todo App</span>
          </Grid>
          <Grid item md={true} lg={true}>
            <InputBase
              placeholder="Search"
              className={classes.searchBar}
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              } />
          </Grid>
          <Grid className={classes.border} item  md={1} lg={1}>
            <Avatar />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
};