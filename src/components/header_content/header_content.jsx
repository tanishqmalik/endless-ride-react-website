import React from 'react'
import './header_content.css'

function Header_content() {
  return (
    <div className=' flex text-white pt-[170px] flex-col items-center 1331_px:pt-[240px] overflow-hidden'>
      {/* <h1 className='w-[1200px] text-[75px] font-Bebas relative font-extrabold italic'>2,500 tours in over 100 destinations and 36 years of experience!</h1> */}
      <h1 id="heading_h1" className='text-[75px]  font-Bebas relative font-extrabold italic leading-tight 1331_px:text-[65px]'>2,500 tours in over 100 destinations and 36 years of experience!</h1>
      <img id="img_header" className='h-[540px] w-[840px] relative bottom-10 1331_px:h-[470px]' src="/bike.png"></img>
    </div>
  )
}
export default Header_content
