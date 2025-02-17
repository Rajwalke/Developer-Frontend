import { useEffect, useState } from "react";
import AlertMessage from "./AlertMessage";

const Feed=()=>{
    const [display,setDisplay]=useState(true);
    useEffect(()=>{
        const timer = setTimeout(() => {
            setDisplay(false);
        }, 2500);

        return () => clearTimeout(timer);

    },[])
    
    return(
        <>
        {display && <AlertMessage/>}
            
            <div className=" w-6/6 shrink-0 min-h-screen bg-base-300 rounded-lg shadow-sm p-4 ">
                <h1>Hello</h1>
            </div>
        </>
    )
}
export default Feed;