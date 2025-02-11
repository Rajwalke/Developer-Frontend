import ThemeToggle from "./ThemeToggle";

const Header=()=>{
    return (
      <div className="navbar bg-base-300 p-4 md:p-8 border-2 border-base-300 rounded-3xl">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl md:text-3xl font-bold">DevMerg</a>
      </div>
      <div className="flex-none gap-2 md:gap-12">
        <div className="form-control">
          <input 
            type="text" 
            placeholder="Search" 
            className="input input-bordered w-20 md:w-auto text-sm md:text-base" 
          />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-8 md:w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between text-base md:text-2xl font-semibold">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a className="text-base md:text-2xl font-semibold">Settings</a></li>
            <li><a className="text-base md:text-2xl font-semibold">Logout</a></li>
          </ul>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
    )
}
export default Header;