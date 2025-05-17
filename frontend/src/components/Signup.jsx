import React,{useState} from "react";
import axios from 'axios';
import { NavLink,useNavigate } from "react-router-dom";

function Signup() {
  const [formData,setFormData] = useState({ username: "", email: "", createdPassword: "", confirmedPassword: "" })
  const [error,setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.createdPassword != formData.confirmedPassword){
      setError("Passwords dont match");
      return;
    }
    try {
      const response = axios.post('http://127.0.0.1:8000/api/accounts/signup/',{
        username: formData.username,
        email:formData.email,
        createdPassword:formData.createdPassword,
        confirmedPassword:formData.confirmedPassword,
      })
      console.log(response.data)
      navigate('/login');
      console.log(`message sent successfully`)
    }catch (error) {
      setError("Signup failed. Please try again");
      console.error(error.response.data);
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <section className="min-w-full h-screen pt-5">
        <form className="shadow-neumorphism w-[24rem] flex flex-col gap-3 p-7 my-8 mx-auto bg-white" onSubmit={handleSubmit}>
          <h3 className="font-bold text-success text-2xl">Signup</h3>
          <p>Please enter your details</p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border-[1px]  border-success border-solid px-3 text-sm py-[0.6rem] rounded-md outline-none"
            value={formData.username} // Bind value to state
            onChange={handleChange} // Handle input change
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-[1px]  border-success border-solid px-3 text-sm py-[0.6rem] rounded-md outline-none"
            value={formData.email} // Bind value to state
            onChange={handleChange} // Handle input change
          />
          <input
            type="password"
            name="createdPassword"
            placeholder="Create Password"
            className="border-[1px] border-success border-solid text-sm px-3 py-[0.6rem] rounded-md outline-none"
            value={formData.createdPassword} // Bind value to state
            onChange={handleChange} // Handle input change
          />
          <input
            type="password"
            name="confirmedPassword"
            placeholder="Confirm Password"
            className="border-[1px] border-success border-solid text-sm px-3 py-[0.6rem] rounded-md outline-none"
            value={formData.confirmedPassword} // Bind value to state
            onChange={handleChange} // Handle input change
          />
          <input
            type="submit"
            value="Sign Up"
            className="border-0 cursor-pointer  py-[0.4rem] bg-success font-semibold text-white rounded-md"
          />
          {error && <p className="text-red-500">{error}</p>} {/* Display error if exists */}
          <p>
            Already have an account?<NavLink to="/login" className="font-semibold cursor-pointer text-success text-xm">  Login Here</NavLink>
          </p>
        </form>
      </section>
    </>
  );
}

export default Signup;
