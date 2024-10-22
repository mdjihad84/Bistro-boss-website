import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-black text-white bg-opacity-35 fixed z-40 w-[1284px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-black dropdown-content text-white bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <a>CONTACT us</a>
            </li>
            <li>
              <a>DASHBOARD</a>
            </li>

            <li>
              <a>Our Menu</a>
            </li>
            <li>
              <NavLink to="/SignUp" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className="font-bold lg:text-[26px] leading-[43.14px] font-cinzel">
          <NavLink to={"/"}>
            BISTRO BOSS
          </NavLink>
        </h1>
        {/* <a className="btn btn-ghost text-xl"> Restaurant</a> */}
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase font-semibold">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <a>CONTACT us</a>
          </li>
          <li>
            <a>DASHBOARD</a>
          </li>

          <li>
            <a>Our Menu</a>
          </li>
          <li>
            <NavLink to="/SignUp" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "bg-red-700 text-white hover:bg-red-800" : "")}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
