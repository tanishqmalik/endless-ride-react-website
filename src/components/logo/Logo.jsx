import React from 'react'

function Logo() {
  return (
    
    <div id="logo" className='flex flex-col  absolute left-[80px] items-center top-5 '>
      <img src='./assets/logo.png' className='w-[60px]'></img>
      <code className='text-white font-bold text-[30px] flex'>ENDLESS<span className='text-red-800'>RIDE</span></code>
      <code className='flex text-white '>TAGLINE HERE</code>
    </div>

  )
}

export default Logo
