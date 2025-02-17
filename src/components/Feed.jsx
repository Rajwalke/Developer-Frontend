import { useEffect, useState } from "react";
import AlertMessage from "./AlertMessage";
import Feedcard from "./FeedCard";
import axios from "axios";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeedData } from "../utils/feedSlice";

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
    
    return(
        <>
        {display && <AlertMessage/>}
        {UserFeeddata &&
            <Feedcard userData={UserFeeddata[0]}/>
        }
        </>
    )
}
export default Feed;