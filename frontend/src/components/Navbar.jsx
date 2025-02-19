import React from "react";
import { NavLink } from "react-router-dom";
import usericon from "../assets/user.svg";
import logoImg from "../images/logo.png";
import userProfile from '../images/youtubeProfile.png'
import navList from "./Navlinks";

function Navbar({loginStatus}) {
  return (
    <>
      <header className="w-full shadow-neumorphism bg-slate-50  border-b-[1px] ">
        <nav className="flex justify-between items-center px-[2rem] py-[0.5rem] ">
          <div className="flex items-center">
            <img src={logoImg} alt="logo" className="w-10 h-10 rounded-full filter backdrop-brightness- backdrop-contrast-200 contrast-220 bg-black" />
            <h3 className="ml-2 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-400">
              MaizeMedic
            </h3>
          </div>
          <ul className="flex gap-8">
            {
              navList.map((navLink,index) => (
                <li key={index+1}>
                  <NavLink
                    to={navLink.navUrl}
                    className={({ isActive }) =>
                      isActive ? "font-bold text-black-600" : ""
                    }
                  >
                    {navLink.navElement}
                  </NavLink>
                </li>
              ))
            }
          </ul>
          <div className="flex items-center gap-1">
            {
              loginStatus ? (
                <>
                  <img src={userProfile} alt="userProfile-icon" className="w-[2rem] h-[2rem] rounded-full border-2 border-red-600" />
                  <p className="cursor-pointer font-semibold text-md text-blue-600">
                    Profile
                  </p>
                </>
              ): 
              (
                <>
                  <img src={usericon} alt="user-icon" />
                  <NavLink to='/login' className="cursor-pointer font-bold text-md text-primary">
                    Login
                  </NavLink>
                </>
              )
            }
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
