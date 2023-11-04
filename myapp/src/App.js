import Navbar from "./components/Navbar";
import 'swiper/css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom"
import ContactUs from "./components/ContactUs";
import Productdescription from "./components/Productdescription";
import UpdateUser from "./components/UpdateUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/Cart";
import Jewellery from "./components/Jewellery";
import Mensclothing from "./components/Mensclothing";
import Womensclothing from "./components/Womensclothing";
import Electronics from "./components/Electronics";
import BreadCrum from "./components/BreadCrum";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LoginProtected from "./components/LoginProtected";
import Checkout from "./components/Checkout";
import AdminNav from "./components/AdminNav";
import ProtectedAdmin from "./components/ProtectedAdmin";
import PreProtectedAdmin from "./components/PreProtectedAdmin";

import BacktoHome from "./components/BacktoHome";
import UsersList from "./components/UsersList";
import BacktoDashboard from "./components/BacktoDashboard";
import Welcome from "./components/Welcome";
import Nav from "./components/Nav";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Nav/>
      <Routes>



        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<BreadCrum />}>
          <Route path="jewellery" element={<Jewellery />} />
          <Route index element={<Jewellery />} />
          <Route path="mensclothing" element={<Mensclothing />} />
          <Route path="womensclothing" element={<Womensclothing />} />
          <Route path="electronics" element={<Electronics />} />
        </Route>

        <Route path="/products/:id" element={<Productdescription />} />


        <Route path="/user" element={<LoginProtected />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<ContactUs />} />
        </Route>


        <Route path="/shopping" element={<ProtectedRoutes />} >
          <Route index element={<Cart />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route  >

        <Route path="/admin" element={<PreProtectedAdmin />}>

          <Route index element={<BacktoHome />} />
          <Route path="dashboard" element={<ProtectedAdmin />}>
            
          <Route index element={<BacktoDashboard />}/>
            <Route path="nav" element={<AdminNav />}>
            <Route index element={<Welcome/>}/>
            <Route path="allUsers" element={<UsersList />} />
              <Route path="updateUser/:id" element={<UpdateUser />} />
              </Route>

          </Route>
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />



    </>
  );
}

export default App;
