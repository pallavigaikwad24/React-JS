import React, { useContext, useEffect, useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';
import { ContextComponent } from '../../../App';

function Login() {
    const {success, setSuccess} = useContext(ContextComponent);
    const navigate = useNavigate();
    const[data, setData] = useState();
    const [info, setInfo] = useState({email:'', password:''});
    const [showPass, setShowPass] = useState("password"); 
    

    useEffect(()=>{
      axios.get('http://localhost:3001/users')
      .then(res=> setData(res.data))
      .catch(err => console.warn("Error while fetching data", err));
    },[]);

    function inputValue(e){
        const {name, value} = e.target;
        setInfo({...info, [name]:value});
    }

    function isValidPassword(){
        const personObj = data.find(obj=>obj.email === info.email);
        return info.password !== personObj.password? false : true;
    }

    function validateInfo(){
        let flag = true;

        const result = data.find(obj => obj.email === info.email);
        console.log(result);

        if(!info.email){
            flag=false;
            toast.error("Email is required");
        }else if(!result){
          flag=false;
          toast.error("User not exist, please register first");
        }else{
            if(!info.password) {
              flag=false;
                toast.error("Password is required");
            } else if (!isValidPassword(info.password)) {
              flag=false;
                toast.error("Enter correct password");
            }
        }
      
        return flag;
      }

      function funSubmit(e){
        e.preventDefault();
        console.log(info);
        const isValid = validateInfo();
        if(isValid){
          setSuccess(true);
          localStorage.setItem('login', info.email);
          navigate(`/login/${info.email}/home`);
        }
      }

  return (
    <>
    <ContextComponent.Provider value = {{success, setSuccess}} >
    <div className='body'>
        <h3 className="heading">Login</h3>
        <form className="login-page" onSubmit={funSubmit}>
            <input type="email" name="email" id="email" value={info.email} placeholder='Enter your Email ID' onChange={(e)=> inputValue(e)}/>
    
            <div className='input-div'><input type={showPass} name='password' id='password' value={info.password} placeholder='Enter Password' onChange={(e)=>inputValue(e)}/> <span>{showPass!=="password" ? <FaEye onClick={()=>setShowPass('password')}/> : <FaEyeSlash onClick={()=> setShowPass('text')}/>}</span></div>
            <button type='submit' className='submit-btn'>Login</button>
            <p className='msg'>Don't have account?, <Link to={'/signup'}>Sign Up here</Link></p>
            <p className='msg'>Don't remember password?, <Link to={'/forgetpassword'}>Forget Password?*</Link></p>

        </form>
      </div>
    </ContextComponent.Provider>
    </>
  )
 }

export default Login;