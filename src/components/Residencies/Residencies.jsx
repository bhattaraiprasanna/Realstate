import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper';
import "swiper/css";
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import "./Residencies.css";
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

function Residencies() {
  return (
    <div>
      <section className='r-wrapper'>
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>Popular Residencies</span>
          </div>

          {/* Initialize Swiper with modules */}
          <Swiper
            {...sliderSettings}
            modules={[Navigation, Pagination, Mousewheel]} // Add Swiper modules here
            navigation // Enable navigation arrows
            pagination={{ clickable: true }} // Add clickable pagination dots
            mousewheel // Allow mousewheel scrolling
          >
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Residencies;
