import React from 'react';

const CustomCard = ({ imageSrc, price, title, description }) => {
  return (
    <div className='flex flex-col relative w-[350px]'>
      <img src={imageSrc} alt="Card Image" />

      <div className='flex flex-col absolute bottom-[250px] left-7 items-start text-white'>
        <span className='text-[50px]'>
          $ <span className='text-[70px] font-bold'>{price}</span>
        </span>
        <span>PER PERSON</span>
      </div>

      <div className='flex flex-col items-start gap-4 pt-5'>
        <span className='text-black font-bold text-[25px]'>{title}</span>
        <p className='text-start opacity-55'>{description}</p>
        <button className='bg-red-600 rounded-full w-[30%] text-white p-[8px] mt-5'>BOOK NOW</button>
      </div>
    </div>
  );
};

export default CustomCard;