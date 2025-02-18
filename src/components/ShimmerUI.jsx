const ShimmerUI=()=>{
    return (
<div className="flex justify-around flex-1 items-center shrink-0 min-h-screen bg-base-300 rounded-lg shadow-sm p-4 ">
                <div className="card bg-base-100 h-min shadow-xl">
                  <figure>
                    <img
                      src=""
                      alt="user-Photo" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p className="w-7 h-7 bg-base-300 p-5"></p>
                    <p className="w-7 h-7 bg-base-300 p-5"></p>
                    <p className="w-7 h-7 bg-base-300 p-5"></p>
                    <div className="card-actions justify-evenly">
                      <button className="btn btn-primary p-5"></button>
                      <button className="btn btn-primary p-5"></button>
                    </div>
                  </div>
                </div>
            </div>
    )
}
export default ShimmerUI;