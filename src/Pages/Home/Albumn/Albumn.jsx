import React from 'react';
import PhotoAlbum from "react-photo-album";
const Albumn = () => {
    const photos = [
        { src: "https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/couple-outdoors.jpg", width: 1600, height: 900 },
        { src: "https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/marriage-ovation.jpg", width: 1600, height: 900 },
        { src: "https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/promise-of-love.jpg", width: 1600, height: 900 },
        { src: "https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/the-bouquet.jpg", width: 1600, height: 900 },
        { src: "https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/the-rings.jpg", width: 1600, height: 900 },
        { src: "https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/wedding-flowers-arch.jpg", width: 1600, height: 900 },
        { src: "https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/throwing-bouquet.jpg", width: 1600, height: 900 },
        { src: "https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/wedding-flowers-arch.jpg", width: 1600, height: 900 },
      ];
    return (
        <div>
            <div>
            <section class="relative overflow-hidden  py-12 sm:py-16 lg:py-20">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="sm:text-center">
      <h2 class="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
         <br class="sm:hidden" />
         Latest Album
      </h2>
      <hr class="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
    </div>

    {/* part */}
   <div className='mt-8'>
   <PhotoAlbum photos={photos} layout="rows" />
   </div>
  </div>
</section>

        </div> 
        </div>
    );
}

export default Albumn;
