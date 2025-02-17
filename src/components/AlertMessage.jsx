import { useSelector } from "react-redux";

const AlertMessage=()=>{
    const loggInUser=useSelector(store=>store.user)
    return (

        <div className="flex justify-center">
        <div 
          role="alert" 
          className="absolute text-2xl font-semibold text-center flex justify-center items-center alert-success gap-3 bg-error w-3/12 rounded-lg px-8 py-5 animate-slide-down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{`Welocome ${loggInUser?.firstName} on DevMerg`}</span>
        </div>
      </div>

    )
}
export default AlertMessage;