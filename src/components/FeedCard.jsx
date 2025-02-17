const Feedcard=({userData})=>{
    const {firstName,gender,lastName, photoURL,age,about}=userData
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
                    <p>{about}</p>
                    <p>{gender}</p>
                    <p>{age}</p>
                    <div className="card-actions justify-evenly">
                      <button className="btn btn-primary">Ignore</button>
                      <button className="btn btn-primary">Interested</button>
                    </div>
                  </div>
                </div>
            </div>
    )
}
export default Feedcard;