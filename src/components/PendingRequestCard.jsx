const PendingRequestCard = ({senderData}) => {
    // const {firstName,lastName,photoURL}=senderData?.formUserId;
    console.log("This is from PendirequestCard ",senderData)
    if(!senderData)return ;
    return (
        <>
    {
        senderData &&

      <div className="flex flex-row justify-between items-center bg-base-100 rounded-2xl px-4 py-3 w-full my-3 shadow-lg">
        {/* Left section with profile */}
        <div className="flex items-center space-x-5 overflow-hidden">
          {/* Profile image - smaller on mobile */}
          <div className="avatar online">
            <div className="w-12 bg-slate-50 xs:w-12 sm:w-20 rounded-full">
              <img src={senderData?.formUserId?.photoURL}  alt="Profile" />
            </div>
          </div>
          
          {/* Name and status - hidden on very small screens */}
          <div className=" xs:block">
            <p className="text-sm sm:text-2xl font-semibold truncate">{senderData?.formUserId?.firstName} {senderData?.formUserId?.lastName}</p>
            <p className="text-xs sm:text-xl truncate opacity-75">Interest in you</p>
          </div>
        </div>
  
        {/* Right section with buttons */}
        <div className="flex gap-2">
          <button className="btn btn-success btn-sm sm:btn-lg shadow-md">
            Accept
          </button>
          <button className="btn btn-neutral btn-sm sm:btn-lg shadow-md">
            Ignore
          </button>
        </div>
      </div>
        }
    </>
    );
  };
  
  export default PendingRequestCard;