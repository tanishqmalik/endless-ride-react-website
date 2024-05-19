import React from 'react'
import { data3 } from '../../constants'

const Card2 = () => {
  return (
    <div>

        {data3.map((ele, index)=>{
            return (
                <div key={index} className='flex flex-col items-start gap-5'>
                <span id="header3_subheading" className='text-[28.8px] text-white'>{ele.subheading}</span>
                <p className='text-white opacity-65 w-[56%] text-start'>{ele.subpara}</p>
    
                <span id="header3_subheading" className='text-[28.8px] text-white'>{ele.subheading}</span>
                <p className='text-white opacity-65 w-[56%] text-start'>{ele.subpara}</p>
    
                <span id="header3_subheading" className='text-[28.8px] text-white'>{ele.subheading}</span>
                <p className='text-white opacity-65 w-[56%] text-start'>{ele.subpara}</p>
                </div>
            )
        })}

    </div>
  )
}

export default Card2
