const Profile = () => {
    return (
      <div className="w-full md:w-10/12 bg-base-300 text-lg md:text-3xl rounded-2xl mx-auto">
        <div className="flex flex-col bg-base-200 m-2 md:m-5 rounded-2xl p-4 md:p-6">
          <p className="text-right text-sm md:text-base">Edit Profile</p>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 m-4 md:m-10">
            {/* Avatar Section */}
            <div className="ring-primary ring-offset-base-100 w-32 h-32 md:w-48 md:h-48 rounded-full ring ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
  
            {/* Profile Details Section */}
            <div className="text-center md:text-left space-y-2 md:space-y-4">
              <p className="my-1 md:my-2">FirstName</p>
              <p className="my-1 md:my-2">He/him</p>
              <p className="my-1 md:my-2">Email</p>
            </div>
          </div>
        </div>
        <div>
            
        </div>
      </div>
    );
  };
  
  export default Profile;