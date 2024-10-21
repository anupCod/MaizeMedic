import React from "react";
import { NavLink } from "react-router-dom";
import usericon from "../assets/user.svg";
import logoImg from "../images/logo.png";

function Navbar() {
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
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-black-600" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "font-bold text-black-600" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-it-works"
                className={({ isActive }) =>
                  isActive ? "font-bold text-black-600" : ""
                }
              >
                How it works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/maize-disease"
                className={({ isActive }) =>
                  isActive ? "font-bold text-black-600" : ""
                }
              >
                Maize disease
              </NavLink>
            </li>
          </ul>
          <div className="flex">
            <img src={usericon} alt="user-icon" />
            <NavLink to='/login' className="cursor-pointer font-bold text-md text-primary">
              Login
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
