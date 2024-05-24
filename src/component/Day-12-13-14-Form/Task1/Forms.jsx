import { useEffect, useRef, useState } from "react";
import "./style.css";

function FormHandling() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    mobile: "",
    gender: "",
    skills: [],
    birthDate: "",
    file:""
  });
  const [errors, setErrors] = useState({});
  const [arr,setArr] = useState([]);
  const [flag, setFlag] = useState(false);
  const [image, setImage] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const [filterData, setFilterData] = useState(arr);

  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
  },[]);
  

  console.log(formData);
  console.log(image);

  const isValidName = (name) => {
    const validation = /^\s*[a-zA-Z]*$/;
    return validation.test(name);
  };

  const isValidEmail = (email) => {
    const validation = /^[\w.]+@([\w]+\.)+[\w]{2,4}$/;
    return validation.test(email);
  };

  const isValidPassword = (password) => {
    const validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return validation.test(password);
  };

  const isValidMobile = (mobile) => {
    const validation = /^[0-9]{10}$/;
    return validation.test(mobile);
  };


  // Adding Validations 
  const validationForm = () => {
    let newError = {};

    if (!formData.name) {
      newError.name = "Name is required";
    } else if (formData.name.trim() === "") {
      newError.name = "Please enter characters";
    } else if (!isValidName(formData.name)) {
      newError.name = "Please enter valid name";
    }

    console.log("Error list");
    console.log(newError);

    if (!formData.email || formData.email.trim() === "") {
      newError.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newError.email = "Please enter valid email";
    }

    if (!formData.password) {
      newError.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newError.password =
        "Please enter valid password : password should be more than 8 characters, at least one capital, digit and small character";
    }

    if (!formData.confirmPass) {
      newError.confirmPass = "Confirm password is required";
    } else if (formData.password !== formData.confirmPass) {
      newError.confirmPass = "Please enter correct password";
    }

    if (!formData.mobile) {
      newError.mobile = "Phone number is required";
    } else if (!isValidMobile(formData.mobile)) {
      newError.mobile = "Please enter valid phone number";
    }

    if (!formData.gender) {
      newError.gender = "Gender is required";
    }

    if (formData.skills.length === 0) {
      newError.skills = "Select at least one skill";
    }
    
    if (!formData.birthDate) {
      newError.birthDate = "Date Of Birth is required";
    }else{
      const selectedDate = new Date(formData.birthDate);
      const currentDate = new Date();

      if(selectedDate > currentDate){
        newError.birthDate = "Select valid date";
      }
    }

    if(!formData.file){
      newError.file = "Please upload Image"
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  // checking validation

  const handleSubmit = (e) => {
    e.preventDefault();

    let {name, email, password, confirmPass, mobile, gender, skills, birthDate} = formData;

    const isValid = validationForm();

    if (isValid) {

      const exitId=arr.findIndex((record)=>record.mobile===formData.mobile)
      setFlag(false);

      if(exitId!==-1){
        const updatedData=[...arr];
        updatedData[exitId]=formData;
        setArr(updatedData)
      }else{
        setArr([...arr, {name, email, password, confirmPass, mobile, gender, skills, birthDate}]);
      }

      resetFun();

      console.log("Form submitted", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  // accessing input values
  const handleChange = (e) => {
    const { name, value } = e.target;   
    setFormData((prevData) => ({...prevData, [name]:value.trim()}));

    let newError = {...errors};

    // Update formData as per input field

    switch(name){
      case "name": newError.name = value.trim() === "" ? newError.name = "Please enter name" : !isValidName(value) ? newError.name = "Enter valid Name": "";
      break;
      case "email": newError.email = value.trim() === "" ? newError.email = "Please enter Email Id" : !isValidEmail(value) ? newError.email = "Enter valid Email Id": arr.find((item)=> item.email.includes(formData.email)) ? "Email already exited": " ";
      break;
      case "password": newError.password = value.trim() === "" ? newError.password = "Please enter password" : !isValidPassword(value) ? newError.password = "Password should be more than 8 characters, at least one capital, digit and small character" : "";
      break;
      case "confirmPass": newError.confirmPass = value.trim() === "" ? newError.password = "Please enter password to confirm" : value !== formData.password ? "Password should match" : "";
      break;
      case "mobile": newError.mobile = value.trim() === "" ? newError.mobile = "Please enter mobile number" : !isValidMobile(value) ? newError.mobile = "Mobile number should be 10 digits" : arr.find((item)=> item.mobile.includes(formData.mobile)) ? "Mobile number already exited" : "";
      break;
      case "gender": newError.gender = value.trim() === "" ? newError.gender = "Please select gender" : "";
      break;
      case "skills": newError.skills = value.length === 0 ? newError.skills = "Please select at least one skill" : "";
      break;
      case "birthDate": newError.birthDate = value.trim() === "" ? newError.birthDate = "Please select Birth Date" : "";
      break;

      default: break;
    }
    setErrors(newError);
  };


  // ----- file handling -------------

  function fileHandling(e){

    const fileErr = {};

    const fileImage = e.target.files[0];
    console.log(e.target.name);

    if(fileImage){

      if(fileImage.type !== "image/jpeg" && fileImage.type !== "image/png") {
          setImage("");
          fileErr.file = "Only JPG and PNG files are allowd";
      } else if (fileImage.size > 15 * 1024 * 1024) {
          setImage("");
          fileErr.file = "File should be max 5MB size";
      }else{
        const reader = new FileReader();

        reader.onloadend=()=>{
          setImage(reader.result);
        }
  
        reader.readAsDataURL(fileImage)
      }

    }else{
        setImage("");
        fileErr.file = "Please upload file"
    }
    formData.file = fileImage;
    setErrors({ ...errors, ...fileErr });

  }

  //--------------- Adding checkbox data ----------
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updateSkillData = [...formData.skills];

    if (checked) {
      updateSkillData.push(name);
    } else {
      updateSkillData = updateSkillData.filter((val) => val !== name);
    }

    setFormData({ ...formData, skills: updateSkillData });
  };

  // ---------------- Delete Data ------------------

  function deleteBtn(index){
    let value = window.confirm("Are you sure to Delete?");

    if(value){
      const totalData = [...arr];
      console.log(totalData);
      const remainingData = totalData.filter((val)=>{
        return val !== totalData[index];
      })
  
      setArr([...remainingData]);
    }
  }

  // -------------- Edit Table Data ----------------------

  function editBtn(index){

    let value = window.confirm("Are you sure to Update Data?");

    if(value){
    setFlag(true);
    let {name,email,password,confirmPass,mobile,gender,skills,birthDate} = arr[index];
    setFormData({name,email,password,confirmPass,mobile,gender,skills,birthDate});
    }
  }


  // ---------------- Sorting --------------------------

  function nameSortInc() {
    arr.sort((first, second)=>first.name >  second.name ? 1 : -1);
    setArr([...arr]);
  }

  function nameSortDec() {
    arr.sort((first, second)=>first.name <  second.name ? 1 : -1);
    setArr([...arr]);
  }

  function emailSortInc(){
    arr.sort((first, second) => first.email > second.email ? 1:-1);
    setArr([...arr]);
  }

  function emailSortDec(){
    arr.sort((first, second) => first.email < second.email ? 1:-1);
    setArr([...arr]);
  }

  function mobileSortInc(){
    arr.sort((first, second) => first.mobile > second.mobile ? 1:-1);
    setArr([...arr])
  }

  function mobileSortDec(){
    arr.sort((first, second) => first.mobile < second.mobile ? 1:-1);
    setArr([...arr])
  }

  function dateSortDec(){
    arr.sort((first, second) => first.birthDate < second.birthDate ? 1:-1);
    setArr([...arr])
  }

  function dateSortInc(){
    arr.sort((first, second) => first.birthDate > second.birthDate ? 1:-1);
    setArr([...arr])
  }

  // ------------------ Reset Function -------------------------
function resetFun(){
  setFormData({name:"", email:"",password:"",confirmPass:"",mobile:"",gender:"",skills:"",birthDate:""}); 
  setImage(null)
}

// -------------------- Search Function ---------------------------

useEffect(()=>{
  let result = arr.filter((val)=>{
    if(searchInput !== ''){
      return val?.name.toLowerCase().includes(searchInput);
    }else{
      return true;
    }
  })

  setFilterData(result);
},[arr, searchInput])

  return (
    <>
    
      <div id="main">
        <form action="#" onSubmit={handleSubmit} id="form">
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData?.name}
              placeholder="Enter your name"
              className="form-control"
              onChange={handleChange}
              ref={inputRef}
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData?.email}
              placeholder="Enter your Email"
              className="form-control"
              onChange={handleChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData?.password}
              placeholder="Enter your password"
              className="form-control"
              onChange={handleChange}
            />
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
            <br />    
            <label htmlFor="confirmPass">Confirm Password: </label>
            <input
              type="password"
              name="confirmPass"
              id="confirmPass"
              value={formData?.confirmPass}
              placeholder="Confirm Password"
              className="form-control"
              onChange={handleChange}
            />
            {errors.confirmPass && (
              <div className="text-danger">{errors.confirmPass}</div>
            )}
          </div>

          <div>
            <label htmlFor="mobile">Mobile No: </label>
            <input
              type="number"
              name="mobile"
              value={formData?.mobile}
              id="mobile"
              className="form-control"
              onChange={handleChange}
            />
            {errors.mobile && (
              <div className="text-danger">{errors.mobile}</div>
            )}
          </div>
          <br />

          <div>
            <label htmlFor="male">Male: </label>
            <input
              type="radio"
              name="gender"
              id="male"
              className="form-check-input"
              value="male"
              checked={formData?.gender === 'male'}
              onChange={handleChange}
            />
            <label htmlFor="female">Female: </label>
            <input
              type="radio"
              name="gender"
              id="female"
              className="form-check-input"
              value="female"
              checked={formData?.gender === 'female'}
              onChange={handleChange}
            />
            {errors.gender && (
              <div className="text-danger">{errors.gender}</div>
            )}
          </div>
          <br />

          <div id="skills">
            <label htmlFor="skills">Skills: </label>
            <input
              type="checkbox"
              name="ReactJs"
              className="form-check-input" 
              checked={formData?.skills?.includes('ReactJs')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="ReactJs">ReactJs</label>
            <input
              type="checkbox"
              name="Java"
              className="form-check-input"
              checked={formData?.skills?.includes('Java')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Java">Java</label>
            <input
              type="checkbox"
              name="React-Native"
              className="form-check-input"
              id="React-Native"
              checked={formData?.skills?.includes('React-Native')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="React-Native">React Native</label>
            <input
              type="checkbox"
              name="NodeJs"
              className="form-check-input"
              checked={formData?.skills?.includes('NodeJs')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="NodeJs">Node Js</label>
            <input
              type="checkbox"
              name="php"
              className="form-check-input"
              checked={formData?.skills?.includes('php')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="php">PHP</label>
            {errors.skills && (
              <div className="text-danger">{errors.skills}</div>
            )}
          </div>
          <br />
          <div>
            <label htmlFor="date">Date of Birth: </label>
            <input
              type="date"
              className="form-control"
              name="birthDate"
              id="dob"
              value={formData?.birthDate}
              onChange={handleChange}
            />
            {errors.birthDate && (
              <div className="text-danger">{errors.birthDate}</div>
            )}
          </div>

          <div>
            <label htmlFor="file">File:</label>
            <input
              type="file"
              className="form-control"
              id="file"
              onChange={fileHandling}
            />
            {image && <img src={image} alt="preview" width={"150px"} height={"200px"}/>}

            {errors.file && <div className="text-danger">{errors.file}</div>}
          </div>
          
          <button type="submit" className="btn">{!flag? 'Submit':'Edit Data'}</button>
          <button type="reset" onClick={resetFun} className="btn">Reset</button>
  
        </form>

        {/* Search input */}
        <div>
            <input type="search" name="search" id="search" onChange={(e)=> setSearchInput(e.target.value)} placeholder="Search with Name here..."/>
        </div>

        {/* Table for showing data */}
        <div id="tableData">
      <table>
        <thead>
          <tr>
            <th>Name<i className="fa-solid fa-arrow-up arrow" id="nameInc" onClick={nameSortInc}></i><i className="fa-solid fa-arrow-down arrow" id="nameDec" onClick={nameSortDec}></i></th>
            <th>Email<i className="fa-solid fa-arrow-up arrow" id="emailInc" onClick={emailSortInc}></i><i className="fa-solid fa-arrow-down arrow" id="emailDec" onClick={emailSortDec}></i></th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Mobile<i className="fa-solid fa-arrow-up arrow" id="mobileInc" onClick={mobileSortInc}></i><i className="fa-solid fa-arrow-down arrow" id="mobileDec" onClick={mobileSortDec}></i></th>
            <th>Gender</th>
            <th>Skills</th>
            <th>Birth Date<i className="fa-solid fa-arrow-up arrow" id="mobileInc" onClick={dateSortInc}></i><i className="fa-solid fa-arrow-down arrow" id="mobileDec" onClick={dateSortDec}></i></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
            {filterData.map((val, index)=>{
                return <tr key={index}>
                    <td>{val?.name}</td>
                    <td>{val?.email}</td>
                    <td>{val?.password}</td>
                    <td>{val?.confirmPass}</td>
                    <td>{val?.mobile}</td>
                    <td>{val?.gender}</td>
                    <td>{val?.skills.join(",")}</td>
                    <td>{val?.birthDate}</td>
                    <td><i id="editIcon" className="fa-solid fa-pencil" onClick={()=>editBtn(index)}></i><i id="deleteIcon" className="fa-solid fa-trash-can" onClick={()=>deleteBtn(index)}></i></td>
                </tr>
            })}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}

export default FormHandling;
