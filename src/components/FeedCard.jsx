/* eslint-disable react/prop-types */
import axios from "axios"
import { BACKEND_LOCALHOST_URL } from "../utils/constant"
import { useDispatch } from "react-redux";
import { removeFeedData } from "../utils/feedSlice";

const Feedcard=({userData})=>{
    const {_id,firstName,gender,lastName, photoURL,age,about}=userData;
    const disptach=useDispatch(store=>store.feed)
    const IgnoreCurrentCard=async()=>{
      try{
        const ignoreRequest=await axios.post(
          BACKEND_LOCALHOST_URL+"/request/send/ignored/"+_id,
          null,
          {
            withCredentials:true
          }
        );
        disptach(removeFeedData());
        console.log(ignoreRequest);
      }catch(err){
        console.error(err);
      }
      
    }
    
    const InterestedCurrentCrad=async()=>{
      try{
        const InterestedRequest=await axios.post(
          BACKEND_LOCALHOST_URL+"/request/send/interested/"+_id,
          null,
          {
            withCredentials:true
          }
        );
        disptach(removeFeedData());
        console.log(InterestedRequest);
      }catch(err){
        console.error(err)
      }
    }
    return (
        <div className="flex justify-around flex-1 items-center shrink-0 min-h-screen bg-base-300 rounded-lg shadow-sm p-4 ">
                <div className="card bg-base-100 h-min shadow-xl">
                  <figure>
                    <img
                      src={photoURL}
                      alt="user-Photo" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{firstName +" "+ lastName}</h2>
                    <p className="text-3xl ">{_id}</p>
                    <p>{about}</p>
                    <p>{gender}</p>
                    <p>{age}</p>
                    <div className="card-actions justify-evenly">
                      <button className="btn btn-primary text-2xl"
                      onClick={IgnoreCurrentCard}
                      >Ignore</button>
                      <button className="btn btn-primary text-2xl"
                      onClick={InterestedCurrentCrad}
                      >Interested</button>
                    </div>
                  </div>
                </div>
            </div>
    )
}
export default Feedcard;