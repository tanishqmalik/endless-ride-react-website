import React, { useState } from 'react'
import './navbar.css'
import { navLinks } from '../../constants'
import { menu, logo } from '../../assets'





function Navbar() {
  const [ShowNav, SetShowNav] = useState(false);


  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };



  return (
    <div className='flex flex-row items-center'>

      <div id="logo" className='flex flex-col  absolute left-[40px] items-center top-5 w-[9%] '>
        <img id="logo_image" src={logo} className='w-[45px] h-[50px] relative top-2 left-6'></img>
        <code id="logo_heading" className='text-white font-bold text-[24px] flex'>ENDLESS<span className='text-red-800'>RIDE</span></code>
        <code id="logo_heading2" className='flex text-white text-[13px] relative bottom-2 w-[120px]'>TAGLINE HERE</code>
      </div>




      {/* ipad view 1154px */}
      {ShowNav && (
        <div id="hamburger-menu" className='flex flex-col items-center absolute border-2 top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-64 h-64'>
          <ul id="hamburger-links" className='relative flex flex-col gap-4 items-center justify-center'>
            {navLinks.map((link, index) => (
              <li key={index} className='hover:text-gray-400'>{link.name}</li>
            ))}
          </ul>
          
          <div id="hamburger-media" className='flex flex-row items-center gap-6 relative top-[70px] w-screen justify-center'>
            <div className='flex items-center justify-center gap-5'>
            <i id="navbaricons2" class="fa-brands fa-facebook-f  border-2 border-black rounded-[100%] p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer"  ></i>
            <i id="navbaricons2" class="fa-brands fa-google-plus-g border-2 border-black rounded-[100%] p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer "></i>
            <i id="navbaricons2" class="fa-brands fa-wikipedia-w border-2 rounded-[100%]  border-black p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer "></i>
            <i id="navbaricons2" class="fa-brands fa-youtube border-2 rounded-full p-[10px]  border-black h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer "></i>
            </div>
          </div>
        </div>
      )}

      {/* iphone view */}













      <div id="navbar_content" className='absolute top-10 flex  gap-[75px] items-center right-[10px] 1331_px: ml-[24%]'>
        <ul id="navbarmain" className='flex list-none gap-6 text-white cursor-pointer'>

          {navLinks.map((link, index) => (
            <li key={index}  className='hover:text-gray-400'>
            <a onClick={() => handleScroll(link.id)}>{link.name}</a>
            </li>
          ))}
        </ul>


        <div className='flex gap-6 mr-10'>

          <i id="navbaricons" class="fa-brands fa-facebook-f  border-2 rounded-[100%] p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer  842_px:hidden"></i>
          <i id="navbaricons" class="fa-brands fa-google-plus-g border-2 rounded-[100%] p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer  842_px:hidden"></i>
          <i id="navbaricons" class="fa-brands fa-wikipedia-w border-2 rounded-[100%] p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer  842_px:hidden"></i>
          <i id="navbaricons" class="fa-brands fa-youtube border-2 rounded-full p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer  842_px:hidden"></i>

          <img id="menu" onClick={(e) => SetShowNav((prev) => !prev)} src={menu} className='hidden 1154_px:block cursor-pointer'></img>


          {/* <div>
            <img
              id="menu"
              onClick={handleMenuClick}
              src={menu}
              className='hidden 1154_px:block cursor-pointer'
              alt="Menu"
            />
            <div
              id="hamburger-menu"
              className={`absolute border-2 top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-64 h-64 ${ShowNav ? 'block' : 'hidden'}`}
            >
              <ul className='flex flex-col gap-4 items-center justify-center '>
                {navLinks.map((link, index) => (
                  <li key={index} className='hover:text-gray-400'>{link.name}</li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>







      </div>
    </div>
  )
}

export default Navbar
