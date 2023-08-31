// import React from "react";
// import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({component:Component, ...rest}) => {
//     return <Route {...rest} render={(props) => {
//         if (localStorage.getItem('token')) {
//             return(<Component {...props}/>);
//         } else {
//             return <Redirect to="/login"/>
//         }
//     }}/>
// }

// export default PrivateRoute;

import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;