
import { Card, CardActions, CardContent, Fab, Grid, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import {useStyle} from './style'


function TaskItem(props) {
  const classes=useStyle();
  const {task,item,handleEditing,onDele}=props;
  console.log(props);
  const handleEditTask = () =>{
    handleEditing(task);
  }
  const deleteTask = () =>{
    onDele(task);
  }
  return (
    <Card key={task.id} >
    <CardContent>
      <Grid container justify='space-between'>
        <Grid item md={8} >
           <Typography component='h1'>
             {task.title}
           </Typography>
        </Grid>
      <Grid item md={4} >
           {item.label}
        </Grid>
      </Grid>
      <p>{task.description}</p>
    </CardContent>
    
    <CardActions className={classes.cardAction}>
    
     <Fab onClick={deleteTask} size='small' color="primary" aria-label="add">
       <DeleteIcon fontSize='small' />
     </Fab> 
     <Fab onClick={handleEditTask} size='small' color="secondary" aria-label="edit">
        <EditIcon  fontSize='small' />
     </Fab>
     
    </CardActions>
  </Card>
  );
}

export default TaskItem;