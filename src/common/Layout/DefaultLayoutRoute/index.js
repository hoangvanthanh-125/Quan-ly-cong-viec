import React from 'react';
import {
  Route,
  
} from "react-router-dom";


function DefaultLayoutRoute(props) {
  const {name,Component:YourComponent ,...remainProps} = props;
  console.log(props);


  return (
    <Route
      {...remainProps}
      render = {routeProps => {
        return (
           <YourComponent {...routeProps}/>
        )
      }}
    />
      
   
  );
}

export default DefaultLayoutRoute;