import React from 'react'
import { background,Rectangle,bike } from '../../assets'
import Navbar from '../navbar/navbar'
import './hero.css'
// import { Rectangle } from '../../assets'


const Hero = () => {
    return (
        <div>
            <div id="hero" className='w-screen h-screen bg-no-repeat bg-cover bg-center relative overflow-hidden' style={{ backgroundImage: `url(${background})` }}>
                <img id="rectangle" src={Rectangle} className='absolute bottom-10 right-0 1331_px:right-[-90px]  1154_px:right-[-300px]'></img>

                <div id="header_content" className=' flex text-white pt-[210px]  flex-col items-center'>
                    <h1 id="heading_h1" className='text-[75px] w-[80vw]  font-Bebas relative font-extrabold italic leading-tight  '>2,500 tours in over 100 destinations and 36 years of experience!</h1>
                    <img id="img_header" className='h-[540px] w-[840px] relative bottom-10 ' src={bike}></img>
                </div>

                <Navbar />

            </div>
            
        </div>


    )
}

export default Hero
