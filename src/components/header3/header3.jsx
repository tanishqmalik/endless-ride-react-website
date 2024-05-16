import React from 'react'
import './header3.css'

function header3() {
  return (
    <div id="header3" className="flex flex-row mt-[180px] relative ">

      <div id="header3_1st" className="absolute left-[-280px] top-0 h-[10vh]">
        <img id='header3_1stimg' className='relative' src="src/assets/header3_1.png" />
        <div className='relative top-[-530px] left-56 flex flex-col gap-5 items-start'>
          <span id="header3_headings" className='text-white text-[48px] font-medium'>WE ARE WORLD WIDE</span>
          <span id="header3_subheading" className='text-[28.8px] text-white'>10 reasons why USA.</span>
          <p className='text-white opacity-65 w-[56%] text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

          <span id="header3_subheading" className='text-[28.8px] text-white'>10 reasons why USA.</span>
          <p className='text-white opacity-65 w-[56%] text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

          <span id="header3_subheading" className='text-[28.8px] text-white'>10 reasons why USA.</span>
          <p className='text-white opacity-65 w-[56%] text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </div>
      </div>

      <div className="absolute right-[-350px] top-[40px] h-[10vh]">
        <img className='relative 'src="src/assets/header3_3.png" />

        <div className='relative top-[-500px] left-[190px] flex flex-col gap-10'>
          <div className='flex flex-row gap-5'>
            <img src='src/assets/header3_2.1.png'></img>
            <div className='flex flex-col items-start'>
              <div className='flex items-center gap-5 pl-4'>
                <span className='text-[48px] text-gray-800 font-medium'>ALEX DOE</span>
                <span className='opacity-50'>MAIN RIDER</span>
              </div>
              <p className='w-[60%] text-start pl-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>


          <div className='flex flex-row'>
            <div className='flex flex-col  items-start'>
              <div className='flex items-center gap-5 pl-4'>
                <span className='text-[48px] text-gray-800 font-medium'>ALEX DOE</span>
                <span className='opacity-50'>MAIN RIDER</span>
              </div>
              <p className='w-[60%] text-start pl-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
            <img className='absolute left-[320px]' src='src/assets/header3_2.2.png'></img>
          </div>


          <div className='flex flex-row gap-5'>
            <img src='src/assets/header3_2.3.png'></img>
            <div className='flex flex-col items-start'>
              <div className='flex items-center gap-5 pl-4'>
                <span className='text-[48px] text-gray-800 font-medium'>ALEX DOE</span>
                <span className='opacity-50'>MAIN RIDER</span>
              </div>
              <p className='w-[60%] text-start pl-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>
          </div>


        </div>
      </div>

      <img className="absolute top-[-90px] left-[430px] 1331_px:hidden" src="src/assets/header3_2.png" />
    </div>



  )
}

export default header3



