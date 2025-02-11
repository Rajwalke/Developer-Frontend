import ThemeToggle from "./Light&DarkMode";
const Header=()=>{
    return (
        <div className="navbar bg-base-300 p-8 max-w-full border-2 border-base-300 rounded-3xl ">
        <div className="flex-1">
            <a className="btn btn-ghost text-3xl font-bold">DevMerg</a>
        </div>
        <div className="flex-none gap-12">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  shadow">
                <li>
                  <a className="justify-between text-2xl font-semibold">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a className="text-2xl font-semibold">Settings</a></li>
                <li><a className="text-2xl font-semibold">Logout</a></li>
              </ul>
          </div>
          <div>
            <ThemeToggle/>
          </div>
        </div>
    </div>
    )
}
export default Header;