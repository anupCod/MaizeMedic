import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({loginStatus,onLoginSuccess}) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/login/', {
        email: formData.email, // Adjust based on how you authenticate
        password: formData.password, // Adjust field name if necessary
      })
      console.log('Login successful:', response.data);
      onLoginSuccess()
      navigate('/');
    }catch(error){
      if (error.response && error.response.data) {
        setError(error.response.data.error || "Login failed. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      console.error(error);
    };
  };

  return (
    <section className='min-w-full h-screen'>
      <form className='shadow-neumorphism w-[24rem] flex flex-col gap-3 p-7 my-8 mx-auto bg-white' onSubmit={handleSubmit}>
        <h3 className='font-bold text-primary text-2xl'>Login</h3>
        <p className='text-sm'>Please enter your credentials</p>
        <input
          type="email"
          name="email"
          placeholder='Email'
          className='border-[1px] border-secondary border-solid px-3 text-sm py-[0.6rem] rounded-md outline-none'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password" // Change to "password" for consistency
          placeholder='Password'
          className='border-[1px] border-secondary border-solid text-sm px-3 py-[0.6rem] rounded-md outline-none'
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Login"
          className='border-0 py-[0.4rem] bg-primary font-semibold text-white rounded-md cursor-pointer'
        />
        {error && <p className="text-red-500">{error}</p>}
        <p>Don't have an account? <NavLink to="/signup" className='font-semibold cursor-pointer text-primary text-xm'>Sign Up Here</NavLink></p>
      </form>
    </section>
  );
}

export default Login;

