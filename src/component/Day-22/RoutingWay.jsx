import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomeLogin from './HomeLogin.jsx';
import Login from './LoginPage/Login.jsx';
import Signup from './SignUp/Signup.jsx';
import ForgetPassword from './ForgetPasswprd/ForgetPassword.jsx';
import PasswordField from './ForgetPasswprd/PasswordField.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import  Dashboard  from './Dashboard/Dashboard.jsx';

function RoutingWay() {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<HomeLogin/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },

        {
            path:'/forgetpassword',
            element:<ForgetPassword/>
        },
        {
            path:'/forgetpassword/:username?',
            element:<PasswordField/>
        },
        {
            path:'/login/:username?/dashboard',
            element: <PrivateRoute Component={<Dashboard/>}/>
        }
        
    ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default RoutingWay;