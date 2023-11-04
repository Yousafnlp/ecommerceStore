import axios from "axios";
import { useState, useEffect } from "react"
import "./User.css"
import { Link } from "react-router-dom";
import Loader from './Loader';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import BreadCrum from "./BreadCrum";

function User() {
    const [data, setData]=useState([])
  const [loader,setLoaader]=useState(true);


  let dispatch = useDispatch();

  
    const fetchData= async()=>{
      let data = await axios.get(`http://localhost:6001/get_Products`);
      setData(data.data);
      toast.success("Products fetched Successfuly")
     setLoaader(false);
  } 
  
  
  

    useEffect(()=>{
      fetchData();

    },[])

    return(<>

  { loader? (<Loader/>) :  
  
  (<>
    <BreadCrum/>
    <div className="d-flex backg flex-wrap justify-content-center gap-3 pt-5">
  
    {data.map((item)=>{
    return(
      <div class="card" style={{width: "18rem"}}>
     <div className="text-center">
    <div className="d-flex align-items-center justify-content-center " style={{height: "18rem"}}>
    <img src={item?.image} class="card-img-top w-50" alt="..."/>
    </div>
      <div class="card-body pt-0">
        <h4 class="card-title">{item?.title.slice(0,20)}</h4>
        <h5 class="card-title-sub">{item?.category}</h5>
        <p class="card-text">{item?.description.slice(0,90)}</p>
        <h5  class="card-title-sub">{item?.price} $</h5>
          <Link to={`/products/${item.id}`} class="btn btn-primary w-100 mt-2">Product Details</Link>
          <button className="btn btn-primary w-100 mt-2" onClick={()=>{dispatch(addToCart(item))}}>Add to Cart</button>

      </div>
     </div>
    </div>
    )
    })}
    </div>
    </>)
    }

</>
)
}

export default User
