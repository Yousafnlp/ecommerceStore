import Loader from './Loader'
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiperimgstyles.css";
import axios from "axios";
import "./User.css"
import { Link } from "react-router-dom";

import { Autoplay, EffectCoverflow } from "swiper";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
function Home() {
  const [loader, setLoaader] = useState(true);
  let [data, setData] = useState([])
  let [orignalData, setOrignalData] = useState([])




  const fetchData = async () => {


    let data = await axios.get(`http://localhost:6001/get_Products`);
    setData(data.data);
    setOrignalData(data.data);
    setLoaader(false);
  }

  useEffect(() => {
    fetchData();
  }, [])


  const filterMens = () => {
    const filteredData = orignalData.filter(x => x.category === "men's clothing");
    setData(filteredData);
  }


  const electronics = () => {
    const filteredData = orignalData.filter(x => x.category === "electronics");
    setData(filteredData);
  }


  const jewelery = () => {
    const filteredData = orignalData.filter(x => x.category === "jewelery");
    setData(filteredData);
  }



  const filterWomens = () => {
    const filteredData = orignalData.filter(x => x.category === "women's clothing");
    setData(filteredData);
  }

  const resetData = () => {
    const filteredData = orignalData;
    setData(filteredData);
  }




  let dispatch = useDispatch()
  
  
  return (

    <>

      {(loader) ? (<Loader />) : (
        <>

          <div className="Swiper-sec-body pt-3 pb-3">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[Autoplay, EffectCoverflow]}
              className="mySwiper swipersec"
            >

              {data.map((item) => {
                return (
                  <>
                    <SwiperSlide className="swipersec-slide">
                      <img src={item.image} alt="" />
                    </SwiperSlide>
                  </>
                )
              })}
            </Swiper>
          </div>


          <div className="d-flex backg flex-wrap justify-content-center gap-3 pt-5">


            <div className="container">

              <div className=" text-center mt-3 mb-5">

                <h3 >FILTER PRODUCTS</h3>

                <button onClick={filterMens} className='btn btn-primary  m-2' style={{fontSize: '14px', letterSpacing: '1px'}}>MEN'S CLOTHING</button>
                <button onClick={electronics} className='btn btn-primary  m-2' style={{fontSize: '14px', letterSpacing: '1px'}}>ELECTRONICS</button>
                <button onClick={jewelery} className='btn btn-primary  m-2' style={{fontSize: '14px', letterSpacing: '1px'}}>JEWELERY</button>
                <button onClick={filterWomens} className='btn btn-primary  m-2' style={{fontSize: '14px', letterSpacing: '1px'}}>WOMEN'S CLOTHING</button>
                <button onClick={resetData} className='btn btn-primary  m-2' style={{fontSize: '14px', letterSpacing: '1px'}}>RESET DATA</button>




              </div>
            </div>

<div class="container-fluid d-flex flex-wrap  justify-content-center ">
            {data.map((item) => {
              return (
// add({5,4})
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
  )
}

export default Home