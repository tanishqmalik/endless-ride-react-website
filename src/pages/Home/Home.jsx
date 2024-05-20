import React from 'react'
import Hero from '../../components/hero/hero'
import Card from '../../components/Cards/Card';
import { bike2, pfp, blackRider, background5, section7, bigIcon } from '../../assets'
import Card2 from '../../components/Cards/Card2';
import Card3 from '../../components/Cards/Card3';
import './Home.css'
import Blog from '../../components/Cards/Blog';




const Home = () => {
  return (
    <div >
      <Hero />
      <Card />

      <section id="section3_container" className='flex flex-row w-screen relative mt-40 '>

        <div id="box1" className='relative top-[-27px] border-solid bg-red-600 w-[65%] h-[63vh] flex items-center justify-center'>
          <div id="card2_sub2" className=' flex flex-col gap-5 items-start'>
            <span id="card2_heading" className='text-white text-[48px] font-medium relative left-28 font-oswald'>WE ARE WORLD WIDE</span>
            < Card2 />
          </div>
        </div>

        <div id="box2" className='relative border-solid bg-D9D9D9 w-[65%] h-[63vh] top-8 flex items-center justify-center' >
          <Card3 />
        </div>

        <img id="bike2" src={bike2} className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2'></img>
      </section>



      <section id="one" className='flex flex-col gap-[40px] items-center justify-center w-screen pt-[130px] 1059_px:gap-0'>
        <div className='flex flex-col items-center'>
          <span className='text-[48px] font-medium'>WE ARE <span className='text-red-600'>WORLD WIDE</span></span>
          <p className='w-[65%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque, illum ut mollitia repellat consequuntur fugit. Excepturi quidem soluta delectus, quis et odit .</p>
        </div>

        <div id="two" className='flex flex-row items-center justify-center gap-36 1059_px:flex-col'>
          <div className='  w-[45%] h-[45vh] border-solid bg-D9D9D9 flex flex-col items-center justify-center gap-11 mt-24 1059_px:w-[90%] '>
            <div className='flex flex-row items-center gap-4 justify-center'>
              <img src={pfp}></img>
              <div className='flex flex-col items-end'>
                <span className='text-[24px]'>JOHN SMITH</span>
                <span className='opacity-55 text-[15px]' >SOLO TRAVELLER</span>
              </div>
            </div>
            <p className='w-[70%]'>”Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</p>
          </div>

          <div>
            <img src={blackRider}></img>
          </div>
        </div>
      </section>


      <section className=" h-[100vh] w-screen  bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-56 pb-52 1059_px:hidden" style={{ backgroundImage: `url(${background5})` }}>
        <div id="part1" className='flex flex-col items-center pb-6'>
          <span className='text-[48px] text-white font-medium'>GUIDED MOTORCYCLE TOURS <span className='text-red-600'>SINCE 1880.</span></span>
          <p className='text-white w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad veritatis deserunt obcaecati placeat quos est. Magnam nam ducimus sed,em praesentium iusto?</p>
        </div>

        <div className='flex flex-row text-white'>
          <div className="">
            <div className='flex flex-col items-center gap-10'>
              <div className="flex flex-row gap-10 items-center">
                
                <div className=''>
                  <div class="text-[40px] font-medium leading-9">1000<span className='text-[28px]'>km</span></div>
                  <div class="small-bottom text-[20px]">2 Days</div>
                </div>

                <div class="data-big font-medium">
                  <div class="text-[60px] leading-9">3000<span>km</span></div>
                  <div class="big-bottom text-[30px]">7 days</div>
                </div>

              </div>
              <p className='w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div class="tours-right">
            <div className='flex flex-col items-center gap-10'>
              <div className="flex row gap-10 items-center">
                <div class="data-big font-medium flex flex-col items-center">
                  <div class="text-[60px] leading-9">50+</div>
                  <div class="big-bottom text-[30px]">Countries</div>
                </div>
                <div class="data-small">
                  <div class="text-[40px] font-medium leading-9">1000<span className='text-[28px]'>km</span></div>
                  <div class="small-bottom text-[20px]">2 Days</div>
                </div>
              </div>
              <p className='w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

      </section>



      <section className='flex flex-col gap-10 1059_px:pt-10 items-center w-screen justify-center'>
        <div className='flex flex-col gap-5 items-center'>
          <span className='font-oswald font-medium text-[48px]'>TRAVEL BLOG</span>
          <p className='w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem explicabo maxime doloremque voluptatibus excepturi vitae quidem, labore animi quasi! Sapiente, dolore enim! Autem temporibus deserunt ea tenetur velit a.</p>
        </div>
        <Blog />
      </section>


      <section className='w-screen h-[30rem] bg-no-repeat bg-center bg-cover flex flex-col justify-center mt-20 relative' style={{ backgroundImage: `url(${section7})` }}>
        <div className='text-white flex flex-col items-center gap-5 pb-20'>
          <span className=' text-[48px] font-semibold'>START YOUR JOURNEY</span>
          <p className='w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem explicabo maxime doloremque voluptatibus excepturi vitae quidem, labore animi quasi! Sapiente, dolore enim! Autem temporibus deserunt ea tenetur velit a.</p>
        </div>

        <div className='absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <img src={bigIcon}></img>
        </div>

      </section>

    </div>
  )
}

export default Home
