import React from 'react'
import './logo.css'

function Logo() {
  return (
    
    <div id="logo" className='flex flex-col  absolute left-[80px] items-center top-5 w-[9%] '>
      <img src='./assets/logo.png' className='w-[45px] h-[50px] relative top-2 left-6'></img>
      <code className='text-white font-bold text-[24px] flex'>ENDLESS<span className='text-red-800'>RIDE</span></code>
      <code className='flex text-white text-[13px] relative bottom-2'>TAGLINE HERE</code>
    </div>
  )
}

export default Logo
