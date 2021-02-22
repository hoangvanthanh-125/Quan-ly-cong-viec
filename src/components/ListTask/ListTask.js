import React from 'react';
import {Grid,Box} from '@material-ui/core';
import TaskItem from '../TaskItem/TaskItem';

function ListTask(props) {
  const {item , listFilter ,index,handleEdit,DeleteTask}=props;
  return (
    
      <Grid item sm={4} xs={12}  key={index} >
           <Box mt={1} mb={1}>
            <div >
           {item.label}
            </div>
           </Box>
           <div>
             {listFilter.map(task=>{
               return (
               <TaskItem onDele={DeleteTask} handleEditing={handleEdit} key={task.id} item={item} task={task} />
               )
             })}
           </div>
         </Grid>
   
  );
}

export default ListTask;