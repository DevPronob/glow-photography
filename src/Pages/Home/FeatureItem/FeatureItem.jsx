import React from 'react';
import { BiPhotoAlbum } from 'react-icons/bi';
import { BiEdit } from 'react-icons/bi';
import { BsCameraReels } from 'react-icons/bs';
const FeatureItem = () => {
    return (
        <div>
            <section class="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="sm:text-center">
      <h2 class="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
         <br class="sm:hidden" />
        What Wr Offer
      </h2>
      <hr class="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
    </div>

    <div class="mx-auto mt-20 grid lg:max-w-screen-xl grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
      <div class="backdrop-blur-lg flex flex-col items-center relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
        <h4 className='text-5xl text-orange-600'><BiPhotoAlbum/></h4>
        
        <p class="relative text-3xl font-black text-blue-600">Photography</p>
        <p class="relative mt-5 text-gray-600">A photography agency is a business that specializes in representing professional photographers, helping them find assignments and clients, managing their bookings managing </p>
      </div>

      <div class="backdrop-blur-lg flex flex-col items-center relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
      <h4 className='text-5xl text-orange-600'><BiEdit/></h4>
        <p class="relative text-3xl font-black text-blue-600">Photo Editing</p>
        <p class="relative mt-5 text-gray-600">Photo editing can range from simple adjustments like exposure and color correction to more complex tasks like removing objects, compositing multiple images, and creative enhance</p>
      </div>

      <div class="backdrop-blur-lg flex flex-col items-center relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
      <h4 className='text-5xl text-orange-600'><BsCameraReels/></h4>
        <p class="relative m-0 text-3xl font-black text-blue-600">Videography</p>
        <p class="relative mt-5 text-gray-600">Videography is the process of capturing and recording moving images, often accompanied by audio, to create videos or films. It's a versatile and creative medium used in various fields</p>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}

export default FeatureItem;
