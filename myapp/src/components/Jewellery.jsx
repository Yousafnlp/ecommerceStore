import React from 'react'
import Loader from './Loader'
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import "./User.css"
import { Link } from 'react-router-dom';

function Jewellery() {



    const [loader, setLoaader] = useState(true);
    let [data, setData] = useState([])
    let [orignalData, setOrignalData] = useState([])

    let dispatch = useDispatch()



    const fetchData = async () => {


        let data = await axios.get(`http://localhost:6001/get_Products`);
        
        setData(data.data);
        setOrignalData(data.data);
        const filteredData = orignalData.filter(x => x.category === "jewelery");
        setData(filteredData);
        setLoaader(false);
    }

    useEffect(() => {
        fetchData();
    }, [data])


    return (
        <div>

            <>

                {(loader) ? (<Loader />) : (
                    <>
                        {/* <BreadCrum /> */}


                        <div className="d-flex backg flex-wrap justify-content-center gap-3 pt-5">




                            <div class="container-fluid d-flex flex-wrap  justify-content-center ">
                                {data.map((item) => {
                                    return (

                                        <>
                                        <div class="card" style={{ width: "18rem", margin: "10px" }}>
                                          <div className="text-center">
                                            <div className="d-flex align-items-center justify-content-center " style={{ height: "18rem" }}>
                                              <img src={item?.image} class="card-img-top" alt="..." style={{ width: "40%" }}/>
                                            </div>
                                            <div className="card-body pt-0 ">
                                              <h4 className="card-title">{item?.title.slice(0, 20).toUpperCase()}</h4>
                                              <h5 className="card-title-sub">{item?.category}</h5>
                                              <p className="card-text">{item?.description.slice(0, 90)}</p>
                                              <h5 className="card-title-sub">Price: {item?.price} $</h5>
                                              <Link to={`/products/${item.id}`} className="btn btn-primary bc w-100 mt-2">Product Details</Link>
                                              <button className="btn btn-primary bc w-100 mt-2" onClick={()=>{dispatch(addToCart(item))}}>Add to Cart</button>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    )
                                })}

                            </div>

                        </div>
                       </>
                )}

            </>

        </div>
    )
}

export default Jewellery



