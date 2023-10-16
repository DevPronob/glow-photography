import React from 'react';

const Blog = () => {
    return (
        <div>
            <section class="relative overflow-hidden  py-12 sm:py-16 lg:py-20">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="sm:text-center">
      <h2 class="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
         <br class="sm:hidden" />
        Recent Posts
      </h2>
      <hr class="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
    </div>

    {/* <div class="mx-auto mt-20 grid lg:max-w-screen-xl grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
      <div class="backdrop-blur-lg flex flex-col items-center relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
        <h4 className='text-5xl text-orange-600'><BiPhotoAlbum/></h4>
        
        <p class="relative text-3xl font-black text-blue-600">Photography</p>
        <p class="relative mt-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque vel</p>
      </div>

      <div class="backdrop-blur-lg flex flex-col items-center relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
      <h4 className='text-5xl text-orange-600'><BiEdit/></h4>
        <p class="relative text-3xl font-black text-blue-600">Photo Editing</p>
        <p class="relative mt-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque vel</p>
      </div>

      <div class="backdrop-blur-lg flex flex-col items-center relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
      <h4 className='text-5xl text-orange-600'><BsCameraReels/></h4>
        <p class="relative m-0 text-3xl font-black text-blue-600">Videography</p>
        <p class="relative mt-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque vel</p>
      </div>
    </div> */}

<div class="relative mx-auto max-w-md pt-10 sm:max-w-screen-sm md:max-w-[1000px]">
  <div class="mx-auto grid w-full sm:grid-cols-2 lg:grid-cols-3">
    <article class="flex w-full p-4 duration-500 hover:bg-white hover:shadow-lg">
      <a href="#"
        ><div class="flex items-center justify-center">
          <img src="https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/the-rings.jpg" class="block h-auto w-full max-w-full align-middle" />
        </div>
        <div class="p-5">
          <span class="py-2 text-xs font-bold">EBOOK</span>
          <p class="mb-4 text-xl">Ebook Readers and Devices: Choosing the Right One for You</p>
        </div></a
      >
    </article>

    <article class="flex w-full p-4 duration-500 hover:bg-white hover:shadow-lg">
      <a href="#"
        ><div class="flex items-center justify-center">
          <img src="https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/wedding-flowers-arch.jpg" class="block h-auto w-full max-w-full align-middle" />
        </div>

        <div class="p-5">
          <span class="py-2 text-xs font-bold">SUCCESS STORY</span>
          <p class="mb-4 text-xl">From Home Kitchen to Multi-Million Dollar Bakery: The Rise of Sweet Sensations</p>
        </div></a
      >
    </article>

    <article class="flex w-full p-4 duration-500 hover:bg-white hover:shadow-lg">
      <a href="#"
        ><div class="flex items-center justify-center">
          <img src="https://demo.unitemplates.com/camera/images/portfolio/photography-4/wedding/the-bouquet.jpg" class="block h-auto w-full max-w-full align-middle" />
        </div>

        <div class="p-5">
          <span class="py-2 text-xs font-bold">WHITE PAPER</span>
          <p class="mb-4 text-xl">White papers are fact-based and rely on research and evidence to support their arguments</p>
        </div></a
      >
    </article>

   
  </div>
</div>

  </div>
</section>

        </div>
    );
}

export default Blog;





