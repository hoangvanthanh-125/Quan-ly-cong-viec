import React from 'react';

import Button from '@material-ui/core/Button';
import { Box, Grid, MenuItem, TextField } from '@material-ui/core';
import { useStyle } from './style'
import { connect, useDispatch, useSelector } from 'react-redux';
import * as modalActions from './../../action/modal'
import { Field, reduxForm } from 'redux-form'
import renderTextField from './../../components/FormHelper/TextField/index'
import validate from './validate'
import * as taskActions from './../../action/task'
import renderSelectField from '../FormHelper/select';
function TaskForm(props) {
  const taskEditing = useSelector(state => state.tasks.taskEditing);
  const classes = useStyle();
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(modalActions.hideModal())
  }
  const { handleSubmit, invalid} = props;
 
  const handleSubmitForm = (data) =>{
      //console.log(data);
      const { title,description ,status} = data;
      console.log(data);
     if(taskEditing){
        dispatch(taskActions.updateTask(title,description,status));
     }
     else{
      dispatch(taskActions.addTask(title,description));
     }
  }
  const renderStatusSelect = () => {
    let xhtml = null;
    if(taskEditing && taskEditing.id){
      xhtml = (
        <Field 
           label="Trạng thái"
           id="trangthai"
           name='status'
           component={renderSelectField}
           className={classes.select}
          
         >
           <MenuItem value={0} >Ready</MenuItem>
           <MenuItem value={1} >In progress</MenuItem>
           <MenuItem value={2}>Completed</MenuItem>
         </Field>
      )
    }
    return xhtml;
  }
  return (

    
    <form 
      onSubmit={handleSubmit(handleSubmitForm)}
      className={classes.form}
      noValidate autoComplete="off">
   
        <Grid container >
         
         <Grid item md={12} xs={12}>
         <Field 
           label="Tên công việc"
           id="tencongviec"
           name='title'
           component={renderTextField}
           className={classes.input}
          
         />
          </Grid>
          <Grid item md={12} xs={12}>
         <Field 
           label="Mô tả"
           id="mota"
           name='description'
           multiline
           component={renderTextField}
           className={classes.input}
           rowsMax={4}
           
         />
          </Grid>
          <Grid item md={12} xs={12}>
            {renderStatusSelect()}
          </Grid>
          <Grid className={classes.button} item md={12} xs={12}>
            <Box  display="flex" flexDirection="row-reverse">
            
            <Button 
              variant='contained' 
              onClick = {() => closeForm()}
            >
              Hủy bỏ
            </Button>
            <Box mr={1}> 
              <Button disabled={invalid} type="submit"  variant='contained' color='primary'>
              Lưu lại
              </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
  </form>
  );
 
}
const FORM_NAME='FORM_NAME';
 TaskForm = reduxForm({
  form:FORM_NAME,
  validate
})(TaskForm)
TaskForm = connect(
  state => ({
    initialValues:state.tasks.taskEditing// pull initial values from account reducer
  }),
  
)(TaskForm)
export default TaskForm;