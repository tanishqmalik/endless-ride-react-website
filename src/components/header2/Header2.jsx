import React from 'react'
import { data } from '../../constants'

function Header2() {
  return (
    <div className='flex flex-row justify-evenly flex-wrap gap-5 626_px:pt-[70px]'>
      
    {data.map((ele, index) => {
      return (
        <div key={index} className='flex flex-col relative w-[350px]'>
        <img src={ele.img}></img>

            <div className='flex flex-col absolute bottom-[250px] left-7 items-start text-white'>
              <span className='text-[50px]'>
                $ <span className='text-[70px] font-bold'>100</span>
              </span>
              <span>PER PERSON</span>
            </div>

            <div className='flex flex-col items-start gap-4 pt-5'>
              <span className='text-black font-bold text-[25px]'>{ele.heading}</span>
              <p className='text-start opacity-55'>
                {ele.para}
              </p>

              <button className='bg-red-600 rounded-full w-[30%] text-white p-[8px] mt-5'>BOOK NOW</button>
            </div>
          </div>

        )

      })}


      {/* 
      <div className='flex flex-col relative w-[350px]'>
        <img src='./assets/header2.1.png'></img>

        <div className='flex flex-col absolute bottom-[250px] left-7 items-start text-white'>
        <span className='text-[50px]'>
            $ <span className='text-[70px] font-bold'>100</span>
        </span>
        <span>PER PERSON</span>
        </div>

        <div className='flex flex-col items-start gap-4 pt-5'>
            <span className='text-black font-bold text-[25px]'>Motorcycle Expeditions</span>
            <p className='text-start opacity-55'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam recusandae tempora exe
                rcit
                ationem, enim molestiae mollitia aut excepturi! Quaerat, maxime fug.
            </p>

            <button className='bg-red-600 rounded-full w-[30%] text-white p-[8px] mt-5'>BOOK NOW</button>
        </div>
       
      </div>



      <div className='flex flex-col relative w-[350px]'>
        <img src='./assets/header2.2.png'></img>

        <div className='flex flex-col absolute bottom-[250px] left-7 items-start text-white'>
        <span className='text-[50px]'>
            $ <span className='text-[70px] font-bold'>100</span>
        </span>
        <span>PER PERSON</span>
        </div>

        <div className='flex flex-col items-start gap-4 pt-5'>
            <span className='text-black font-bold text-[25px]'>Mountains Motorcycle Tours</span>
            <p className='text-start opacity-55'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam recusandae tempora exe
                rcit
                ationem, enim molestiae mollitia aut excepturi! Quaerat, maxime fug.
            </p>

            <button className='bg-red-600 rounded-full w-[30%] text-white p-[8px] mt-5'>BOOK NOW</button>
        </div>
       
      </div>


      <div className='flex flex-col relative w-[350px]'>
        <img src='./assets/header2.3.png'></img>

        <div className='flex flex-col absolute bottom-[250px] left-7 items-start text-white'>
        <span className='text-[50px]'>
            $ <span className='text-[70px] font-bold'>100</span>
        </span>
        <span>PER PERSON</span>
        </div>

        <div className='flex flex-col items-start gap-4 pt-5'>
            <span className='text-black font-bold text-[25px]'>Mountains Motorcycle Tours</span>
            <p className='text-start opacity-55'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam recusandae tempora exe
                rcit
                ationem, enim molestiae mollitia aut excepturi! Quaerat, maxime fug.
            </p>

            <button className='bg-red-600 rounded-full w-[30%] text-white p-[8px] mt-5'>BOOK NOW</button>
        </div>
       
      </div>



       */}

    </div>
  )
}

export default Header2
