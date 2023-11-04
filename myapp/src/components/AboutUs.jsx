import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import "./User.css"
import Loader from './Loader';


function AboutUs() {

  const [userData, setData]=useState(null);
  const [loader,setLoaader]=useState(true);
  const [name, setName]=useState('');
  const [counter, setCounter]=useState(0);
  const fetchData= async()=>{
    
      const data = await axios.get(`https://fakestoreapi.com/products/${name}`);
      setData(data.data);
      setLoaader(false);
     
  }
  
  
  const increment =()=>{
    
    setCounter(counter+1);
  }
  
  const decrement =()=>{
    setCounter(counter-1);
  }


  useEffect(()=>{
    fetchData();
    // counter;
    setCounter(0);
  },[name])



  return (
    <>
<div className='mybd' >
    {loader?<Loader/>:    <div>
     <div className='text-center'>
     <label className='mt-4 '>SEARCH FOR PRODUCT INDEX NUMBER</label><br/>
<input className='w-50 myinput' type="text" placeholder='Please Enter Producut Index Number' value={name} onChange={(e)=>setName(e.target.value)}  />
     </div>
{((name>0)&&(name<20))?(
    <div className='d-flex w-100 pt-5 justify-content-center align-items-center'>

    <div className="card mt-3 flex-row myflex" style={{width: "40rem"}}>
    
    <div className="d-flex align-items-center justify-content-center p-3">
    <img src={userData?.image} className="card-img p-3" alt="..." style={{width: "12rem"}}/>
    </div> 
      <div className="card-body d-flex flex-column justify-content-center align-items-start" >
        <h4 className="card-title">{userData?.title}</h4>
        <h5 className="card-title">{userData?.category}</h5>
        <p className="card-text">{userData?.description}</p>
    
       <div className='d-flex  align-items-center justify-content-center gap-5'>
    
       <h5  class="card-title-sub m-0">{userData?.price} $</h5>
    
    <div className="d-flex  align-items-center justify-content-center ">
      <div>
    <button className='btn btn-primary c-btn' onClick={increment}><div className='c-text'>+</div></button>
      </div>
    <h3 className='ps-2 pe-2 m-0'>{counter}</h3>
    <div>
    <button className='btn btn-primary c-btn' onClick={decrement}><div className='c-text'>-</div></button>
    </div>
    </div>
    
       </div>
      </div>
     </div>
     </div>
) : (<Loader/>)}
 </div>}
    </div>


</>
  )
}

export default AboutUs

// useeffect taky jaisy hi compopnent load ho api ko call khudi jli jai

// api: automatic programable interface