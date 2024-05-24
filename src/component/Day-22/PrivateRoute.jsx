import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function PrivateRoute(props) {
  const {Component} = props;

  const navigate = useNavigate();
  const {username} = useParams();
  
  useEffect(()=>{
    let login = localStorage.getItem('login');
    if(login !== username){
      navigate('/login');
    }
  });
  return (
    <>
    <Component/>
    </>
  )
}

export default PrivateRoute;