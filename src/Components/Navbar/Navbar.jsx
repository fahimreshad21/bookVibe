import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 md:px-20 lg:px-40 lg:my-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Listed Books</a></li>
        <li><a>Pages to Read</a></li>
        <li>
        <a className="w-2/3 btn bg-[#23BE0A] text-white">Sign In</a>
        </li>
        <li><a className="w-2/3 btn bg-[#59C6D2] text-white mt-2">Sign Up</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl text-[#131313CC] font-medium space-x-8">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/book">Listed Books</NavLink></li>
      <li><NavLink to="/read">Pages to Read</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end space-x-4 hidden lg:flex">
    <a className="btn bg-[#23BE0A] text-white text-xl font-semibold px-8">Sign In</a>
    <a className="btn bg-[#59C6D2] text-white text-xl font-semibold px-8">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;