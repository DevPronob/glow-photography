import React from 'react';

const AgencySection = () => {
    return (
        <div>
          <div class="">
  <div class="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-20 lg:max-w-screen-xl lg:px-8">
    <div class="flex flex-col items-center justify-between lg:flex-row">
      <div class="">
        <div class="lg:max-w-xl lg:pr-5 pt-5">
          <h2 class="mb-2 max-w-lg font-bold text-4xl  leading-snug tracking-tight  sm:text-4xl">
          Our Photography Agency's Journey to Growth
          </h2>
          <p class="text-base text-gray-700">
          Our photography agency's path to growth has been nothing short of extraordinary. 
          From humble beginnings rooted in a passion for photography to our current 
          status as a prominent player in the industry, our journey has been marked by dedication, creativity, 
          and an unyielding commitment to excellence.
Over the years, we've captured countless moments, transforming them into timeless memories.
          </p>
        </div>
        {/* <div class="mt-10 flex flex-col items-center md:flex-row">
          <a href="/" class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800">Stream Now </a>
          <a href="/" aria-label="" class="underline-offset-2 inline-flex items-center font-semibold text-blue-600 underline transition-colors duration-200 hover:underline">Watch how it works</a>
        </div> */}
        <div class="mt-12 flex flex-col space-y-3 divide-gray-300 text-sm text-gray-700 sm:flex-row sm:space-y-0 sm:divide-x">
          <div class="flex max-w-xs space-x-2 px-4">
            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg> */}
            <p className='text-xl'>+51 987 654 321</p>
          </div>
          <div class="flex max-w-xs space-x-2 px-4">
            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg> */}
            <p className='text-xl'>info@localhost.xyz</p>
          </div>
        </div>
      </div>
      <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
        <div class="w-fit  mx-auto overflow-hidden ">
          <img class="-mb-20" src="https://demo.unitemplates.com/camera/images/photography-4/agency.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
  
        </div>
    );
}

export default AgencySection;
