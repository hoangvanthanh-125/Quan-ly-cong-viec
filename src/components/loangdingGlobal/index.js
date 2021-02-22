import { Icon } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import loading from './../../assets/images/loading.gif'
import { useStyles } from './styles'
function LoadingGlobal(props) {
  const showLoading = useSelector(state => state.loadingUi.showLoading);
  const classes = useStyles();

  
    var xhtml= null;
    if(showLoading) {
      xhtml = (<div className = {classes.loading}>
        <img className = {classes.icon} src = {loading} alt = 'loading' />
      </div>);
    }
    
  return xhtml;
}

export default LoadingGlobal;