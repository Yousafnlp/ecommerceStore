import React, { useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify'
import { Link, Outlet, useNavigate } from 'react-router-dom'
function Login() {







let navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })


    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const { email, password } = formData;

    const submitLogin = async (e) => {
        e.preventDefault();
        console.log("form data", formData);

        
        if (!email || !password) {
            toast.error("fill the complete form first")
        }



        let result = await fetch('http://localhost:6001/login', {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })

         result = await result.json();

        console.log("final result__________", result)

        // console.log(email,password)

        if (result.success === false) {
            
            if(result.message === "Email or Password is Invalid or Missing"){
            toast.error("Fill the Complete Form")
            }

            else if(result.message === "No such record is available, please register first"){
                toast.error("Register First")
                }

            else if(result.message === "invalid password"){
                toast.error("invalid password")
                }
            }
            
         else if(result.success === true){
           const  token = result.user;
                localStorage.setItem('token', JSON.stringify({token}))
                toast.success("loged In Successfully")
                navigate("/")
                

        }

        

        setFormData({
            email: "",
            password: "",
        })


    }


    return (
        <div className='mybg pt-5'>


            <form onSubmit={submitLogin}>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-9 col-sm-12">
                            <div className="card-group mb-0">
                                <div className="card p-3">
                                    <div className="card-body">
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>

                                        <div className="input-group mb-3">
                                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                            <input type="text" className="form-control" name='email' value={email} onChange={onChange} placeholder="email" />
                                        </div>
                                        <div className="input-group mb-4">
                                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                            <input type="password" className="form-control" name='password' value={password} onChange={onChange} placeholder="Password" />
                                        </div>
                                 
                                                <button type="submit" className="btn btn-primary px-4">Login</button>
                                            </div>
                                            <div className="card text-white bg-primary py-5 mt-3 d-md-down-none" >
                                    <div className="card-body text-center d-flex justify-content-center align-items-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>If you have not registerd, sign up now!</p>
                                            </div>
                                    </div>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
          
                             
        </div>
    )
}

export default Login
