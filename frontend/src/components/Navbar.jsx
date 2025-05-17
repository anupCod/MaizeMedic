import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import usericon from "../assets/user.svg";
import logoImg from "../images/logo.png";
import userProfileImg from "../images/youtubeProfile.png";
import navList from "./Navlinks";
import { useUser } from "./UserContext";
import '../public/static/Navbar.css'
function Navbar() {
  const { user, accessToken, setUser, setAccessToken } = useUser();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  
  const handleUsernameClick = () => {
    setShowPopup((prev) => !prev);
  };

  
  const handleLogout = () => {
  
    localStorage.clear();
    setUser(null);
    setAccessToken(null);
    setShowPopup(false);
    navigate('/login');
  };

  return (
    <header className="w-full  shadow-neumorphism bg-slate-50 border-b-[1px] relative ">
      <nav className="flex w-full justify-between items-center px-[2rem] py-[0.5rem]">
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="logo"
            className="w-10 h-10 rounded-full filter backdrop-brightness- backdrop-contrast-200 contrast-220 bg-black"
          />
          <h3 className="ml-2 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-400">
            MaizeMedic
          </h3>
        </div>
        <ul className="flex gap-8">
          {navList.map((navLink, index) => (
            <li key={index + 1}>
              <NavLink
                to={navLink.navUrl}
                className={({ isActive }) =>
                  isActive ? "font-bold text-black-600" : ""
                }
              >
                {navLink.navElement}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 relative">
          {accessToken ? (
            <>
              <img
                src={userProfileImg}
                onClick={handleUsernameClick}
                alt="userProfile-icon"
                className="w-[2rem] h-[2rem] rounded-full border-2 border-green-600"
              />
              <p
                className="cursor-pointer font-bold text-md text-green-700"
                onClick={handleUsernameClick}
              >
                {user ? user.username : "Guest"}
              </p>

           
              {showPopup && (
                <div className="absolute right-0 top-full mt-2 w-48 p-4 bg-white rounded shadow-lg z-10">
                  <ul className="space-y-2">
                 
                    <li>
                      <button className="w-full text-left text-gray-600">
                        Settings
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left text-gray-600">
                        Image History
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left text-red-600 font-bold"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <img src={usericon} alt="user-icon" />
              <NavLink
                to="/login"
                className="cursor-pointer font-bold text-md text-success"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
