import React from 'react';
import './OurSpecialization.css'
const OurSpecialization = () => {
    return (
        <div>
             <section class="relative overflow-hidden bg-gray-100  py-12 sm:py-16 lg:py-20">
             <div className='about__company px-4 sm:px-6 lg:px-8'>
<div className='about__company__img'>
<img src="https://demo.unitemplates.com/camera/images/photography-4/team_01.jpg" alt="Description of the image" />
</div>
<div className='about__company__content'>
  {/* accdian start */}
  <ul class="space-y-4">
    {/* <li class="text-left">
      <label for="accordion-1" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-1" checked />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Model Catalogs</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Lorem ipsum, consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
          </div>
        </div>
      </label>
    </li> */}

    <li class="text-left">
      <label for="accordion-2" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-2" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Model Catalogs</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
          </div>
        </div>
      </label>
    </li>

    <li class="text-left">
      <label for="accordion-2" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-2" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Weddings</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
          </div>
        </div>
      </label>
    </li>

    <li class="text-left">
      <label for="accordion-3" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-3" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Music Concerts</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
          </div>
        </div>
      </label>
    </li>

    <li class="text-left">
      <label for="accordion-4" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Product Photos</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
          </div>
        </div>
      </label>
    </li>
  </ul>
  {/* accodian end */}
</div>
</div>
             </section>
        </div>
    );
}

export default OurSpecialization;


{/* <div className='main__container pb-18'>


<div className='about__company'>
<div className='about__company__img'>
<img src="https://demo.unitemplates.com/camera/images/photography-4/team_01.jpg" alt="Description of the image" />
</div>
<div className='about__company__content'>
  <h2>Samuel Jackson</h2>
  <h5>CAMERAMAN</h5>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
</div>


<div className='about__company__content'>
<h2>Bairon Mendoza</h2>
<h5>PHOTOGRAPHER</h5>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
</div>
<div className='about__company__img'>
<img src="https://demo.unitemplates.com/camera/images/photography-4/team_02.jpg" alt="Description of the image" />
</div>
</div>





</div>
    </div> */}