import React from 'react'
import Hero from '../components/hero/hero'
import Card from '../components/Cards/Card';
import { bike2 } from '../assets'
import Card2 from '../components/Cards/Card2';


const Home = () => {
  return (
    <div >
      <Hero />
      <Card />

      <div className='flex flex-row w-screen relative mt-40'>

        <div className='relative top-[-27px] border-solid bg-red-600 w-[65%] h-[63vh] flex items-center justify-center'>
          <div className=' flex flex-col gap-5 items-start'>
            <span id="header3_headings" className='text-white text-[48px] font-medium'>WE ARE WORLD WIDE</span>
            <Card2/>
          </div>
        </div>

        <div className='relative border-solid bg-D9D9D9 w-[65%] h-[63vh] top-8' ></div>

        <img src={bike2} className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2'></img>
      </div>

    </div>
  )
}

export default Home
