import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { addUserDetails } from "../utils/userInfoSlice";
import { useEffect } from "react";

const Body = () => {
    const Nevigate=useNavigate();
    const user = useSelector(store => store.user);
    const dispatch=useDispatch();
    const fetchLoginUserData=async()=>{
        try{
            if(user)return;
            const userData=await axios.get(
                BACKEND_LOCALHOST_URL+"/profile/view",
                {
                    withCredentials:true
                }
            )
            console.log("Profile user",userData);
            dispatch(addUserDetails(userData?.data?.userProfile));
        }
        catch(err){
            console.error(err.status);
            if(err.status===401){
                Nevigate("/login");
            }
            // create the error page here 
            console.error(err);
            // redirect to to someting went wrong error 
        }
    }

    useEffect(()=>{
     fetchLoginUserData();
        
    },[]);



    return (
        <div className="mx-1 px-2 py-6">
            <Header />
            <div className="flex gap-1 my-6">
                {user && <Sidebar />}
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
            {user && <Footer />}
        </div>
    );
};

export default Body;
