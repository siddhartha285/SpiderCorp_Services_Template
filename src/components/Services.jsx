import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, []);

  return (
    <div>
      <Carousel
        selectedItem={activeIndex}
        onChange={(index) => setActiveIndex(index)}
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={2000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="img1" />
          <p className='legend'>Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="img2" />
          <p className='legend'>Peer to Peer Support</p>
        </div>
      </Carousel>
    </div>
  );
}
