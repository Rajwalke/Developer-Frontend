import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaEdit, FaUserFriends, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Check screen width on mount and when window resizes
    useEffect(() => {
        const handleResize = () => {
            setIsCollapsed(window.innerWidth < 768);
        };
        
        // Set initial state
        handleResize();
        
        // Add event listener
        window.addEventListener("resize", handleResize);
        
        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Get icon size based on viewport
    const iconSize = isCollapsed ? 26 : 22;

    return (
        <div className={`transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-1/6'} shrink-0 min-h-screen bg-base-300 rounded-2xl shadow-sm p-4`}>
            {/* Navigation Items */}
            <Link to="/feed" className="flex justify-center md:justify-start items-center text-2xl px-3 py-4 cursor-pointer bg-base-100 my-2 rounded-2xl hover:bg-base-200 hover:rounded-r-full transition-all">
                <FaHome className="text-primary" size={iconSize} />
                {!isCollapsed && <span className="ml-3">Home</span>}
            </Link>
            
            <div 
                className="flex justify-center md:justify-start items-center text-2xl px-3 py-4 cursor-pointer bg-base-100 my-2 rounded-2xl hover:bg-base-200 hover:rounded-r-full transition-all"
                onClick={() => navigate("/profile")}
            >
                <FaUser className="text-primary" size={iconSize} />
                {!isCollapsed && <span className="ml-3">Profile</span>}
            </div>
            
            <Link to="/edit" className="flex justify-center md:justify-start items-center text-2xl px-3 py-4 cursor-pointer bg-base-100 my-2 rounded-2xl hover:bg-base-200 hover:rounded-r-full transition-all">
                <FaEdit className="text-primary" size={iconSize} />
                {!isCollapsed && <span className="ml-3">Edit Profile</span>}
            </Link>
            
            <Link to="/request/pending" className="flex justify-center md:justify-start items-center text-2xl px-3 py-4 cursor-pointer bg-base-100 my-2 rounded-2xl hover:bg-base-200 hover:rounded-r-full transition-all">
                <FaUserFriends className="text-primary" size={iconSize} />
                {!isCollapsed && <span className="ml-3">Connection</span>}
            </Link>
            
            <div className="flex justify-center md:justify-start items-center text-2xl px-3 py-4 cursor-pointer bg-base-100 my-2 rounded-2xl hover:bg-base-200 hover:rounded-r-full transition-all">
                <FaEnvelope className="text-primary" size={iconSize} />
                {!isCollapsed && <span className="ml-3">Message</span>}
            </div>
        </div>
    );
};

export default Sidebar;