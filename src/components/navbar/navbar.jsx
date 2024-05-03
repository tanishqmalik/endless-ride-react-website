import React from 'react'

function Navbar() {
  return (
    <div className='absolute top-10 flex flex-wrap gap-[70px] items-center right-[10px]'>

      <ul className='flex flex-wrap list-none gap-6 text-white cursor-pointer'>
        <li>HOME</li>
        <li>DESTINATIONS</li>
        <li>MOTORCYCLES</li>
        <li>RENTALS</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>

      <div className='flex gap-6 mr-10'>
        <img className='h-[45px] w-[45px]' src="/src/assets/1.png"></img>
        <img className='h-[45px] w-[45px]' src="/src/assets/2.png"></img>
        <img className='h-[45px] w-[45px]' src="/src/assets/3.png"></img>
        <img className='h-[45px] w-[45px]' src="/src/assets/4.png"></img>
      </div>
    </div>
  )
}

export default Navbar
