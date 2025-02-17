/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_LOCALHOST_URL } from "../utils/constant";
import { deleteUserDetails } from "../utils/userInfoSlice";


const Header=()=>{
    const user=useSelector(store=>store.user);
    // console.log("Im from redux",user);
    const dispatch=useDispatch();
    const Nevigate=useNavigate();
    // const {photoURL}=user;
    

    const handleLogOut=async()=>{
      try{
        const LogoutUser=await axios.post(
          BACKEND_LOCALHOST_URL+"/logout",
          null,
          {
            withCredentials:true
          }
        )
        dispatch(deleteUserDetails());
        Nevigate("/login");
      }catch(err){
        console.error(err);
      }
        
    }
    return (
       
      <div className="navbar bg-base-300 p-5 md:p-8 border-2 border-base-300 rounded-3xl">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl md:text-3xl font-bold">DevMerg</Link>
      </div>
      <div className="flex-none gap-2 md:gap-12">
        {user && <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-8 md:w-10 rounded-full">
              <img
                alt="User Photo"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between text-base md:text-2xl font-semibold">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><a className="text-base md:text-2xl font-semibold">Settings</a></li>
            <li><a className="text-base md:text-2xl font-semibold"
              onClick={handleLogOut}
            >Logout</a></li>
          </ul>
        </div>}
        <div>
          <ThemeToggle />
        </div>
        {/* <svg
      className="swap-off h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 3C17.5 3 22 6.58 22 11C22 15.42 17.5 19 12 19C10.76 19 9.57 18.82 8.47 18.5C5.55 21 2 21 2 21C4.33 18.67 4.7 17.1 4.75 16.5C3.05 15.07 2 13.13 2 11C2 6.58 6.5 3 12 3ZM12 17C16.42 17 20 14.31 20 11C20 7.69 16.42 5 12 5C7.58 5 4 7.69 4 11C4 12.54 4.81 13.93 6.14 15C6.36 15.17 6.5 15.44 6.5 15.72C6.5 16.02 6.5 16.31 6.43 16.6C6.2 17.41 5.79 18.16 5.26 18.83C6.19 18.94 7.22 18.83 8.25 18.45L8.28 18.44C8.71 18.32 9.16 18.36 9.54 18.57C10.27 18.93 11.12 19 12 19C12.92 19 13.77 18.93 14.54 18.56C13.63 17.53 13 16.35 13 15C13 12.79 14.79 11 17 11H17.75C17.91 10.36 18 9.69 18 9C18 6.79 16.21 5 14 5C13.06 5 12.19 5.33 11.5 5.88C11.55 6.24 11.58 6.62 11.58 7C11.58 9.63 10.44 11.97 8.58 13.48C8.58 13.48 8.59 13.48 8.25 12.5" />
    </svg> */}
      </div>
    </div>

    
    )
}
export default Header;