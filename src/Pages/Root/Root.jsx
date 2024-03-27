import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-3 lg:px-40">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
