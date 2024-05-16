import React from 'react'
import './logo.css'

function Logo() {
  return (
    
    <div id="logo" className='flex flex-col  absolute left-[40px] items-center top-5 w-[9%] '>
      <img id="logo_image" src='src/assets/logo.png' className='w-[45px] h-[50px] relative top-2 left-6'></img>
      <code id="logo_heading" className='text-white font-bold text-[24px] flex'>ENDLESS<span className='text-red-800'>RIDE</span></code>
      <code id="logo_heading2" className='flex text-white text-[13px] relative bottom-2 w-[120px]'>TAGLINE HERE</code>
    </div>
  )
}

export default Logo
