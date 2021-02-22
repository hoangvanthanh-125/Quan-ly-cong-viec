import * as TypesUiLoading from './../constant/uiLoading'

var initialState = {
  showLoading:false,
  showSideBar:false
}
const loadingUi = (state = initialState , action) => {
   switch (action.type) {
     case TypesUiLoading.SHOW_LOADING:
       return {
         ...state,
         showLoading:true
       }
       case TypesUiLoading.HIDE_LOADING:
       return {
         ...state,
         showLoading:false
       }
       case TypesUiLoading.HIDE_SIDEBAR:
         return {
           ...state,
           showSideBar:false
         }
         case TypesUiLoading.SHOW_SIDEBAR:
           return {
             ...state,
             showSideBar:true
           }
     default:return state;
      
   }
}
export default loadingUi;
