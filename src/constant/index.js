
import AdminHome from '../container/AdminHompage/AdminHome';
import Login from '../container/Loginpage';
import TaskBoardF from '../container/Taskboard'
import SignUp from '../container/SignUpPage'

export const API_ENDPOINT="https://601a38077db5390017834e4a.mockapi.io/api";

export const  ADMIN_ROUTER = [
  {
    path:'/',
    name:'Trang chủ',
    exact:true,
    component:AdminHome
  },
  {
    path:'/task-board',
    name:'Quản lý công việc',
    exact:false,
    component:TaskBoardF,
   
  }
]

export  const  status=[
  {
    value : 0,
    label : 'READY'
  },
  {
    value :1,
    label : 'IN PROGRESS'
  },
  {
    value : 2,
    label : 'COMPLETED'
  }
]
export const STATUS_CODE = {
  SUCCESS:200,
  CREATED :201,
  UPDATE : 202

}
export const DEFAULT_ROUTE = [
  {
    path:'/login',
    exact:false,
    name:'Trang đăng nhập',
    component:Login,
  },
  {
    path:'/signup',
    exact:false,
    name:'Trang đăng ki',
    component:SignUp,
  }
]