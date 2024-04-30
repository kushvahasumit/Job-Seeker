import React from "react";
import pic from "../images/coursifylogo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      {/* <!-- nav section --> */}
      <div className="navBar flex justify-between items-center px-[1rem] gap-7">
        <div className=" ">
          <h1 class=" pl-16 ">
            <img src={pic} alt="Hospital Logo" height="40px" width="80px" />
          </h1>
        </div>

        <div className="menu flex gap-4 font-semibold pr-28">
          <Link to="/jobs">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              Jobs
            </li>
          </Link>
          <Link to="/jobs">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              Companies
            </li>
          </Link>
          <Link to="/jobs">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              About
            </li>
          </Link>
          <Link to="/jobs">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              Contact
            </li>
          </Link>
{/*          
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Login
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Register
          </li> */}
        </div>
      </div>
    </div>
  );
}
