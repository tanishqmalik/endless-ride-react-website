import React from 'react'
import './header4.css'

function Header4() {
  return (
    <div>
    <div id="one" className='flex flex-col gap-[40px] items-center justify-center 1059_px:gap-0'>
        <div className='flex flex-col items-center'>
            <span className='text-[48px] font-medium'>WE ARE <span className='text-red-600'>WORLD WIDE</span></span>
            <p className='w-[65%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque, illum ut mollitia repellat consequuntur fugit. Excepturi quidem soluta delectus, quis et odit .</p>
        </div>

        <div id="two" className='flex flex-row items-center justify-center gap-36 1059_px:flex-col'>
          <div className='  w-[45%] h-[45vh] border-solid bg-D9D9D9 flex flex-col items-center justify-center gap-11 mt-24 1059_px:w-[90%] '>
            <div className='flex flex-row items-center gap-4 justify-center'>
              <img src='src/assets/header4_1.png'></img>
              <div className='flex flex-col items-end'>
                <span className='text-[24px]'>JOHN SMITH</span>
                <span className='opacity-55 text-[15px]' >SOLO TRAVELLER</span>
              </div>
            </div>
            <p className='w-[70%]'>”Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</p>
          </div>

         <div>
          <img  src='src/assets/header4_2.png'></img>
          </div>
        </div>
    </div>

    </div>
  )
}

export default Header4