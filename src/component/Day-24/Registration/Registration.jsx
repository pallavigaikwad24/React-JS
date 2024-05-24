import React, { useState } from "react";
import "./formikYup.css";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { FaEyeSlash,FaEye } from "react-icons/fa";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Registration() {
  const [eye, setEye] = useState('password');
  const [confirm, setConfirm] = useState('password');

    const validation = Yup.object({
        name: Yup.string().min(2).max(25).required("Please enter name"),
        email: Yup.string().email().required("Please enter Email"),
        password:Yup.string().min(8).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "Password must have one capital, one digit and one small character").required("Please enter password"),
        confirmPassword: Yup.string().required("Please enter confirm password").oneOf([Yup.ref("password")], "Password must match")
    })

  const { values, handleChange, handleSubmit, handleReset, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <>
      <div id="main">
        <div id="form-data">
          <form action="#" id="form" onSubmit={handleSubmit} onReset={handleReset}>
            <label htmlFor="name" style={{ marginLeft: "-80px" }}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input-field"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <p id="form-error">{errors.name}</p>
            <label htmlFor="email" style={{ marginLeft: "-80px" }}>
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-field"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <p id="form-error">{errors.email}</p>

            <label htmlFor="password" style={{ marginLeft: "-100px" }}>
              Password:
            </label>
            <input
              type={eye}
              name="password"
              id="password"
              className="input-field"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <span id="seen">{eye!=="password" ? <FaEye onClick={()=>setEye('password')}/> : <FaEyeSlash onClick={()=> setEye('text')}/>}</span>
            <p id="form-error">{errors.password}</p>
            <label htmlFor="confirmPassword" style={{ marginLeft: "-150px" }}>
              Confirm Password:
            </label>
            <input
              type={confirm}
              name="confirmPassword"
              id="confirmPassword"
              className="input-field"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Enter confirm password"
            />
            <span id="seen-confirm">{confirm!=="password" ? <FaEye onClick={()=>setConfirm('password')}/> : <FaEyeSlash onClick={()=> setConfirm('text')}/>}</span>

            <p id="form-error">{errors.confirmPassword}</p>
            <button type="submit" id="btn-submit">
              Submit
            </button>
          </form>
        </div>
        <div id="side-image">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Registration;
