import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllServices = () => {
    const [services, setService] = useState([]);
  const navigate =useNavigate()

  useEffect(() => {
    const apiUrl = 'data.json'; // Replace with your API endpoint URL

    axios.get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        console.log('Data:', response.data);
        setService(response.data);
        // setstate(response.data)
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
      });
  }, []);
  const nagivateToDetail = id=>{
    console.log(id)
    navigate(`/service/${id}`, { state: { data: services } });
  }
    return (
        <div>
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center">
              <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
                Services
              </h2>
              <hr className="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
            </div>
  
            <div className='mx-auto mt-20 grid lg:max-w-screen-xl grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3'>
              {services.map(service => (
                <div key={service.id} className="mx-auto my-10 max-w-xs rounded-xl px-6 py-10 text-gray-600 shadow">
                  {/* <div className="mb-4 w-20 rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">Feature</div> */}
                  <img  alt={service.icon} src={service.icon?service.icon:"no icon"} className="mb-4 max-w-[100px]" />
                  <h3 className="mb-2 text-2xl">{service.name}</h3>
                  <p className="mb-6 text-gray-400">{service.description}</p>
                  
                  <button onClick={()=>nagivateToDetail(service.id)} className="flex items-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
                    <span>Details</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
}

export default AllServices;
