import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useStyles } from './style'
import { ADMIN_ROUTER } from './../../../constant/index'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function SideBar(props) {
  const classes = useStyles();
  const showSideBar = useSelector(state=>state.loadingUi.showSideBar);

  
  const renderList = () => {
    var xhtml = null;
    xhtml = (
      <span className = {classes.list}>
        <List component = 'div'>
          {ADMIN_ROUTER.map(item => {
            return (
              <NavLink className={classes.menulink} activeClassName={classes.active} key = {item.path} to={item.path} exact>
                  <ListItem key = {item.path} button className = {classes.menuItem}>
                    {item.name}
                  </ListItem>
              </NavLink>
            )
          })}
        </List>
      </span>
    )
    return xhtml;
  }
  return (
    <Drawer
    className={classes.drawer}
    variant="persistent"
    
    open={showSideBar}
    classes={{
    paper: classes.drawerPaper,
    }}
  >
    {renderList()}
  </Drawer>
  );
}

export default SideBar;