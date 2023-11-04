import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './User.css'

function UpdateUser() {



  const params = useParams();


  const getUserRecord = async () => {

    let result = await fetch(`http://localhost:6001/get-User-data/${params.id}`)
    result = await result.json()
    // console.log(result)

    setFormData({
      fname: result.fname,
      lname: result.lname,
      email: result.email,
      dob: result.dob,
      gender: result.gender,
      countery: result.countery,
      role: result.role,
    })

  }




  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    gender: "",
    countery: "",
    role:"",
  })

  
  const onChange = (e) => {


    setFormData({ ...formData, [e.target.name]: e.target.value })
  }



  const navigate = useNavigate();


  const onSubmit = async (e) => {

    e.preventDefault()

 
      let result = await fetch(`http://localhost:6001/update-user/${params.id}`,{
        method:"put",
        body: JSON.stringify({fname,lname,email, dob,gender,countery, role}),
        headers:{
          "Content-Type":"application/json"
        },
      })

      
    result = await result.json();

    navigate("/admin/dashboard/nav/allUsers")


 
    

    // console.log("updated result _______", result)

  }

  const { fname, lname, email, dob, gender, countery, role } = formData;


  useEffect(() => {
    getUserRecord()
  }, [])
console.log(gender)


  return (
    <>

<div className="backg">
    <div className="container-fluid">
    <h2 className='text-center pt-5 pb-3'>Update-User</h2>

      <div class="container  my-w">
      <form onSubmit={onSubmit}>

        <label className='my-2 form-label'>First Name:</label>
        <input type='text' placeholder='Enter Your First Name' className='p-1 form-control ' name='fname' value={fname} onChange={onChange}/><br/>
       
        <label className='my-2 form-label'>Last Name:</label>
        <input type='text' placeholder='Enter Your Last Name' className='p-1 form-control' name='lname' value={lname} onChange={onChange}/><br/>
       
        <label className='my-2 form-label'>Email:</label>
        <input type='email' placeholder='Enter Your First Name' className='p-1 form-control' name='email' value={email} onChange={onChange}/><br/>
       
        <label className='my-2 form-label'>Date of Birth</label>
        <input type='date'  className='p-1 form-control' name='dob' value={dob} onChange={onChange}/><br/>
       
        <label className='my-2 me-2 form-label'  >Gender</label>
        <input type="radio" id='male'  name='gender'  value="male"  checked={gender === 'male'}  onChange={onChange}/>
        <label className='m-1 me-2' for='male'>Male</label>
        <input type="radio" id='female' name='gender' value="female"  checked={gender === 'female'} onChange={onChange}/>
        <label className='m-1' for='female'>Female</label><br/>
        
        <label className='my-2 form-label'>Countery</label>
        <select className='p-1 w-100 mt-2' name='countery'  value={countery} onChange={onChange}>
          <option selected>Select Your Countery</option>
          <option value="PAK">PAK</option>
          <option value="US">US</option>
          <option value="UAE">UAE</option>
        </select><br/>

        
        <label className='my-2 text-danger form-label'>Role</label>
        <input type='text' placeholder='Enter Your First Name' className='p-1 form-control ' name='role' value={role} onChange={onChange}/><br/>
       
        <button type='submit' className=' btn btn-success bc mt-3 w-100'>Submit</button>
      </form>

      </div>
    </div>
    </div>

    </>
  )
}

export default UpdateUser