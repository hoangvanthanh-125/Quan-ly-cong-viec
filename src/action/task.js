import *as taskApi from  './../apis/task';
import * as Types from './../constant/task'


export const filterTask = (keyword) => {
  return {
    type:Types.FILTER_TASK,
    payload:{
      keyword
    }
  }
} 
export const filterTaskSuccess = (dataFilter) => {
  return {
    type:Types.FILTER_TASK_SUCCESS,
    payload:{
      dataFilter
    }
  }
} 


export const fetList = (params={}) =>{
  return {
    type:Types.FETCH_TASK,
    payload:{
      params
    }
  }
}
export const  fetListSuccess = (data) => {
  return {
    type:Types.FETCH_TASK_SUCCESS,
    payload:{
      data
    }
  }
}
export const fetListFail = (err) => {
  return {
    type:Types.FETCH_TASK_FAIL,
    payload:{
      err
    }
  }
}
export const fetchListTaskRequest = () => {
  return (dispatch) => {
    dispatch(fetList())
    taskApi.getList()
    .then(res => {
      dispatch(fetListSuccess(res.data))
    })
    .catch(err => {
      dispatch(fetListFail(err))
    })
  }
}
export const addTask = (title,description) => {
  return {
    type:Types.ADD_TASK,
    payload:{
      title,
      description
    }
  }
}
export const addTaskFail = (error) => {
  return {
    type:Types.ADD_TASK_FAIL,
    payload:{
     error
    }
  }
}
export const addTaskSuccess = (dataTask) => {
  return {
    type:Types.ADD_TASK_SUCCESS,
    payload:{
      dataTask
    }
  }
}
export const editTask = (taskEditing) =>{
  return {
    type:Types.EDIT_TASK,
    payload:{
      taskEditing
    }
  }
}
export const updateTask = (title,description,status) => {
  return {
    type:Types.UPDATE_TASK,
    payload:{
      title,
      description,
      status
    }
  }
}
export const updateTaskFail = (error) => {
  return {
    type:Types.UPDATE_TASK_FAIL,
    payload:{
     error
    }
  }
}
export const updateTaskSuccess = (dataUpdating) => {
  return {
    type:Types.UPDATE_TASK_SUCCESS,
    payload:{
      dataUpdating
    }
  }
}

export const deleteTask = (id) => {
  return {
    type:Types.DELETE,
    payload:{
      id
    }
  }
}
export const deleteTaskSuccess = (id) => {
  return {
    type:Types.DELETE_SUCCESS,
    payload:{
      id
    }
  }
}
export const deleteTaskFail = (id) => {
  return {
    type:Types.DELETE_FAIL,
    payload:{
      id
    }
  }
}