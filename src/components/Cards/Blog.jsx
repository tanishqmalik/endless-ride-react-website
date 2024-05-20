import React from 'react'
import { data2 } from '../../constants'

const Blog = () => {
    return (
        <div>
            <div className='flex flex-row  flex-wrap gap-10 626_px:pt-[70px] items-center justify-center'>
                {data2.map((ele, index) => {
                    return (


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
    )
}

export default Blog



