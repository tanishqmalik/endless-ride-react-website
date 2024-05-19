import React from 'react'

const Header5 = () => {
    return (
        <div className="bg-[url('src/assets/header5.png')] relative left-[-237px] w-[100vw] h-[100vh]  bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-56 pb-52 1059_px:hidden">
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

        </div>
    )
}

export default Header5
