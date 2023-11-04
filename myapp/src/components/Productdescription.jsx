import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "./User.css"
import Loader from './Loader';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { addToCart_Detailed, removeFromCart } from "../redux/CartSlice";


function Productdescription() {

  const { id } = useParams();
   
  const [data, setData] = useState()
  const [loader, setLoaader] = useState(true);
  const [counter, setCounter] = useState(1);


  let dispatch = useDispatch()


  const fetchData = async () => {


    const response = await axios.get(`http://localhost:6001/SingleProduct/${id}`);
    setData(response.data);

    // toast.success("Product fetched Successfuly")
    setLoaader(false);

  }



  const increment = () => {

    setCounter(counter + 1);
  }

  const decrement = () => {
    if(counter > 1){
    setCounter(counter - 1);
  }
}

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(data)

  return (
    <>
      {(loader) ? (<Loader />) : (
        < >

        <div className=" container-fluid d-flex  align-items-center flex-column pt-5">
          <h3 className="text-center pb-2 pt-5"> {data?.title.toUpperCase()}</h3>
          <div className='d-flex w-100  pt-2 justify-content-center align-items-center row'>
            <div style={{border: "solid #0d6efd 3px"}} className="card  mt-3 flex-row myflex col-lg-8 col-md-10 col-sm-12" >

              <div className="d-flex align-items-center justify-content-center p-3">
                <img src={data?.image} className="card-img p-4"  alt="..." style={{ width: "17rem" }} />
              </div>
              <div className="card-body d-flex flex-column justify-content-center p-lg-4 p-md-2 p-1 align-items-start" >
                <h4 className="card-title">{data?.title.toUpperCase()}</h4>
                <h5 className="card-title">{data?.category}</h5>
                <p className="card-text">{data?.description}</p>

                <div className="d-flex mb-2  align-items-center justify-content-center ">
                <h5 class="card-title-sub m-0 me-5">Price: {data?.price*counter} $</h5>
                  <div>
                    <button className='btn btn-primary c-btn' onClick={increment}><div >+</div></button>
                  </div>
                  <h3 className='ps-2 pe-2 m-0'>{counter}</h3>
                  <div>
                    <button className='btn btn-primary c-btn' onClick={decrement}><div >-</div></button>
                  </div>
                </div>
                <div className="d-flex justify-content-center flex-column flex-lg-row w-100 align-items-center">
                <button className="btn btn-primary w-100 me-lg-2 ms-0 ms-md-0 mt-2" onClick={() => { dispatch(addToCart_Detailed({ data, count: counter })); }}>Add to Cart</button>

                <button className="btn btn-primary w-100 ms-lg-2 ms-md-0 ms-0 mt-2" onClick={()=>{dispatch(removeFromCart(data))}}>Remove from Cart</button>
                </div>

              </div>
            </div>
          </div>
          </div>
        </>
      )}
    </>
  )
}

export default Productdescription