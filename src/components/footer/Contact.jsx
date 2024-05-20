import React from 'react'
import { contactData } from '../../constants'

const Contact = () => {
    return (
        <div className='flex flex-row items-center justify-center w-screen  gap-32 flex-wrap'>
            {contactData.map((ele, index) => {
                return (
                    <div key={index}  className='flex flex-row items-center gap-7'>
                        <img  src={ele.img}></img>
                        <div className='flex flex-col items-start'>
                            <span className="font-medium text-[28px]">{ele.heading}</span>
                            <span>{ele.detail1}</span>
                            <span>{ele.detail2}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Contact
