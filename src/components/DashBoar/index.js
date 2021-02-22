import React from 'react';
import Header from './Header/index'
import Sidebar from './Sidebar/index'
import { useStyles } from './style'
import cn from 'classnames'
import { useSelector } from 'react-redux';
function DashBoar(props) {
  const showSideBar = useSelector(state =>state.loadingUi.showSideBar);
  const {name} = props; 
const classes = useStyles();
  return (
   
    <div className={classes.dashboard}>
      <Header name = {name} />
     <div className = {classes.wrapper}>
      <Sidebar />
      <div className = {cn(classes.wrapperContent,{
        [classes.shiftLeft]:showSideBar === false
      })}>
        {props.children}
      </div>
     </div>
    </div>
  );
}

export default DashBoar;
