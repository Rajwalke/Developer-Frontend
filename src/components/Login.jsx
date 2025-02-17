import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../utils/userInfoSlice";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [email,setEmail]=useState("akshay@gmail.com");
    const [password,setPassword]=useState("Akshay@2004");
    const [errorMessage,setErrorMessage]=useState(null);
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const handleLogin=async()=>{
        try{
            const responce=await axios.post(
                BACKEND_LOCALHOST_URL+"/login",
                {
                    email,
                    password
                },
                {
                    withCredentials:true,
                }
            )
            dispatch(addUserDetails(responce?.data?.userInfo));
            Navigate("/feed")
            // console.log("userinfo",responce?.data?.userInfo)
        }catch(err){
            setErrorMessage(err?.response?.data?.message || "Something went Wrong");
            // console.error("check loginpage Error",err);
        }
    }


    return(
    <div className="flex justify-center">
        
        <div className="card  bg-base-100 w-4/12 shadow-xl items-center mt-20">
        
            <div className="card-body r ">
            <h1 className="text-center text-3xl font-bold p-5">Login Page</h1>
            <label className="input input-bordered flex justify-between items-center gap-3 my-2 text-2xl p-8 ">
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-8 w-8 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow " value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label className="input input-bordered flex items-center gap-3 my-2 text-2xl p-8 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-8 w-8 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd" />
                  </svg>
                  <input type="password" className="grow"value={password} placeholder="*****" onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <p className="text-red-500 font-semibold text-2xl">{errorMessage}</p>
             <div className="my-2">
                <p className="text-xl">Create account ?<span className="text-primary ml-2 font-semibold cursor-pointer" 
                onClick={()=>{
                    Navigate("/signup")
                }
                }>Signup Here</span></p>
             </div>
             
             <div className="card-actions justify-center">
               <button className="btn btn-primary text-2xl mt-1" onClick={handleLogin}>Login</button>
             </div>
             
        </div>
    </div>
                
    </div>
    
    )
}

export default Login;