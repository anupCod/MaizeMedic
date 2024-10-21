import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
        <section className='min-w-full h-screen'>
            <form className='shadow-neumorphism w-[24rem] flex flex-col gap-3 p-7 my-8 mx-auto bg-white'>
                <h3 className='font-bold text-primary text-2xl'>Login</h3>
                <p className='text-sm'>Please enter your credentials</p>
                <input type="email" name="myEmail" placeholder='Email' className='border-[1px]  border-secondary border-solid px-3 text-sm py-[0.6rem] rounded-md outline-none' />
                <input type="password" name="myPassword" placeholder='Password' className='border-[1px] border-secondary border-solid text-sm px-3 py-[0.6rem] rounded-md outline-none' />
                <input type="button" value="Login" className='border-0  py-[0.4rem] bg-primary font-semibold text-white rounded-md cursor-pointer' />
                <p>Don't have an account? <NavLink to="/signup" className='font-semibold cursor-pointer text-primary text-xm'>Sign Up Here</NavLink></p>
            </form>
        </section>
    </>
  )
}

export default Login
