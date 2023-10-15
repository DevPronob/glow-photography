import React from 'react';
import CountUp from 'react-countup';

const OurSuccess = () => {
    return (
        <div>
            <section class="flex mt-[60px] flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 text-gray-800 md:max-w-screen-xl">

  <div class="grid gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-4">
    <div class="rounded-md text-center  bg-white p-8 ">
      <div class="my-4 ">
        <div class="mr-4  text-2xl text-blue-500">
          {/* <!-- et:beaker --> */}
          <CountUp
  start={1200}
  end={1400}
  duration={2.75}
//   decimals={2}
  />
          
        </div>
        <h3 class="text-2xl mt-2 font-bold md:text-xl">CUSTOMERS</h3>
      </div>

    </div>
    <div class="rounded-md text-center  bg-white p-8 ">
      <div class="my-4  ">
        <div class="mr-4  text-2xl text-blue-500">
          {/* <!-- et:beaker --> */}
          <CountUp
  start={75860}
  end={75870}
  duration={2.75}
//   decimals={2}
  />
        </div>
        <h3 class="text-2xl font-bold md:text-xl">Picture SHOTS</h3>
      </div>
    </div>
    <div class="rounded-md text-center  bg-white p-8 ">
      <div class="my-4 ">
        <div class="mr-4  text-2xl text-blue-500">
          {/* <!-- et:beaker --> */}
          <CountUp
  start={50}
  end={58}
  duration={2.75}
//   decimals={2}
  />
        </div>
        <h3 class="text-2xl font-bold md:text-xl">EVENTS</h3>
      </div>
     
    </div>
    <div class="rounded-md text-center  bg-white p-8 ">
      <div class="my-4 ">
        <div class="mr-4  text-2xl text-blue-500">
          {/* <!-- et:beaker --> */}
          <CountUp
  start={1}
  end={14}
  duration={2.75}
//   decimals={2}
  />
        </div>
        <h3 class="text-2xl font-bold md:text-xl">AWARDS</h3>
      </div>

    </div>
  </div>
</section>

        </div>
    );
}

export default OurSuccess;
