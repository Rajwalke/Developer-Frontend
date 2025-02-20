import axios from "axios";
import PendingRequestCard from "./PendingRequestCard";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllRequest } from "../utils/connectionSlice";
import { Store } from "lucide-react";

const Pendingrequest=()=>{
    const dispatch=useDispatch();
    const userPendingRequestData=useSelector(store=>store.connection.pendingRequest);
    const allPendingRequestData=async()=>{
        const allRequest=await axios.get(
            BACKEND_LOCALHOST_URL+"/user/pendingrequest",
            {
                withCredentials:true
            }
        )
        dispatch(addAllRequest(allRequest?.data?.allPendingRequest))
        console.log("All pending connection request",allRequest);
    }
    useEffect(()=>{
        allPendingRequestData();
    },[])
    console.log("data from redux",userPendingRequestData[0])
    if(!userPendingRequestData)return ;
    return(
        <>
        {
        userPendingRequestData &&

        <div className="min-h-screen w-full bg-base-300 px-4 py-8 rounded-2xl">
            <h1 className="text-2xl md:text-3xl font-bold text-start mt-2 mb-8 ">Pending connection request ({userPendingRequestData.length})</h1>  
            
            
            {
                userPendingRequestData.map((data,index)=>(
                   
                    <PendingRequestCard key={data?._id} senderData={data} />
                ))
            }
            
            {/* <PendingRequestCard senderData={userPendingRequestData[0]} />
            <PendingRequestCard senderData={userPendingRequestData[1]} /> */}
        </div>
}
    </>
    )
}
export default Pendingrequest;