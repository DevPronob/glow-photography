import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Hero.css'
import { Navigation } from 'swiper/modules';
const Hero = () => {
    const items =[
        {
            name:"Fashion",
            bg:"https://demo.unitemplates.com/camera/images/portfolio/photography-4/forest/mountain-forest.jpg#joomlaImage://local-images/portfolio/photography-4/forest/mountain-forest.jpg?width=1920&height=1080",
            dec:"a dynamic and ever-evolving form of self-expression that goes beyond just clothing; it encompasses a wide range of styles, trends, and aesthetics. It's a reflection of our culture, identity, and personal tastes. Fashion enables individuals to convey their personality and creativity,"
        },
        {
            name:"Event",
            bg:"https://demo.unitemplates.com/camera/images/portfolio/photography-4/event/birthdays.jpg#joomlaImage://local-images/portfolio/photography-4/event/birthdays.jpg?width=1920&height=1080",
            dec:"Events are organized occasions or occurrences that bring people together for a specific purpose, such as entertainment, education, networking, celebration, or raising awareness. Events can vary widely in size, scale"
        },
        {
            name:"Animals",
            bg:"https://demo.unitemplates.com/camera/images/portfolio/photography-4/animals/tiger.jpg#joomlaImage://local-images/portfolio/photography-4/animals/tiger.jpg?width=1920&height=1080",
            dec:"Animal photography is a popular and fascinating genre of photography that focuses on capturing images of animals in their natural habitat, zoos, sanctuaries, or domestic environments."
        },
    ]

    return (
        <div>
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
             
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {
                items.map(it =>{
                    return <SwiperSlide>
<div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${it.bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                        <div className='hero__container'>
                        <div className='hero__content'>
                            <h3>{it.name}</h3>
                            <p>
                            {it.dec}</p>
                            <button className="btn btn-warning mt-2">Explore Gallery</button>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>
                })
            }
      </Swiper>
            
        </div>
    );
}

export default Hero;
