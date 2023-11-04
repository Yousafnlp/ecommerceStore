import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import './User.css'

function Checkout() {

  let cart = useSelector(state => state.cartReducer.cart)
  let price = useSelector(state => state.cartReducer.price)

  
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
  })


  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }



  // const navigate = useNavigate();

  const [err, seterr] = useState(false)


  const onSubmit = async (e) => {
    try {

      e.preventDefault();
      console.log("form data", formData);

      if (!fname || !lname || !email || !gender ) {
        seterr(true)
        toast.error("fill the complete form first")
        return false;
      }

      
      const result = await fetch('http://localhost:6001/postOrder', {
        method: "post",
        body: JSON.stringify({fname, lname, gender, email, cart}), // Remove the extra array
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (result.ok) {
        const response = await result.json();
        if (response.message === 'Order saved successfully') {
          toast.success("Ordered successfully");
        } 
      }

      setFormData({
        fname: "",
        lname: "",
        email: "",
        gender: "",
      })

      // navigate('/tha')


    } catch (error) {
      console.error('Error submitting the order', error);
      toast.error("An error occurred while submitting the order");
    }
  }

  const { fname, lname, email, gender, } = formData;



  return (
    <div>
<>



<div className="backg">
        <div className="container-fluid">
          <h3 className='text-center pt-5'>Checkout</h3>

          <div class="container  my-w">
            <form onSubmit={onSubmit}>

              <label className='m-2 form-label'>First Name:</label>
              <input type='text' placeholder='Enter Your First Name' className='p-1 form-control ' name='fname' value={fname} onChange={onChange} /><br />

              <label className='m-2 form-label'>Last Name:</label>
              <input type='text' placeholder='Enter Your Last Name' className='p-1 form-control' name='lname' value={lname} onChange={onChange} /><br />

              <label className='m-2 form-label'>Email:</label>
              <input type='email' placeholder='Enter Your First Name' className='p-1 form-control' name='email' value={email} onChange={onChange} /><br />

              <label className='m-2 form-label' >Gender</label>
              <input type="radio" id='male' name='gender' value="male" onChange={onChange} />
              <label className='m-1' for='male'>Male</label>
              <input type="radio" id='female' name='gender' value="female" onChange={onChange} />
              <label className='m-1' for='female'>Female</label><br />


              <div class="d-flex flex-wrap  justify-content-center ">

                <h4 className='mt-4 mb-3'>Details of order</h4>
        {cart.map((item, index) => {
          return (

            <>
              <div class="card" style={{ width: "100%", margin: "15px" }}>
                <div className="text-center d-flex align-items-center justify-content-center ">
               
                  <div className="card-body  p-4">
                    <h6 style={{fontSize: "16px"}} className="card-title">Item Titile: {item?.title}</h6>
                    <h6 className="card-title-sub">Quantity: {item?.quantity}</h6>
                    <h6 className="card-title-sub">Total Price: {item?.price} $</h6>
                  </div>
                 </div>

              </div>
            </>
          )
        })}

        <div className="mt-3 mb-5 w-100">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <h3 className='m-0'>Total Bill: {price}</h3>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12  col-12">
            <button type='submit' className=' btn btn-success bc w-100'>Submit</button>

            </div>
          </div>
        </div>

      </div>


            </form>

          </div>
        </div>
      </div>

</>

      
    </div>
  )
}

export default Checkout
