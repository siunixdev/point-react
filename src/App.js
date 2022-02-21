import React from 'react'

function App() {
  return (
    <div className='grid grid-flow-col h-screen grid-cols-12 gap-2'>
      <div className='sm:flex flex-col justify-end bg-slate-400 hidden col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-8 pl-20 pb-20'>
        <span className='text-3xl mb-3'>Make it Easy!</span>
        <span className='text-5xl font-bold'>Make it Simple</span>
      </div>
      <div className='flex flex-col bg-slate-500 col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-4'>
        <span>POINT</span>
        <span>Login</span>
        <span>Login to your Account</span>
        <span>Thanks you for get back to Point System, Let's Access for now!</span>
      </div>
    </div>
  )
}

export default App