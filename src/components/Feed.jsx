import { useEffect, useState } from "react";
import AlertMessage from "./AlertMessage";
import Feedcard from "./FeedCard";
import axios from "axios";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeedData } from "../utils/feedSlice";
import ShimmerUI from "./ShimmerUI";

const Feed=()=>{
    const dispatch=useDispatch();
    const [display,setDisplay]=useState(true);
    const UserFeeddata=useSelector(store=>store.feed);

    const feed=async()=>{
        try{
            const UserFeed=await axios.get(
                BACKEND_LOCALHOST_URL+"/user/feed",
                {
                    withCredentials:true
                }
            )
            dispatch(addFeedData(UserFeed?.data?.userFeedData));
            console.log("USer Feed is here",UserFeed.data.userFeedData);
        }catch(err){
            console.error(err);
        }
    }


    useEffect(()=>{
        feed();
        const timer = setTimeout(() => {
            setDisplay(false);
        }, 2500);
        return () => clearTimeout(timer)

        
    },[]);

    if(!UserFeeddata || UserFeeddata==null){
        return <ShimmerUI/>
    }
    return(
        <>
        {display && <AlertMessage/>}
        <div className="flex flex-wrap">
        {UserFeeddata &&
                // UserFeeddata.map((data)=>(
                //     <Feedcard key={data?._id} userData={data}/>
                // ))
                <Feedcard  userData={UserFeeddata[0]}/>
        }
         </div>
        </>
    )
}
export default Feed;