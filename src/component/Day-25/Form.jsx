import React, { useState } from "react";
import "./form.css";
import Input from "./Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Error from "./Error";
import { FaEyeSlash,FaEye } from "react-icons/fa";


const initialValue = {
  mode:"email",
  name: "",
  email: "",
  password: "",
  ConfirmPass: "",
  mobile: "",
  gender: "",
  skills: [],
  dob: "",
  country: "",
  agree:false,
  otp:""
};

function Form() {

  const [eye, setEye] = useState('password');
  const [confirm, setConfirm] = useState('password');

  const validation = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter name!"),
    email: Yup.string().email().required("Please enter Email ID"),
    password: Yup.string()
      .min(8)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password must have one capital, one digit and one small character!"
      )
      .required("Please enter password!"),
    ConfirmPass: Yup.string()
      .required("Please enter confirm password!")
      .oneOf([Yup.ref("password")], "Password must match!"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number should be 10 digits")
      .required("Please enter mobile number"),
    gender: Yup.string().required("Please select Gender!"),
    skills: Yup.array().min(1).required("Please select at least one skill!"),
    dob: Yup.date()
      .max(new Date(), "Please select valid date")
      .required("Please select date"),
    country: Yup.string().required("Please select Country"),
    agree: Yup.boolean().required().oneOf([true], 'You must agree to the terms'),
    otp: Yup.string()
    .when('agree', {
      is: true,
      then: (schema)=> schema.required("Please enter OTP").matches(/^[0-9]{4}$/, "Enter correct OTP!"),
    })
  
  });

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  const mode = formik.values.mode;
  // To give email already selected in beginning
  const isChecked=()=>{
    return mode === "email" ? true:false;
  }

  const result = isChecked();

  return (
    <>
      <form action="#" id="form-section" onSubmit={formik.handleSubmit}>

        {/* Example trying */}
        <label htmlFor="gender" className="label">
          Register with :
        </label>

        {/* Email Mode */}
        
        <Input
          type={"radio"}
          name={"mode"}
          id={"email-mode"}
          class={"select-field"}
          labelName={"Email"}
          labelFor={"email-mode"}
          value={"email"}
          onChange={formik.handleChange}
          checked={result}
        />

        {/* Mobile Mode */}
        <Input
          type={"radio"}
          name={"mode"}
          id={"mobile-mode"}
          class={"select-field"}
          labelName={"Mobile"}
          labelFor={"mobile-mode"}
          value={"mobile"}
          onChange={formik.handleChange}
        />
        <br /> <br />
        {/*Text input  */}
        <Input
          type={"text"}
          name={"name"}
          id={"name"}
          class={"input-field"}
          labelName={"Name"}
          labelFor={"name"}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <Error error={formik.errors.name} class={"error-container"}/>
        <br />
        
        {formik.values.mode === "email" ? (
            // Email Mode
        <>
        <Input
          type={"email"}
          name={"email"}
          id={"email"}
          class={"input-field"}
          labelName={"Email"}
          labelFor={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Error error={formik.errors.email} class={"error-container"}/> 
        <br />
       
        </>
        ) : (
            <>
                <Input
                type={"number"}
                name={"mobile"}
                id={"mobile"}
                class={"input-field"}
                labelName={"Mobile Number"}
                labelFor={"mobile"}
                value={formik.values.mobile}
                onChange={formik.handleChange}
                />
                <Error error={formik.errors.mobile} class={"error-container"}/>
                <br />
            </>
        )
        
    }
        

        {/* password field */}
        <div className="container">
        <Input
          type={eye}
          name={"password"}
          id={"password"}
          class={"input-field"}
          labelName={"Password"}
          labelFor={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <span id="pass">{eye!=="password" ? <FaEye onClick={()=>setEye('password')}/> : <FaEyeSlash onClick={()=> setEye('text')}/>}</span>
        </div>

        <Error error={formik.errors.password} class={"error-container"}/>
        <br /> <br />

        {/* Confirm password */}
        <div className="container">
        <Input
          type={confirm}
          name={"ConfirmPass"}
          id={"ConfirmPass"}
          class={"input-field"}
          labelName={"Confirm Password"}
          labelFor={"ConfirmPass"}
          value={formik.values.ConfirmPass}
          onChange={formik.handleChange}
        />
        <span id="passConf">{confirm!=="password" ? <FaEye onClick={()=>setConfirm('password')}/> : <FaEyeSlash onClick={()=> setConfirm('text')}/>}</span>
        </div>

        <Error error={formik.errors.ConfirmPass} class={"error-container"}/>
        <br /> 
        
        {/*Radio  field  */}
        <label htmlFor="gender" className="label">
          Select Gender:{" "}
        </label>
        <Input
          type={"radio"}
          name={"gender"}
          id={"male"}
          class={"select-field"}
          labelName={"Male"}
          labelFor={"male"}
          value={"male"}
          onChange={formik.handleChange}
        />
        <Input
          type={"radio"}
          name={"gender"}
          id={"female"}
          class={"select-field"}
          labelName={"Female"}
          labelFor={"female"}
          value={"female"}
          onChange={formik.handleChange}
        />
        <Error error={formik.errors.gender} class={"error-container"}/>
  
        {/* Checkbox field */}
        <br /> <br />
        <label htmlFor="skills" className="label">
          Select Skills:{" "}
        </label>
        <Input
          type={"checkbox"}
          name={"skills"}
          id={"react"}
          class={"select-field"}
          labelName={"React Js"}
          labelFor={"react"}
          value={"react"}
          onChange={formik.handleChange}
        />
        <Input
          type={"checkbox"}
          name={"skills"}
          id={"node"}
          class={"select-field"}
          labelName={"Node Js"}
          labelFor={"node"}
          value={"node"}
          onChange={formik.handleChange}
        />
        <Input
          type={"checkbox"}
          name={"skills"}
          id={"java"}
          class={"select-field"}
          labelName={"Java"}
          labelFor={"java"}
          value={"java"}
          onChange={formik.handleChange}
        />
        <Error error={formik.errors.skills} class={"error-container"}/>
        <br />  <br /> <br />
        {/* Date field */}
        <Input
          type={"date"}
          name={"dob"}
          id={"dob"}
          class={"dob-field"}
          labelName={"Date of Birth"}
          labelFor={"dob"}
          onChange={formik.handleChange}
        />
        <Error error={formik.errors.dob} class={"error-container"}/>
        <br /> <br />
       
        {/* Dropdown */}
        <select
          name="country"
          id="cpuntry"
          className="input-field"
          onChange={formik.handleChange}
        >
          <option value="Select">Select</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="Japan">Japan</option>
          <option value="South Korea">South Korea</option>
          <option value="United State">United State</option>
        </select>
        <Error error={formik.errors.country} class={"error-container"}/>
        <br />

        <Input
          type={"checkbox"}
          name={"agree"}
          id={"agree"}
          class={"select-field"}
          labelName={"The all information I have provided is correct."}
          labelFor={"agree"}
          onChange={formik.handleChange}
        />
        <Error error={formik.errors.agree} class={"error-container"}/>
        <br /> <br />
        <Input
          type={"number"}
          name={"otp"}
          id={"otp"}
          class={"input-field"}
          labelName={"OTP"}
          labelFor={"otp"}
          value={formik.values.otp}
          onChange={formik.handleChange}
        />
        <Error error={formik.errors.otp} class={"error-container"}/>
        <br /> 


        <button type="submit" id="btn-submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
