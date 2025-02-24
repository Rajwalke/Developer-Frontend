const AllAcceptRequestCard=({friendData})=>{

    return (
        <div className="flex flex-row justify-between items-center bg-base-100 rounded-2xl px-4 py-3 w-full my-3 shadow-lg">
        {/* Left section with profile */}
        <div className="flex items-center space-x-5 overflow-hidden">
          {/* Profile image - smaller on mobile */}
          <div className="avatar online">
            <div className="w-12 bg-slate-50 xs:w-12 sm:w-20 rounded-full">
              <img 
              src={friendData?.photoURL}
              alt="Profile" />
            </div>
          </div>
          
          {/* Name and status - hidden on very small screens */}
          <div className=" xs:block">
            <p className="text-sm sm:text-2xl font-semibold truncate">{friendData?.firstName} {friendData?.lastName}</p>
            {/* <p className="text-xs sm:text-xl truncate opacity-75">Interest in you</p> */}
          </div>
        </div>
  
        {/* Right section with buttons */}

      </div>
    )
}

export default AllAcceptRequestCard;