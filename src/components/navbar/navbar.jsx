import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>

    {/* <img className="absolute left-10 top-5" src="/logo.svg"/>    */}


    <div id="navbar_content" className='absolute top-10 flex  gap-[75px] items-center right-[10px] 1331_px: ml-[24%]'>
      <ul id="navbarmain" className='flex list-none gap-6 text-white cursor-pointer'>
        <li>HOME</li>
        <li>DESTINATIONS</li>
        <li>MOTORCYCLES</li>
        <li>RENTALS</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>



      <ul id="navbarMD" className='flex flex-wrap list-none gap-6 text-white cursor-pointer hidden'>
        <li>HOME</li>
        <li>DESTINATIONS</li>
        <li>MOTORCYCLES</li>
        <li>RENTALS</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>

      {/* <div className='flex gap-6 mr-10'>
        <img className='h-[45px] w-[45px]' src="/1.png"></img>
        <img className='h-[45px] w-[45px]' src="/2.png"></img>
        <img className='h-[45px] w-[45px]' src="/3.png"></img>
        <img className='h-[45px] w-[45px]' src="/4.png"></img>
      </div> */}


        <div className='flex gap-6 mr-10'>
        {/* <i class="fa-brands fa-youtube border-2 rounded-full p-[10px] border-solid"></i> */}
        
        <i id="navbaricons" class="fa-brands fa-facebook-f  border-2 rounded-[100%] p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer"></i>
        <i id="navbaricons" class="fa-brands fa-google-plus-g border-2 rounded-[100%] p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer"></i>
        <i id="navbaricons" class="fa-brands fa-wikipedia-w border-2 rounded-[100%] p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer"></i>
        <i id="navbaricons" class="fa-brands fa-youtube border-2 rounded-full p-[10px] h-[35px] w-[35px] flex items-center justify-center border-solid cursor-pointer"></i>
      </div>

      
    </div>
    </>
  )
}

export default Navbar
