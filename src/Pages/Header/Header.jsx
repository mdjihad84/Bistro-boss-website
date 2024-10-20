
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
            className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
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
              <a>Our Shop</a>
            </li>

            <li>
              <a>SIGN OUT</a>
            </li>
          </ul>
        </div>
        <h1 className="font-bold lg:text-[26px] leading-[43.14px] font-cinzel">
          BISTRO BOSS
        </h1>

        {/* <a className="btn btn-ghost text-xl"> Restaurant</a> */}
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase font-semibold">
          <li>
            <a>Home</a>
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
            <a>Our Shop</a>
          </li>

          <li>
            <a>SIGN OUT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
