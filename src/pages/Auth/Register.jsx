import React, { useState } from 'react'
import './login.sass'
import { Link } from 'react-router-dom'
import Button from '../../components/Base/Button/Button'

const LoginForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(0)

  return (
    <div className='max-w-xs sm:max-w-2xl'>
      <div className='auth__header'>
        <span className='header__title'>Point</span>
        <span className='header__subtitle'>Manage and control your system</span>
        <span className='header__description'>Let’s get all your setup and so you can verify you account and Make it Easy!</span>
      </div>
      <div className='auth__body'>
        <div className='mb-6'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-x-4'>
            <div className='md:col-span-6'>
              <div className="mb-5">
                <label htmlFor="first-name" className="text-sm text-gray-800">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="form-text w-full mt-1"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className='md:col-span-6'>
              <div className="mb-5">
                <label htmlFor="last-name" className="text-sm text-gray-800">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  className="form-text w-full mt-1"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className='md:col-span-6'>
              <div className="mb-5">
                <label htmlFor="username" className="text-sm text-gray-800">Your username</label>
                <input
                  type="text"
                  id="username"
                  className="form-text w-full mt-1"
                  placeholder="Your username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className='md:col-span-6'>
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
            </div>
            <div className='md:col-span-6'>
              <div className="mb-5">
                <label htmlFor="password" className="text-sm text-gray-800">Your password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-text w-full mt-1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className='md:col-span-6'>
              <div className="mb-5">
                <label htmlFor="confirm-password" className="text-sm text-gray-800">Confirm password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  className="form-text w-full mt-1"
                  placeholder="Password"
                  onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-x-4'>
          <div className='md:col-span-6'>
            <div className='mb-4'>
              <Button
                text="Create an account"
                type="btn--pull btn--primary"
                isLoading={0}
              />
            </div>
            <span className='text-sm'>Already have an account ? <Link to="/login" className='text-blue-600 underline'>Join Now</Link></span>
          </div>
        </div>
      </div>
    </div >
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