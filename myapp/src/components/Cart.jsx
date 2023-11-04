import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/CartSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import "./User.css"
import { Link } from 'react-router-dom';


function Cart() {


  let dispatch = useDispatch();
  let cart = useSelector(state => state.cartReducer.cart)
  let price = useSelector(state => state.cartReducer.price)


console.log(cart)


  // Function to send the cart data to the backend


  return (
    <div className=''>


      <h2 className='text-center pt-5'>YOUR SHOPPING CART</h2>

      <div class="container d-flex flex-wrap  justify-content-center ">
        {cart.map((item, index) => {
          return (
         
            <>
              <div class="card " style={{ width: "100%",border: "solid #0d6efd 3px", margin: "15px" }}>
                <div className="text-center flex-sm-column flex-column  flex-md-row flex-lg-row d-flex align-items-center justify-content-center ">
                  <div  className="text-center ms-3 d-flex align-items-center justify-content-center " style={{ height: "15rem" }}>
                  <div className="d-flex p-4 cartShirt"  >
                    <img src={item?.image} class="text-center cart-img"  style={{ height: "9rem" }} alt="..." />
                  </div>
                  </div>
                  <div className="card-body  pt-0">
                    <h4 className="card-title">Item Titile: {item?.title}</h4>
                    <h5 className="card-title-sub">Item Category: {item?.category}</h5>
                    <h5 className="card-title-sub">Total Price: {item?.price} $</h5>
                    <h3 className="card-title-sub">Quantity: {item?.quantity}</h3>
                  </div>
                  {/* <div className='cartbtn'> */}
                  <button className="btn btn-primary cartbtn  bc  m-5 mt-2" onClick={() => { dispatch(removeFromCart(item)) }}>REMOVE FROM CAET</button>
               
                </div>

              </div>
            </>
          )
        })}

        <div className="checkOutBtn mt-3 w-100">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <h3>Total Bill: {price}$</h3>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12  col-12">
              
        <Link className="btn btn-primary bc w-100 m-2"  to='checkout'>CHECK OUT NOW</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
