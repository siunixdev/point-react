import React, { useState } from 'react'
import './login.sass'
import Card from '../../components/Base/Card/Card'

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(0)

  return (
    <div>
      <div className='flex flex-col mb-6'>
        <span className='auth__title'>Point</span>
        <span className='auth__subtitle'>Login to your Account</span>
        <span className='auth__description'>Thank you for get back to Point System, Lets Access for now!</span>
      </div>
      <div className='mb-6'>
        <div className="mb-5">
          <label htmlFor="email" className="text-sm text-gray-800">Your email</label>
          <input
            type="email"
            id="email"
            className="form-text w-full mt-1"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="text-sm text-gray-800">Your password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="form-text w-full mt-1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} />
          <a className='text-xs underline font-light'>Ohh no!, I forgot My Password</a>
        </div>
      </div>
      <div>
        <div className='mb-4'>
          <button className='w-full text-center p-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300 transition-all ease-linear'>Login into my account</button>
        </div>
        <span className='text-sm'>Don't have an account ? <a href='' className='text-blue-600 underline'>Join Now</a></span>
      </div>
    </div>
  )
}

const Login = () => {
  return (
    <div className='container mx-auto'>
      <div className='auth'>
        {LoginForm()}
      </div>
    </div>
  )
}

export default Login