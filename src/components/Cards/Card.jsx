import React from 'react'
import { data } from '../../constants'

function Card() {
  return (
    <div id='card' className='flex flex-row items-center justify-center  w-screen flex-wrap gap-7 626_px:pt-[70px]'>

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
              <span className='text-black font-semibold text-[25px]'>{ele.heading}</span>
              <p className='text-start opacity-55'>
                {ele.para}
              </p>

              <button className='bg-red-600 rounded-full w-[30%] text-white p-[8px] mt-5'>BOOK NOW</button>
            </div>
          </div>

        )

      })}
    </div>
  )
}

export default Card
