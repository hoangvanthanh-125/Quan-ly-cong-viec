import {ToastFunc, ToastFuncSuccess}from '../common/ToastFunc';
import *as Types from './../constant/task'
var initialState = {
  listTask:[],
  taskEditing:null
}
const TaskReducer = (state=initialState,action)=>{
  switch(action.type){
    case Types.FETCH_TASK:
      return {
        ...state,
       listTask:[]
      }
  
  case Types.FETCH_TASK_SUCCESS:
    const {data} = action.payload;
    return {
      ...state,
      listTask:data
    }
    case Types.FETCH_TASK_FAIL:
      console.log("loi");
      const { err } = action.payload;
      ToastFunc(err)
      return state;
      case Types.FILTER_TASK_SUCCESS:
        const { dataFilter } = action.payload;
        return {
          ...state,
          listTask:dataFilter
        }
      case Types.ADD_TASK:
        return {
          ...state
        }
        case Types.ADD_TASK_SUCCESS:
          //console.log("da succes");
          ToastFuncSuccess('Thêm thành công')
          var { dataTask } = action.payload;
          return {
            ...state,
            listTask:[dataTask].concat(state.listTask)
          }
        case Types.ADD_TASK_FAIL:
          const {error} = action.payload;
          ToastFunc(error);
          return {
            ...state
          }
          case Types.EDIT_TASK:
            const { taskEditing } = action.payload;
            return {
              ...state,
              taskEditing:taskEditing

            }
          case Types.UPDATE_TASK:{
            return {
              ...state
            }
          }
          case Types.UPDATE_TASK_SUCCESS:{
            //console.log("da update");
            ToastFuncSuccess('Cập nhật thành công')
            const { dataUpdating } = action.payload;
            console.log(dataUpdating);
            var { listTask } = state;
            const indexEdit = listTask.findIndex(item => item.id === dataUpdating.id);
            console.log(indexEdit);
            if(indexEdit !== -1 ){
               const newList = [
                ...listTask.slice(0,indexEdit),
                dataUpdating,
                ...listTask.slice(indexEdit + 1)
              ]
              return {
                ...state,
                listTask:newList
              }
            }
            return {
              ...state
            }
          }
         case Types.DELETE:{
           return {
             ...state
           }
         }
         case Types.DELETE_SUCCESS:{
           ToastFuncSuccess('Xóa thành công')
           const { id } = action.payload;
           return {
             ...state,
             listTask:state.listTask.filter(item => item.id !==id)
           }
         }
         case Types.DELETE_FAIL:{
           return {
             ...state
           }
         }
  default :return state;
}
}
export default TaskReducer;