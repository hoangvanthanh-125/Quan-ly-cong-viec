import { Box, Button, Grid} from '@material-ui/core';
import React, { useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {status } from '../../constant/index';
import ListTask from '../../components/ListTask/ListTask';
import TaskForm from '../../components/TaskForm/TaskForm';
import * as taskActions from '../../action/task'
import { useDispatch, useSelector } from 'react-redux';
import SearchTask from '../../SearchTask/index';
import * as modalAction from '../../action/modal'
function TaskBoardF(props) {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(taskActions.fetList());
  },[])

  var listTask=useSelector(state => state.tasks.listTask);
  //console.log(listTask.length);
  

  const renderSearchTask = ()=> {
    var xhtml = null;
    xhtml = (<SearchTask onSearchTask={onFilter} />)
    return xhtml;
  }
  const onFilter = (e) =>{
    //console.log(e.target.value);
    dispatch(taskActions.filterTask(e.target.value))
  }
  const OpenForm = ()=>{
    dispatch(taskActions.editTask(null));
    dispatch(modalAction.showModal());
    dispatch(modalAction.changeModalTitle('Thêm công việc'));
    dispatch(modalAction.changeModalContent(<TaskForm/>))
  };
  const editTask = task =>{
    //console.log(task);
    dispatch(taskActions.editTask(task));
    dispatch(modalAction.showModal());
    dispatch(modalAction.changeModalTitle("Cập nhật công việc"));
    dispatch(modalAction.changeModalContent(<TaskForm />))
  }
  const showDeleteModal = (task) => {
    dispatch(modalAction.showModal());
    dispatch(modalAction.changeModalTitle('Xóa công việc'));
    dispatch(modalAction.changeModalContent(
      <div>
        <div >
          Bạn có chắc muốn xóa <strong>{task.title}</strong>?
        </div>
        <Box mt={2} display='flex' flexDirection='row-reverse' >
          <Button variant='contained'>Hủy bỏ</Button>
          <Button onClick ={()=>onDeleteTask(task)} variant='contained' color='primary'>Đồng ý</Button>
        </Box>
      </div>
    ))
  }
  const onDeleteTask = (task)=>{
    dispatch(taskActions.deleteTask(task.id));
  }
  const renderBoard = ()=>{
    var result=null;
    //console.log(listTask);
    if(status.length > 0){
      result = (<Grid spacing={2} container>
                 {status.map((item,index)=>{
                 var listFilter = listTask.filter(task=>task.status==item.value);
                 return <ListTask   
                           key={index} 
                           item={item} 
                           listFilter = {listFilter} 
                           index={index}
                           handleEdit={editTask}
                           DeleteTask = {showDeleteModal}
                          />;})}
               </Grid>);
      
    }
    return result;
  };
  return (
    <div className="">
       <Button onClick={()=>OpenForm()} variant = 'contained' color='primary'>
         <AddIcon />
         Thêm công việc
       </Button>
       {renderSearchTask()}
       {renderBoard(status)}
       
    </div>
  );
}

export default TaskBoardF;