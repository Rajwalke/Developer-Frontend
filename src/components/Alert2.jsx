const Alert2 = () => {
    return (
      <div className="toast toast-top toast-center w-full max-w-md mx-auto mt-6">
        <div className="alert alert-success shadow-lg rounded-lg flex flex-col justify-center items-center relative overflow-hidden pt-4 px-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg md:text-2xl font-medium text-white">Profile Updated Successfully</p>
          </div>
          
          {/* Timeline animation container */}
          <div className="w-full h-1.5 rounded-full relative">
            {/* Animated timeline that moves from right to left */}
            <div className="timeline-animation rounded-full"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Alert2;