import React, { useEffect,useState } from 'react'
import Form from './Form'
import { Link } from 'react-router-dom';
import './User.css'

function UsersList() {

    const[records,setRecords]=useState([]);
    // http://localhost:6001/user-data



    const UserRecords = async () => {

        let result = await fetch('http://localhost:6001/user-data')
        result=await result.json()

        setRecords(result)
        // console.log("--------",result)
    }


    const deleteUser= async (id)=>{

      let result = await fetch(`http://localhost:6001/DeleteUser/${id}`,{
        method: "Delete"
      })

      result = await result.json()

      if(result){
        alert('DELETED!')
        UserRecords()
      }

      else{
        alert('error')
      }
    }


    const searchData = async (e) => {


      let key = e.target.value
      if(key){
      let result = await fetch(`http://localhost:6001/search/${key}`)
      result = await result.json();            
      if(result){
      setRecords(result)
    }
    }
      else{
        UserRecords();
      }
    }


    useEffect(()=>{
        UserRecords();
    },[])
  return (
    <div>

<div class="container-sm mt-5 ">
<label className='m form-label'>Search for Users:</label>

  <input type="text" onChange={searchData} className='mb-4 mt-3 p-2 form-control w-75' placeholder='Search by First Name, Last Name, Email or Date of Birth' />
    

<table class="table mt-2 userTable">

                <thead>
                  <tr className='bg-warning'>
                    <th scope="col-1">Sr.No.</th>
                    <th scope="col-2" >Name</th>
                    <th scope="col-2">email</th>
                    <th scope="col-1">Gender</th>
                    <th scope="col-2">Countery</th>
                    <th scope="col-2">Date-of-birth</th>
                    <th scope="col-2">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>

                {
                  records.map((v,i)=>{
                  return(
                    <>
                      <tr>
                        <th scope="row">{i+1}</th>
                        <td>{v.fname+" "+v.lname}</td>
                        <td>{v.email}</td>
                        <td>{v.gender}</td>
                        <td>{v.countery}</td>
                        <td>{v.dob}</td>
                        <td>
                            <Link to={`/admin/dashboard/nav/updateUser/${v._id}`} className='btn btn-success btn-sm me-2'>Edit</Link>
                            <button onClick={()=>deleteUser(v._id)} className='btn btn-danger btn-sm'>Delete</button>
                        </td>
                    </tr>
                    </>
                  )
                  })
                }                  

                </tbody>
          </table>
          </div>
    </div>
    
  )
}

export default UsersList