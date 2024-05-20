import React from 'react'
import Contact from './Contact'


const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen gap-10 mt-24 mb-10'>

      <Contact/>

      <div className='flex flex-row items-center justify-center gap-7 flex-wrap'>
        <i className='fa-brands fa-facebook-f  border-2 border-yellow-400 rounded-[100%] p-[10px] h-[55px] w-[55px] flex items-center justify-center border-solid cursor-pointer '></i>
        <i className='fa-brands fa-google-plus-g  border-2 border-yellow-400 rounded-[100%] p-[10px] h-[55px] w-[55px] flex items-center justify-center border-solid cursor-pointer '></i>
        <i className='fa-brands fa fa-vk  border-2 border-yellow-400 rounded-[100%] p-[10px] h-[55px] w-[55px] flex items-center justify-center border-solid cursor-pointer '></i>
        <i className='fa-brands fa fa-youtube  border-2 border-yellow-400 rounded-[100%] p-[10px] h-[55px] w-[55px] flex items-center justify-center border-solid cursor-pointer '></i>
        <i className='fa-brands fa fa-linkedin  border-2 border-yellow-400 rounded-[100%] p-[10px] h-[55px] w-[55px] flex items-center justify-center border-solid cursor-pointer '></i>
        <i className='fa-brands fa fa-digg  border-2 border-yellow-400 rounded-[100%] p-[10px] h-[55px] w-[55px] flex items-center justify-center border-solid cursor-pointer '></i>
        <i className='fa-brands fa fa-twitter  border-2 border-yellow-400 rounded-[100%] p-[10px] h-[55px] w-[55px] flex items-center justify-center border-solid cursor-pointer '></i>
      </div>

    </div>
  )
}

export default Footer