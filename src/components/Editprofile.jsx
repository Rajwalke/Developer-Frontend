import axios from "axios";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { addUserDetails } from "../utils/userInfoSlice";
import Alert2 from "./Alert2";


const Editprofile = () => {
    const dispatch=useDispatch();
    const logginUserInfo=useSelector(Store=>Store.user);


    console.log("Loggedinuser",logginUserInfo)
    const [firstName,setfirstName]=useState(logginUserInfo?.firstName);
    const [lastName,setlastName]=useState(logginUserInfo?.lastName);
    const [gender,setGender]=useState(logginUserInfo?.gender);
    const [age,setAge]=useState(logginUserInfo?.age);
    const [skills,setskills]=useState(logginUserInfo?.skills);
    const [Github,setGithub]=useState(logginUserInfo?.Github);
    const [about,setabout]=useState(logginUserInfo?.about);
    const [photoURL,setphotoURL]=useState(logginUserInfo?.photoURL);
    const [AlertMessage,setAlertMessage]=useState(false);
    const [errorMessage,setErrorMessage]=useState(null);
    const editInfo=async()=>{
        try{
            const userInfoEdit=await axios.patch(
                BACKEND_LOCALHOST_URL+"/profile/edit",
                {
                    firstName,
                    lastName,
                    gender,
                    age,
                    skills,
                    about,
                    photoURL
                },
                {
                    withCredentials:true
                }
            )
            // console.log("edited userInfo",userInfoEdit);
            dispatch(addUserDetails(userInfoEdit?.data?.data));
            setAlertMessage(true);
            setTimeout(()=>{
              setAlertMessage(false);
            },2500)
            if(errorMessage!==null)setErrorMessage(null)
        }catch(err){
            setErrorMessage(err?.response?.data?.message)
            console.error(err);
        }
    }
    if(!logginUserInfo)return;
    return(
    <div>
      {
        AlertMessage && <Alert2/>
      }
        {

         logginUserInfo &&
        
          <div className="min-h-screen w-full bg-base-300 px-4 py-8 rounded-2xl">
        <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-xl p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center mt-2 mb-8 ">Edit Profile</h1>
          
          {/* Profile Image Section */}
          <div className="flex justify-center mb-8">
            <div className="ring-primary ring-offset-base-100 w-32 h-32 md:w-48 md:h-48 rounded-full ring ring-offset-2">
              <img
                src={photoURL}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
  
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
              <label className="input input-bordered flex items-center gap-2 min-h-16">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8 opacity-70"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
                </svg>
                <input type="text" className="grow text-lg md:text-2xl" value={firstName}
                placeholder="FirstName"
                onChange={(e)=>{
                    setfirstName(e.target.value)
                }}
                />
              </label>
  
              <label className="input input-bordered flex items-center gap-2 min-h-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8 opacity-70"
                >
                  <path d="M18 12h-2v-2c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h10v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM8 10h6v2H8v-2zm12 7h-2v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1H4v-4h2v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1h2v4z"/>
                  <circle cx="12" cy="5" r="2.5"/>
                </svg>
                <input type="text" className="grow text-lg md:text-2xl" placeholder="Last Name"
                value={lastName}
                onChange={(e)=>setlastName(e.target.value)}
                />
              </label>
            </div>
  
            {/* Gender and Age Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="input input-bordered flex items-center gap-2 min-h-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8 opacity-70"
                >
                  <path d="M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                </svg>
                <select 
                value={gender} 
                onChange={(e)=>setGender(e.target.value)}
                className="grow bg-transparent text-lg md:text-2xl focus:outline-none [&>option]:bg-base-100 [&>option]:text-current">
                  
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
  
              <label className="input input-bordered flex items-center gap-2 min-h-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8 opacity-70"
                >
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </svg>
                <input 
                  type="number" 
                  value={age}
                  onChange={(e)=>setAge(e.target.value)}
                  className="grow text-lg md:text-2xl"
                  placeholder="Age"
                  min="0"
                  max="150"
                />
              </label>
            </div>
  
            {/* Skills and Github Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="input input-bordered flex items-center gap-2 min-h-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8 opacity-70"
                >
                  <path d="M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                </svg>
                <select 
                value={skills}
                onChange={(e)=>setskills(e.target.value)}
                className="grow bg-transparent text-lg md:text-2xl focus:outline-none [&>option]:bg-base-100 [&>option]:text-current">
                  
                  <option value="FullStack Develope">FullStack Developer</option>
                  <option value="Javascript Developer">Javascript Developer</option>
                  <option value="Angular Developer">Angular Developer</option>
                </select>
              </div>
  
              <label className="input input-bordered flex items-center gap-2 min-h-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8 opacity-70"
                >
                  <path d="M18 12h-2v-2c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h10v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM8 10h6v2H8v-2zm12 7h-2v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1H4v-4h2v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1h2v4z"/>
                  <circle cx="12" cy="5" r="2.5"/>
                </svg>
                <input type="text" value={Github}
                onChange={(e)=>setGithub(e.target.value)}
                className="grow text-lg md:text-2xl" placeholder="Github Link" />
              </label>
            </div>
  
            {/* About Field */}
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="text-lg md:text-2xl font-medium">About</span>
                </div>
                <textarea 
                value={about}
                onChange={(e)=>setabout(e.target.value)}
                  className="textarea textarea-bordered w-full min-h-24 text-lg md:text-2xl" 
                  placeholder="About"
                ></textarea>
              </label>
            </div>
            <h1 className="text-red-500 text-xl md:text-2xl">{errorMessage}</h1>
            {/* Submit Button */}
            <div className="flex justify-center">
              <p className="btn btn-primary text-lg md:text-xl font-semibold px-8"
              onClick={editInfo}
              >
                Edit Profile
              </p>
            </div>
          </form>
        </div>
          </div>
        }
 </div>
    )
    
  };
  
  export default Editprofile;