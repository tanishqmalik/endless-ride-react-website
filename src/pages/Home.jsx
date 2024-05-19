import React from 'react'
import Hero from '../components/hero/hero'
import Card from '../components/Cards/Card';
import { bike2 } from '../assets'
import Card2 from '../components/Cards/Card2';
import Card3 from '../components/Cards/Card3';
import './Home.css'


const Home = () => {
  return (
    <div >
      <Hero />
      <Card />

      <section id="section3_container" className='flex flex-row w-screen relative mt-40 '>

        <div id="box1" className='relative top-[-27px] border-solid bg-red-600 w-[65%] h-[63vh] flex items-center justify-center'>
          <div id="card2_sub2"className=' flex flex-col gap-5 items-start'>
            <span id="card2_heading" className='text-white text-[48px] font-medium relative left-28 font-oswald'>WE ARE WORLD WIDE</span>
            < Card2 />
          </div>
        </div>

        <div id="box2" className='relative border-solid bg-D9D9D9 w-[65%] h-[63vh] top-8 flex items-center justify-center' >
          <Card3 />
        </div>

        <img id="bike2" src={bike2} className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2'></img>
      </section>

    </div>
  )
}

export default Home
