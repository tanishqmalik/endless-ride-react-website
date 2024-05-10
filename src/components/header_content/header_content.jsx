import React from 'react'
import './header_content.css'

function Header_content() {
  return (
    <div className=' flex text-white pt-[170px] flex-col items-center'>
      {/* <h1 className='w-[1200px] text-[75px] font-Bebas relative font-extrabold italic'>2,500 tours in over 100 destinations and 36 years of experience!</h1> */}
      <h1 className=' text-[75px] font-Bebas relative font-extrabold italic leading-tight'>2,500 tours in over 100 destinations and 36 years of experience!</h1>
      <img className='h-[540px] w-[840px] relative bottom-10' src="/bike.png"></img>
    </div>
  )
}
export default Header_content
