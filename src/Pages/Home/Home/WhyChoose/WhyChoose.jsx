import React from 'react';
import './WhyChoose.css'
import { MdVerified } from 'react-icons/md';
import { BsCamera } from 'react-icons/bs';
import { BiFootball } from 'react-icons/bi';

const WhyChoose = () => {
    return (
        <div class="container  mx-auto pt-16 pb-12 p-4">
        <div class="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          <div class=" p-4  relative">
          <img src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/successful-photographer-1024x682.jpg" alt="" class="container__main_image" />
          <div className='absolute top-0 right-0'>
          <img src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/elegant-wedding-couple-4-1024x682.jpg" class="container__secondary_image" />
          </div>
          </div>

          <div class=" p-4  pl-[34px] pr-[80px]">
          <h3 className='text-2xl font-semibold italic pt-4'>Why Choose Us</h3>
          <h2 className='text-4xl font-bold pt-3'>Adding the memories of every moment</h2>

          <div className='flex items-center pt-12 gap-4'>
            <h3 className='custom_icon'><MdVerified></MdVerified></h3>
            <div>
                <h4 className='text-3xl font-extrabold'>Professional</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <h3 className='custom_icon'><BsCamera></BsCamera></h3>
            <div>
                <h4 className='text-3xl font-extrabold'>Professional</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <h3 className='custom_icon'><BiFootball></BiFootball></h3>
            <div className='pt-[17px]'>
                <h4 className='text-3xl font-extrabold'>Professional</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>



          </div>
          
        </div>
      </div>
    );
}

export default WhyChoose;
