import tasks from './TaskReducer';
import {combineReducers} from 'redux';
import  loadingUi from './uiReducer'
import modalReducer from './modalReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  tasks,
  loadingUi,
  modalReducer,
  form: formReducer
})
export default rootReducer;