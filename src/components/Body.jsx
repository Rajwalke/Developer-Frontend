import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body=()=>{
    return(
        <div className="mx-10 my-7">
            <Header/>
            <Outlet/>
        </div>
    )
}
export default Body;