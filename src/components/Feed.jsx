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
        
        <div className="flex w-full h-full mx-1 justify-center items-center mt-8">
            <div className="bg-red-500 w-1/6">
                <h1>Hello</h1>
            </div>
            <div className="bg-yellow-500 w-5/6 ">
                <h1>Hello</h1>
            </div>
        </div>
        </>
    )
}
export default Feed;