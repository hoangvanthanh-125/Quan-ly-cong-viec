import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingGlobal from './components/loangdingGlobal/index';
import MyModal from './modalCpn/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from  './common/theme/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import { ADMIN_ROUTER ,DEFAULT_ROUTE} from './constant/index';
import AdminLayoutRoute from './common/Layout/AdminLayoutRoute/index';
import { ThemeProvider } from '@material-ui/core';
import DefaultLayoutRoute from './common/Layout/DefaultLayoutRoute';
function App(props) {
  const renderAdminRoute =()=>{
    var xhtml = null;
    console.log(ADMIN_ROUTER);
    xhtml = ADMIN_ROUTER.map(route=>{
      return (
        <AdminLayoutRoute 
          key={route.path} 
          name = {route.name} 
          Component ={route.component} 
          path = {route.path}
          exact = {route.exact}
        />
      )
    })
    return xhtml;
  }

  const renderDefaultRoute =()=>{
    var xhtml = null;
    //console.log(DEFAULT_ROUTE);
    xhtml = DEFAULT_ROUTE.map(route=>{
      return (
        <DefaultLayoutRoute 
          key={route.path} 
          name = {route.name} 
          Component ={route.component} 
          path = {route.path}
          exact = {route.exact}
        />
      )
    })
    return xhtml;
  }
  const store = configureStore();
  return (
    
     
   
    <Provider store={store} >
      <Router>
        <ThemeProvider theme = {theme} >
          <CssBaseline />
         <ToastContainer />
           <Switch>
             {renderAdminRoute()}
             {renderDefaultRoute()}
           </Switch>
         <LoadingGlobal />
         <MyModal />
       </ThemeProvider>  
      </Router>
    </Provider>
   
    
  );
}

export default App;