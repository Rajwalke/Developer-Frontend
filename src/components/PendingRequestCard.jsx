import axios from "axios";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/connectionSlice";

const PendingRequestCard = ({senderData,index}) => {
    // const {firstName,lastName,photoURL}=senderData?.formUserId;
    const dispatch=useDispatch();
    console.log("This is from PendirequestCard ",senderData);
    const LogginuserId=senderData?.toUserId;
    const requestAccept=async()=>{
     try{
      const accept=await axios.post(
        BACKEND_LOCALHOST_URL+"/request/review/accepted/" + senderData?._id,
        {
          LogginuserId
        },
        {
          withCredentials:true
        }
      );
      console.log("Request Accept",accept);
      dispatch(removeRequest(index));
     }catch(err){
      console.error(err);
     }
    }

    const requestReject=async()=>{
        try{
          const reject=await axios.post(
            BACKEND_LOCALHOST_URL+"/request/review/rejected/" +senderData?._id,
            {
              LogginuserId
            },
            {
              withCredentials:true
  
            }
          )
          console.log("Request Rejected",reject);
          dispatch(removeRequest(index));
        }catch(err){
          console.error(err);
        }
    }

    if(!senderData)return ;
    return (
        <>
    {
        senderData &&

      <div className="flex flex-row justify-between items-center bg-base-100 rounded-2xl px-4 py-3 w-full my-3 shadow-lg">
        {/* Left section with profile */}
        <div className="flex items-center space-x-5 overflow-hidden">
          {/* Profile image - smaller on mobile */}
          <div className="avatar online">
            <div className="w-12 bg-slate-50 xs:w-12 sm:w-20 rounded-full">
              <img src={senderData?.formUserId?.photoURL}  alt="Profile" />
            </div>
          </div>
          
          {/* Name and status - hidden on very small screens */}
          <div className=" xs:block">
            <p className="text-sm sm:text-2xl font-semibold truncate">{senderData?.formUserId?.firstName} {senderData?.formUserId?.lastName}</p>
            <p className="text-xs sm:text-xl truncate opacity-75">Interest in you</p>
          </div>
        </div>
  
        {/* Right section with buttons */}
        <div className="flex gap-2">
          <button className="btn btn-success btn-sm sm:btn-lg shadow-md"
          onClick={requestAccept}
          >
            Accept
          </button>
          <button className="btn btn-neutral btn-sm sm:btn-lg shadow-md"
          onClick={requestReject}
          >
            Ignore
          </button>
        </div>
      </div>
        }
    </>
    );
  };
  
  export default PendingRequestCard;