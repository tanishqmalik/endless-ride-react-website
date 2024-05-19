import React from 'react'
import './header3.css'

function header3() {
  return (
<div className='pt-[180px] h-screen 1059_px:hidden'>
    <div id="header3" className="flex flex-row  relative ">

      <div id="header3_1st" className="absolute left-[-280px] top-0 h-[10vh]">
        <img id='header3_1stimg' className='relative' src="src/assets/header3_1.png" />
        
      </div>

      <div className="absolute right-[-350px] top-[40px] h-[10vh] 1331_px:top-0">
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
            <img id="header3_2_2" className='absolute left-[320px] 1331_px:top-[165px]' src='src/assets/header3_2.2.png'></img>
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

    </div>



  )
}

export default header3



