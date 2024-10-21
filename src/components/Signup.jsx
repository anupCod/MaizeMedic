import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <section className="min-w-full h-screen ">
        <form className="shadow-neumorphism w-[24rem] flex flex-col gap-3 p-7 my-8 mx-auto bg-white">
          <h3 className="font-bold text-primary text-2xl">Signup</h3>
          <p>Please enter your details</p>
          <input
            type="text"
            name="myusername"
            placeholder="Username"
            className="border-[1px]  border-secondary border-solid px-3 text-sm py-[0.6rem] rounded-md outline-none"
          />
          <input
            type="email"
            name="myEmail"
            placeholder="Email"
            className="border-[1px]  border-secondary border-solid px-3 text-sm py-[0.6rem] rounded-md outline-none"
          />
          <input
            type="password"
            name="createdPassword"
            placeholder="Create Password"
            className="border-[1px] border-secondary border-solid text-sm px-3 py-[0.6rem] rounded-md outline-none"
          />
          <input
            type="password"
            name="confirmedPassword"
            placeholder="Confirm Password"
            className="border-[1px] border-secondary border-solid text-sm px-3 py-[0.6rem] rounded-md outline-none"
          />
          <input
            type="button"
            value="Sign Up"
            className="border-0 cursor-pointer  py-[0.4rem] bg-primary font-semibold text-white rounded-md"
          />
          <p>
            Already have an account?<NavLink to="/login" className="font-semibold cursor-pointer text-primary text-xm">  Login Here</NavLink>
          </p>
        </form>
      </section>
    </>
  );
}

export default Signup;
