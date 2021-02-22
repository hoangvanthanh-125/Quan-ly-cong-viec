import axiosService from './../common/axiosSevice'
import {API_ENDPOINT} from './../constant/index'
import qs from 'query-string'
const url = '/tasks'
export const getList = (params={}) => {
  let queryParam ='';
  if(Object.keys(params).length > 0){
    queryParam=`?${qs.stringify(params)}`
  }
  return axiosService.get(`${API_ENDPOINT}${url}${queryParam}`);
}
export const addList = (data) =>{
  return axiosService.post(`${API_ENDPOINT}${url}`,data)
}
export const updateTask = (data,taskId) =>{
  return axiosService.put(`${API_ENDPOINT}${url}/${taskId}`,data)
}
export const deleteTask = (taskId) =>{
  return axiosService.delete(`${API_ENDPOINT}${url}/${taskId}`)
}