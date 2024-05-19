import React from 'react'
import { data4 } from '../../constants'


const Card3 = () => {
    return (
        <div id="card3" className='flex flex-col gap-10 relative left-28'>
            {data4.map((ele, index) => {
                return (
                    <div id="card3_sub" key={index}className=' flex flex-col w-[35vw] gap-10'>
                        <div className='flex flex-row gap-5'>
                            <img src={ele.img}></img>
                            <div className='flex flex-col items-start'>
                                <div className='flex items-center gap-5 pl-4'>
                                    <span className='text-[48px] text-gray-800 font-medium'>{ele.name}</span>
                                    <span className='opacity-50'>MAIN RIDER</span>
                                </div>
                                <p className='w-[60%] text-start pl-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Card3
