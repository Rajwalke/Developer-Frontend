import axios from "axios";
import AllAcceptRequestCard from "./AllAcceptRequestcard";
import { useEffect } from "react";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { allAcceptRequest } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const AllAcceptrequest=()=>{2
    const dispatch=useDispatch();
    const Allfriends=useSelector(store=>store.connection.acceptRequest)
    const allAcceptedrequestDev=async()=>{
        try{
            const AllFriendDev=await axios.get(
                BACKEND_LOCALHOST_URL+"/user/connection/accepted",
                {
                    withCredentials:true
                }
            )
            dispatch(allAcceptRequest(AllFriendDev?.data?.data))
            console.log("All Friends Dev",AllFriendDev);

        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        allAcceptedrequestDev();
    },[]);

    console.log("This is from accept all requesr",Allfriends);
    return(
        <div className="min-h-screen w-full bg-base-300 px-4 py-8 rounded-2xl">
            <h1 className="text-2xl md:text-3xl font-bold text-start mt-2 mb-8 ">All Friend Devs</h1> 
            {
                Allfriends &&
                
                Allfriends.map((friendData)=>(
                   <Link key={friendData?._id} to={"/profile/friend/"+friendData?._id}><AllAcceptRequestCard  friendData={friendData} /> </Link>
                )) 
            }
        </div>
    )
}

export default AllAcceptrequest;