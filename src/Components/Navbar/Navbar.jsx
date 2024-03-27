import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:px-20 lg:px-40 lg:my-10">
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
            className="space-y-2 font-bold 2 dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 text-xl"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-green-600 font-bold rounded-lg"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink
                to="/book"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-green-600 font-bold rounded-lg"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Listed Books
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink
                to="/read"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-green-600 font-bold rounded-lg"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Pages to Read
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reviews"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-green-600 font-bold rounded-lg"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-green-600 font-bold rounded-lg"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                About
              </NavLink>
            </li>
            <hr />
            <li>
              <a className="w-full btn bg-[#23BE0A] text-white">Sign In</a>
            </li>
            <hr />
            <li>
              <a className="w-full btn bg-[#59C6D2] text-white -mt-1">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-3xl font-bold">
          Book Vibe
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center px-1 text-xl font-medium space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-green-600 font-bold border px-4 py-2 border-green-500 rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-green-600 font-bold border px-4 py-2 border-green-500 rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/read"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-green-600 font-bold border px-4 py-2 border-green-500 rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Pages to Read
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-green-600 font-bold border px-4 py-2 border-green-500 rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-green-600 font-bold border px-4 py-2 border-green-500 rounded-lg"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4 hidden lg:flex">
        <a className="btn bg-[#23BE0A] text-white text-xl font-semibold px-8">
          Sign In
        </a>
        <a className="btn bg-[#59C6D2] text-white text-xl font-semibold px-8">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
