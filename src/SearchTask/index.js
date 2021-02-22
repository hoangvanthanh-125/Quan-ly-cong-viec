import { TextField } from '@material-ui/core';
import React from 'react';
import {useStyles} from './styles'
function SearchTask(props) {
  const { onSearchTask } = props;
  const classes  = useStyles();
  
  return (
    <form className = { classes.search }  noValidate autoComplete="off">
    <TextField 
      className = { classes.search }
      onChange = {onSearchTask}
      placeholder = 'Nhập từ khóa'
    />
   
  </form>
  );
}

export default SearchTask;