import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css'
function Form() {


  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    dob: "",
    gender: "",
    countery: "",
  })

  const [record, setRecord] = useState([])

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }



  const navigate = useNavigate();

  const [err, seterr] = useState(false)


  const onSubmit = async (e) => {
    try {

      e.preventDefault();
      console.log("form data", formData);

      if (!fname || !lname || !email || !password || !cpassword || !dob || !gender || !countery) {
        seterr(true)
        toast.error("fill the complete form first")
        return false;
      }

      if (password === cpassword) {
        toast.success("password matched")
        const newEntry = { ...formData }
        setRecord([...record, newEntry])
      }

      else {
        toast.error("password dosent matched")
      }

      let result = await fetch('http://localhost:6001/register', {
        method: "post",
        body: JSON.stringify({ fname, lname, email, password, cpassword, dob, gender, countery }),
        headers: {
          "Content-Type": "application/json"
        }
      })


      if(result.ok){

        result = await result.json();
        
        if(result.message ===  "email already exists"){
          toast.error("Email Already Exists")
        }
       else  if(result.message === "User Registerd Successfuly"){
          toast.success("User created Successfully")
          
          setFormData({
            fname: "",
            lname: "",
            email: "",
            password: "",
            cpassword: "",
            dob: "",
            gender: "",
            countery: "",
        })
        
        navigate('/user')  
        console.log("final result__________", result)
      }
      else{

      }
      
    }

      

    } catch (error) {
      toast.error("error while submiting try again")
    }
  }

  const { fname, lname, email, password, cpassword, dob, gender, countery } = formData;


  return (
    <>

      <div className="backg">
        <div >
          <h2 className='text-center'>Sign Up</h2>

          <div class="container  my-w">
            <form onSubmit={onSubmit}>

              <label className='m-2 form-label'>First Name:</label>
              <input type='text' placeholder='Enter Your First Name' className='p-1 form-control ' name='fname' value={fname} onChange={onChange} /><br />

              <label className='m-2 form-label'>Last Name:</label>
              <input type='text' placeholder='Enter Your Last Name' className='p-1 form-control' name='lname' value={lname} onChange={onChange} /><br />

              <label className='m-2 form-label'>Email:</label>
              <input type='email' placeholder='Enter Your First Name' className='p-1 form-control' name='email' value={email} onChange={onChange} /><br />

              <label className='m-2 form-label'>Password:</label>
              <input type='Password' placeholder='Enter Your First Name' className='p-1 form-control' name='password' value={password} onChange={onChange} /><br />

              <label className='m-2 form-label'>Confirm Password:</label>
              <input type='Password' placeholder='Please confirm Password' className='p-1 form-control' name='cpassword' value={cpassword} onChange={onChange} /><br />

              <label className='m-2 form-label'>Date of Birth</label>
              <input type='date' className='p-1 form-control' name='dob' value={dob} onChange={onChange} /><br />

              <label className='m-2 form-label' >Gender</label>
              <input type="radio" id='male' name='gender' value="male" onChange={onChange} />
              <label className='m-1' for='male'>Male</label>
              <input type="radio" id='female' name='gender' value="female" onChange={onChange} />
              <label className='m-1' for='female'>Female</label><br />

              <label className='m-2 form-label'>Countery</label>
              <select className='p-1 w-100 mt-2' name='countery' value={countery} onChange={onChange}>
                <option selected >select your countery</option>
                <option value="PAK">PAK</option>
                <option value="US">US</option>
                <option value="UAE">UAE</option>
              </select><br />
              <button type='submit' className=' btn btn-success bc mt-3 w-100'>Submit</button>
            </form>

          </div>
        </div>
      </div>


    </>
  )
}

export default Form