import axios from "axios";
import { useParams } from "react-router-dom";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriendInfo } from "../utils/connectionSlice";

const FriendProfile=()=>{
    const dispatch=useDispatch();
    const friendData=useSelector(store=>store.connection.firendInfo);
    const friendreqId=useParams();
    const {reqId}=friendreqId;
    // console.log("Friend id is ",reqId);
    const friemdInfo=async()=>{
        try{
            
        const data=await axios.get(
            BACKEND_LOCALHOST_URL+"/profile/friend/"+reqId,
            {
                withCredentials:true
            }
        )
        console.log("FridnData is Here",data?.data?.friendProfile);
        dispatch(addFriendInfo(data?.data?.friendProfile));
        }
        catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        friemdInfo();
    },[]);
    console.log(friendData);
    

    return(
        <div>
            <h1>{friendData?.firstName}</h1>
            <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img src={friendData?.photoURL} />
                </div>
            </div>
        </div>
    )
}
export default FriendProfile;