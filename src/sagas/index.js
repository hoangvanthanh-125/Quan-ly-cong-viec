import { call, delay, fork, put, select, take, takeLatest } from 'redux-saga/effects'
import * as  TypesAction from './../constant/task'
import { getList ,addList,updateTask, deleteTask} from './../apis/task'
import {STATUS_CODE} from './../constant/index'
import * as  actions from './../action/task'
import * as uiActions from './../action/uiLoading'
import *as modalactions from './../action/modal'
function* whatFetListtaskaction() {
 while(true){
  const action = yield take(TypesAction.FETCH_TASK);
  //console.log(action);
  const { params } =action.payload;
  yield put(uiActions.showLoading());
  const resp = yield call(getList,params);
  console.log(resp);
  const { status,data } = resp;
  if(status === STATUS_CODE.SUCCESS){
    yield put(actions.fetListSuccess(data));
 
  }
  else {
    
    yield put(actions.fetListFail(data));
  }
  yield put(uiActions.hideLoading());
 }

}
function* filterSaga({ payload }) {
  yield delay(500);
  const {keyword} = payload;
  yield put(actions.fetList({
    search:keyword
  }))

} 
function* addListTask ({ payload }){
  const { title,description } = payload;
  console.log(payload);
  yield put(uiActions.showLoading());
  const respon = yield call(addList,{
    title,
    description,
    status:0
    
  });
  const { data, status} = respon;
  
  if(status ===STATUS_CODE.CREATED){
    //console.log(status);
    yield put(actions.addTaskSuccess(data));
    yield put(modalactions.hideModal());
  }
  else{
    yield put(actions.addTaskFail(data));
  }
  yield put(uiActions.hideLoading());

}
function* updateTasks({ payload }){
  const { title,status ,description } = payload;
  console.log(payload);
  yield put(uiActions.showLoading());
  const taskEditing = yield select (state => state.tasks.taskEditing);
  const { id } = taskEditing;
  console.log(id);
  const resp = yield call(updateTask,{
    title,
    status,
    description
  },id);
  console.log(resp);
  const { data, status:statusCode} = resp;
  if(statusCode === STATUS_CODE.SUCCESS){
    yield put(actions.updateTaskSuccess(data));
    yield put(modalactions.hideModal());
  }
  else {
    yield put(actions.updateTaskFail(data));
  }
  yield put(uiActions.hideLoading());
}
function* deleteTaskSaga ({payload}){
  const { id} = payload;
  yield put(uiActions.showLoading());
  const res = yield call(deleteTask,id);
  const { status ,data}= res;
  console.log(res);
  if(status === STATUS_CODE.SUCCESS){
    yield put(actions.deleteTaskSuccess(id));
    yield put(modalactions.hideModal());
  }
  else{
    yield put(actions.deleteTaskFail(data));
  }
 
  yield put(uiActions.hideLoading());

}
function* rootSaga() {
  yield fork(whatFetListtaskaction);
  yield takeLatest(TypesAction.FILTER_TASK,filterSaga);
  yield takeLatest(TypesAction.ADD_TASK,addListTask);
  yield takeLatest(TypesAction.UPDATE_TASK,updateTasks);
  yield takeLatest(TypesAction.DELETE,deleteTaskSaga)
}
export default rootSaga;