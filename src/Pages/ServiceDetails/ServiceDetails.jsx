import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useApi from '../../Components/ApiHook';
import axios from 'axios';
import './ServiceDetails.css'
const ServiceDetails = () => {
    // const [services, setService] = useState([]);
    const { id } = useParams();
  
    const location = useLocation();
  const services = location.state.data;
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const apiUrl = 'data.json'; // Replace with your API endpoint URL
    //       const response = await axios.get(apiUrl);
    //       const data = response.data;
    //       setService(data);
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, [id]); // Empty dependency array to fetch data once when the component mounts
  
    const servicesWithFeature = services.find(service => service.id === id);
    console.log(servicesWithFeature,"iddd")

    return (
        <div>
           <div className="px-12 pt-[80px]">
      <div class="grid grid-cols-3 gap-4 pt-12">
        <div class="col-span-1  p-4 details__description">
          <h3>{servicesWithFeature.name}</h3>
          <p className="details__description__text">
           {servicesWithFeature.description}
          </p>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                fill="#0076CE"
              />
            </svg>
            <p className="details__description__review"><span>4.8 </span> (89)</p>

            



          </div>
          <div>
          <div class=" my-10 max-w-xxl rounded-xl px-6 py-10 text-gray-600 shadow">
  {/* <p class="mb-2 text-2xl">Never miss your important emails</p> */}
 <div className="box__inner">
 <p class="mb-6 ">Basic to complex Service</p>
 <p class="mb-6 font-bold text-2xl">{servicesWithFeature.pricing}</p>
 </div>
<div className="flex gap-2">
{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="#0076CE"/>
</svg> */}
{/* <span>{data.deliveryTime}</span> */}
</div>

  <button class="flex items-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
    <span> Learn more </span>
    <span
      ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
        <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
      </svg>
    </span>
  </button>

  <div className="flex items-center justify-between pt-6">
  <button className="btn1 ">Purchese</button>
<button className="btn2 ">Chat with me</button>
  </div>
</div>


<div>
<div class="mx-auto my-10 max-w-xxl rounded-xl px-6 py-2 text-gray-600  shadow">
  <p class="text-var-fs-search-text text-black font-poppins text-4xl pb-5 font-bold my-2">What people say?</p>
  <p class="mb-6 text-var-fs-search-text text-black  text-[18px] pt-5 font-normal leading-8 mt-2">Absolutely stunning photos! The photographer captured the essence of the moment perfectly.
   I couldn't be happier</p>
  <div className="flex items-center justify-center pb-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="10" viewBox="0 0 86 10" fill="none">
<circle cx="45" cy="5" r="5" fill="#C5C5C5"/>
<circle cx="63" cy="5" r="5" fill="#C5C5C5"/>
<circle cx="81" cy="5" r="5" fill="#C5C5C5"/>
<rect width="32" height="10" rx="5" fill="#0076CE"/>
</svg>
  </div>
</div>


</div>



            </div>
        </div>
        <div class="col-span-2  p-4">
       <div className="flex items-center justify-center">
       <img src={servicesWithFeature.samples[0]} alt="A beautiful landscape"/>
       </div>
       <div className="about__decription ms-[5rem] mt-2">
<h2 className="text-var-fs-search-text text-black font-poppins text-[35px] font-bold">About  {servicesWithFeature.name}</h2>
<div className="des_main flex items-center justify-between pt-7 pr-16">
<div>
    <p className="text-gray-600  text-[16px] font-bold leading-8">Duration</p>
    <h5 className="text-black font-poppins text-base font-normal leading-8">{servicesWithFeature.duration}</h5>
</div>
<div>
<p className="text-gray-600  text-[16px] font-bold leading-8">Photographer</p>
    <h5 className="text-black font-poppins text-base font-normal leading-8">{servicesWithFeature.photographer}</h5>
</div>
<div>
<p className="text-gray-600  text-[16px] font-bold leading-8">Location</p>
<h5 className="text-black font-poppins text-base font-normal leading-8">{servicesWithFeature.location}</h5>
</div>
</div>
<div>

</div>
       </div>
       {/* <div className="ms-[5rem]">
       <p className="text-gray-600  text-[16px] font-bold leading-8">ABOUT</p>
       <p className="text-black font-poppins text-base font-normal leading-8">{data.about.description}</p>
       </div> */}
       <div className=" ms-[5rem] flex justify-start gap-x-36 mt-9">
        <div>
        <p className="text-gray-600  text-[16px] font-bold leading-8">SERVICES I OFFER</p>
        {
            servicesWithFeature?.special_features.map(it =>{
                return  <li className="text-var-fs-search-text text-black font-poppins text-base font-normal leading-9">{it}</li>
            })
           

        }
        </div>
        <div>
        <p className="text-gray-600  text-[16px] font-bold leading-8">WHY ME?</p>
       
      <li className="text-var-fs-search-text text-black font-poppins text-base font-normal leading-9">Any-time Service</li>
      <li className="text-var-fs-search-text text-black font-poppins text-base font-normal leading-9">24/7 support</li>


        </div>
       </div>
        </div>
       
      </div>
       {/* other part */}
       <div>
       {/* <section class="py-20">
  <h1 class="mb-12 ps-20 font-sans text-4xl font-bold text-gray-900">Recommended for you</h1>
  <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
    

    {
        Alldata?.slice(0,3).map(items =>{
           return  <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
           <a href="#">
             <div class="relative flex items-end overflow-hidden rounded-xl">
               <img className="h-[286px]" src={items.image} alt="Hotel Photo" />
             </div>
     
             <div class="mt-1 p-2 flex items-center justify-between">
               <h2 class="text-2xl font-bold  text-black">{items.name}</h2>
     
               <div class=" flex items-end justify-between">
                 <p>
                   <span class="text-2xl font-bold  text-black">{items.price}</span>
                   
                 </p>
                
     
               </div>
              
             </div>
             <p className="details__description__review  pt-19 pb-4 ms-2 pt-2"><span>{items.rating}</span> ({items.reviewCount})</p>
             <div className="flex items-center justify-center">
             <button style={{ paddingLeft: '8.25rem', paddingRight: '8.25rem' }} type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2">
             View services
</button>
             </div>
           </a>
         </article>
        })
    }

   
  </div>
</section> */}

         </div>
    </div> 
        </div>
    );
}

export default ServiceDetails;

// "duration": "Varies based on the project",
//       "photographer": "Sarah Johnson",
//       "location": "Studio or On-site",