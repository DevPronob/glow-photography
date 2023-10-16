import React from 'react';

const Testomonial = () => {
    return (
        <div>
            <section class="bg-gray-100 py-12  sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center">
      <div class="text-center">
        <p class="text-lg font-medium text-blue-600">What clients say about their experience with us</p>
        <h2 class="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">Client Testimonials</h2>
      </div>

      {/* <div class="order-3 mt-8 text-center md:mt-16">
        <button class="mb-20 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">More reviews on TrustPilot</button>
      </div> */}

      <div class="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
        <div class="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
          <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:py-8 lg:px-7">
            <div class="flex-1">
              <p class="text-2xl font-bold">Absolutely recommended!</p>

              <blockquote class="mt-8 flex-1">
                <p class="leading-relaxed text-blue-900">The photography service exceeded our expectations. The images captured our special day with a level of artistry and emotion we could have only dreamed of.</p>
              </blockquote>
            </div>

            <div class="mt-8 border px-8 inline-flex items-center rounded-md shadow-sm atext-white py-1 g-blue-400 ">
              <div class="">
                <p class="text-base font-bold ">James Khawalski</p>
                <p class="mt-0.5 text-sm">CEO, Mavoline</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
          <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:py-8 lg:px-7">
            <div class="flex-1">
              <p class="text-2xl font-bold">Service was amazing!</p>

              <blockquote class="mt-8 flex-1">
                <p class="leading-relaxed text-blue-900">The photographer's attention to detail and dedication to ensuring every shot was perfect was truly impressive. We couldn't be happier with the results.</p>
              </blockquote>
            </div>

            <div class="mt-8 border px-8 inline-flex items-center rounded-md shadow-sm atext-white py-1 g-blue-400 ">
              <div class="">
                <p class="text-base font-bold ">Jacob Jones</p>
                <p class="text-blue-90 mt-0.5 text-sm">Youtube Personality</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
          <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:py-8 lg:px-7">
            <div class="flex-1">
              <p class="text-2xl font-bold">Saved me 1000s of hours</p>

              <blockquote class="mt-8 flex-1">
                <p class="leading-relaxed text-blue-900">Working with this photography service was a delight. They made us feel comfortable and natural in front of the camera, resulting in photographs that truly reflect our personalities and the essence of the moment</p>
              </blockquote>
            </div>

            {/* <div class="mt-8 border px-8 inline-flex items-center rounded-md shadow-sm atext-white py-1 g-blue-400 ">
              <div class="">
                <p class="text-base font-bold ">Jenny Wilson</p>
                <p class="text-blue-90 mt-0.5 text-sm">Esports Commentator</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}

export default Testomonial;
