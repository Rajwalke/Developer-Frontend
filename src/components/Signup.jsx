import axios from "axios";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../utils/userInfoSlice";
import { useNavigate } from "react-router-dom";

const Signup=()=>{
  const Nevigate=useNavigate();
  const dispatch=useDispatch();
  const [errorMessage,setErrorMessage]=useState(null);

  const firstName=useRef();
  const lastName=useRef();
  const email=useRef();
  const password=useRef();
  const gender=useRef();
  const age=useRef();
  const photoURL=useRef();
  const handleSignup=async()=>{
    try{
      const responce=await axios.post(
        BACKEND_LOCALHOST_URL+"/signup",

        {
        firstName:firstName.current.value,
        lastName:lastName.current.value,
        email:email.current.value,
        password:password.current.value,
        gender:gender.current.value,
        age:age.current.value,
        photURL:photoURL.current.value
        },
        {
          withCredentials:true
        }
      )
      console.log("Responce from signup",responce);
      dispatch(addUserDetails(responce?.data?.userInfo));
      Nevigate("/feed");
      console.log(
      // firstName.current.value,
      //   lastName.current.value,
      //   email.current.value,
      //   password.current.value,
      //   gender.current.value,
      //   age.current.value,
      )
    }catch(err){
      setErrorMessage(err.response.data.message  || "Something went Wrong");
      console.error(err);
    }

  }
    return (
    <div className="flex justify-center items-center mt-28 "> 
    <div className="card bg-base-100 shadow-xl flex justify-center items-center w-4/12">
        <div className="card-body ">
            <div className="">
                <h1 className="text-3xl font-bold text-center mb-5">Signup</h1>
                <label className="input input-bordered flex items-center gap-2 my-3 text-2xl p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 opacity-70"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
                  </svg>
                  <input type="text" className="grow" ref={firstName} placeholder="First Name" />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-3 text-2xl p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 opacity-70"
                  >
                    <path d="M18 12h-2v-2c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h10v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM8 10h6v2H8v-2zm12 7h-2v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1H4v-4h2v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1h2v4z"/>
                    <circle cx="12" cy="5" r="2.5"/>
                  </svg>
                  <input type="text" ref={lastName} className="grow" placeholder="Last Name" />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-3 text-2xl p-8">
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
                  <input type="text" ref={email} className="grow" placeholder="Email" />
                </label>
                
                <label className="input input-bordered flex items-center gap-2 my-3 text-2xl p-8">
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
                  <input type="password" ref={password} className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-3 text-2xl p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 opacity-70"
                    >
                      <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                    </svg>
                    <input 
                      type="number" 
                      ref={age}
                      className="grow" 
                      placeholder="Age"
                      min="0"
                      max="150"
                    />
                </label>
                {/* <label className="input input-bordered flex items-center gap-2 my-3 text-2xl p-8"> */}
                
                <div className="relative flex items-center w-full input input-bordered my-3 p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 opacity-70"
                  >
                    <path d="M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                  </svg>
                  <select ref={gender} className="grow bg-transparent text-2xl focus:outline-none [&>option]:bg-base-100 [&>option]:text-current">
                    <option disabled selected className="bg-base-100">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                {/* </label> */}
                
                <span className="text-xl">Upload Profile-Photo</span>
                <label className="input input-bordered flex items-center gap-2 text-2xl p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 opacity-70"
                    >
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" 
                        clipRule="evenodd"
                      />
                    </svg>
                    <input type="file" ref={photoURL} />
                </label>       
          </div>
          <p className="text-2xl font-semibold text-red-500">{errorMessage}</p>
   
    <div className="card-actions justify-center" onClick={handleSignup}>
      <button className="btn btn-primary text-2xl font-semibold">Signup</button>
    </div>
  </div>
</div>
</div>
    )
}
export default Signup;
