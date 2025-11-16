import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Slide.scss';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const defaultSlides = [
  { src: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-4.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-5.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-6.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-7.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-8.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-9.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-10.jpg' },
];

export default function Slide({ slides = defaultSlides }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoHeight={true}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.src} />
            {item.text && <p>{item.text}</p>}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {slides.slice(0, 8).map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.src} />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
}
