import React from 'react'
import { data2 } from '../../constants'

function Header6() {
  return (
    <div>
      <div className='flex flex-col gap-10 1059_px:pt-10'>
        <div className='flex flex-col gap-5'>
            <span className='font-oswald font-medium text-[48px]'>TRAVEL BLOG</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem explicabo maxime doloremque voluptatibus excepturi vitae quidem, labore animi quasi! Sapiente, dolore enim! Autem temporibus deserunt ea tenetur velit a.</p>
        </div>

        <div className='flex flex-row justify-evenly flex-wrap gap-5 626_px:pt-[70px]'>
            {data2.map((ele,index)=>{
                return(

                    
                    <div key={index} className='flex flex-col relative w-[350px]'>
                        <img src={ele.img}></img>

                        <div className='flex flex-col absolute bottom-[230px] left-7 items-start text-white'>
                            <span className='text-[30px]'>
                                {ele.subheading}
                            </span>
                            <span>20 MAY 2020</span>
                        </div>


                        <div className='flex flex-col items-start gap-4 pt-5'>
                            <span className='text-black font-medium text-[25px] text-start'>{ele.heading}</span>
                            <p className='text-start opacity-55'>
                                {ele.para}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Header6