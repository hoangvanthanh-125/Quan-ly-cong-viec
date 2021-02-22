import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import DashBoar from './../../../components/DashBoar/index'


function AdminLayoutRoute(props) {
  const {name,Component:YourComponent ,...remainProps} = props;
  console.log(props);


  return (
    <Route
      {...remainProps}
      render = {routeProps => {
        return (
          <DashBoar name={name}>
           <YourComponent {...routeProps}/>
          </DashBoar>
        )
      }}
    />
      
   
  );
}

export default AdminLayoutRoute;